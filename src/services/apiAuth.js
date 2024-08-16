import { supabase } from "./supabase";

export async function apiLogin({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new error("Incorrent email or password!");

  return data;
}

// if a user try to access any of the routes
export async function apiGetCurrentUser() {
  // checking if there's an active login
  const { data } = await supabase.auth.getSession();

  // if there's no active login
  if (!data?.session) return null;

  // if there's an acitve login, Get the user from the database to check if he's authenticated

  const { data: user, error } = await supabase.auth.getUser();

  if (error) throw new error(error.message);

  return user?.user;
}

export async function apiLogout() {
  let { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}

export async function apiSignUp({ emailaddress, password, fullname }) {
  const { data: user, error } = await supabase.auth.signUp({
    email: emailaddress,
    password,
    options: {
      data: {
        fullname,
      },
    },
  });
  if (error) throw new Error(error.message);

  // theme setting creation
  const { error: settingsError } = await supabase
    .from("Theme")
    .insert([{ user_id: user?.user?.id, theme: false }])
    .select();

  if (settingsError) throw new Error(settingsError.message);

  // filter and sort settings
  const { error: arrangementErrors } = await supabase
    .from("InvoiceArrangement")
    .insert([{ user_id: user?.user?.id, filterBy: null, sortBy: null }])
    .select();

  if (arrangementErrors) throw new Error(arrangementErrors.message);

  return user;
}

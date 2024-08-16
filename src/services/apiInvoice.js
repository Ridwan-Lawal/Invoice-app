import { supabase } from "./supabase";

// api to add invoice to supabase
export async function apiAddInvoice(newInvoice) {
  console.log(newInvoice);
  const { data, error } = await supabase
    .from("Invoice")
    .insert(newInvoice)
    .select();

  if (error) throw new Error(error.message);

  return data;
}

// api to read data from the api
export async function apiReadInvoice(userId) {
  const { data, error } = await supabase
    .from("Invoice")
    .select("*")
    .eq("user_id", userId);

  if (error) throw new Error(error.message);
  return data;
}

// api to read invoce by id
export async function apiReadInvoiceById({ invoiceId, user_id }) {
  const { data, error } = await supabase
    .from("Invoice")
    .select("*")
    .eq("user_id", user_id)
    .eq("id", invoiceId)
    .single();

  if (error) throw new Error(error.message);
  return data;
}

//  api to delete invoice
export async function apiDeleteInvoice({ invoiceId, user_id }) {
  const { error } = await supabase
    .from("Invoice")
    .delete()
    .eq("user_id", user_id)
    .eq("id", invoiceId);

  if (error) throw new error(`${error.message}: unable to delete invoice!`);
}

// api to mark invoice as paid
export async function apiMarkAsPaid({ invoiceId, user_id }) {
  const { data, error } = await supabase
    .from("Invoice")
    .update({ status: "paid" })
    .eq("user_id", user_id)
    .eq("id", invoiceId)
    .select();

  if (error) throw new Error("Couldn't mark invoice as paid");

  return data;
}

// api to edit and update invoice

export async function apiUpdateInvoice(invoice) {
  const { data, error } = await supabase
    .from("Invoice")
    .update(invoice)
    .eq("id", invoice?.id)
    .select();

  if (error) throw new error(error.message);
  return data;
}

// continue adding the user_id from this point onwards

export async function apiReadTheme(user_id) {
  let { data: Theme, error } = await supabase
    .from("Theme")
    .select("theme")
    .eq("user_id", user_id);

  if (error) throw new Error(error.message);

  return Theme;
}

// find a way to update the theme for each user

export async function apiUpdateTheme({ theme, user_id }) {
  const { data, error } = await supabase
    .from("Theme")
    .update({ theme, user_id })
    .eq("user_id", user_id)
    .select();

  if (error) throw new Error(error.message);

  return data;
}

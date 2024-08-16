import { supabase } from "./supabase";

// for the invoice filter, i will be using supabase
// for the sorting i will have to do it manually
export async function apiFilterInvoices(filterBy) {
  console.log(filterBy);
  const { data, error } = await supabase
    .from("Invoice")
    .select("*")
    .eq("status", filterBy);

  if (error) throw new Error("couldn't filter invoices");

  console.log(data);
  return data;
}

// for the updating the invoiceArrangement filterBy and sortBy column in supabase,

// DO THIS NEXT
// then i will read the data from the data and and use the function above for the filtering, and sort it manually
export async function apiUpdateFilterSort({ type, option, user_id }) {
  // the type and option is an object coming from each option i click in the filter or sort modal.
  // the 'type' is for distinguishing if it is filterBy or sortBy
  const { data, error } = await supabase
    .from("InvoiceArrangement")
    .update({ [type]: option })
    .eq("user_id", user_id)
    .select();

  if (error) throw new Error(error.message);

  return data;
}

// async function to read filter and sort
export async function apiReadFilterSort() {
  const { data: InvoiceArrangement, error } = await supabase
    .from("InvoiceArrangement")
    .select("*");

  if (error) throw new Error(error.message);

  return InvoiceArrangement;
}

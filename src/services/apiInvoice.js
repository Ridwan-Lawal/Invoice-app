import { supabase } from "./supabase";

import invoiceDatas from "../data/data.json";

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

// api add many rows
export async function apiInvoiceManyRows() {
  const { data, error } = await supabase
    .from("Invoice")
    .insert(invoiceDatas)
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

apiInvoiceManyRows();

// api to read data from the api
export async function apiReadInvoice() {
  const { data, error } = await supabase.from("Invoice").select("*");

  if (error) throw new Error(error.message);
  return data;
}

// api to read invoce by id
export async function apiReadInvoiceById(invoiceId) {
  console.log(invoiceId);
  const { data, error } = await supabase
    .from("Invoice")
    .select("*")
    .eq("id", invoiceId.queryKey[1])
    .single();

  if (error) throw new Error(error.message);
  return data;
}

//  api to delete invoice
export async function apiDeleteInvoice(invoiceId) {
  const { error } = await supabase.from("Invoice").delete().eq("id", invoiceId);

  if (error) throw new error(`${error.message}: unable to delete invoice!`);
}

// api to mark invoice as paid
export async function apiMarkAsPaid(invoiceId) {
  console.log(invoiceId);
  const { data, error } = await supabase
    .from("Invoice")
    .update({ status: "paid" })
    .eq("id", invoiceId)
    .select();

  if (error) throw new Error("Couldn't mark invoice as paid");

  return data;
}

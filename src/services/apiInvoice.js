import { supabase } from "./supabase";

import invoiceDatas from "../data/data.json";

// api to add invoice to supabase
export async function apiAddInvoice(newInvoice) {
  console.log(newInvoice);
  const { data, error } = await supabase
    .from("Invoice")
    .insert(newInvoice)
    .select();

  if (error) throw new Error("Couldn't add Invoice");

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
  let { data, error } = await supabase.from("Invoice").select("*");

  if (error) throw new Error(error.message);
  return data;
}

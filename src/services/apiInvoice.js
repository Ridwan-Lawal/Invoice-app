import { supabase } from "./supabase";

import invoiceDatas from "../data/data.json";

export async function apiInvoice() {
  const { data, error } = await supabase
    .from("Invoice")
    .insert([{ some_column: "someValue", other_column: "otherValue" }])
    .select();

  if (error) throw new Error("Couldn't add Invoice");

  return data;
}

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

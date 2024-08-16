import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://atkiegknjjlkamqrsucr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0a2llZ2tuampsa2FtcXJzdWNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTczMzYwMTEsImV4cCI6MjAzMjkxMjAxMX0.lE1fjWRbCkAEgd2MBg9fWVnV9adMkOoDBX8ltLaKpIg";
export const supabase = createClient(supabaseUrl, supabaseKey);

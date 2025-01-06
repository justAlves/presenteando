import { SupabaseClient } from "@supabase/supabase-js";

const supabaseClient = new SupabaseClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_KEY as string
);

export default supabaseClient;
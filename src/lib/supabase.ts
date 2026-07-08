import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type RSVP = {
  id: string;
  name: string;
  email: string;
  route: "30" | "60" | "100";
  donation_amount: number;
  message?: string;
  created_at: string;
};

export type SiteConfig = {
  id: string;
  key: string;
  value: string;
  updated_at: string;
};

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL as string | undefined) ?? '';
const supabaseAnonKey = (import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined) ?? '';

export const hasSupabaseConfig = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = hasSupabaseConfig
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  service_type?: string;
  message: string;
}

export async function submitContact(data: ContactSubmission) {
  if (!supabase) {
    throw new Error('missing-supabase-config');
  }
  const { error } = await supabase.from('contact_submissions').insert([data]);
  if (error) throw error;
}

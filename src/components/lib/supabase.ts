import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Agar variables missing hain to crash hone se pehle console par warning dikhaye
if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Missing Supabase Environment Variables inside .env.local")
}

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '')
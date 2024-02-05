import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://yqblgekndvcozqgzvdgc.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxYmxnZWtuZHZjb3pxZ3p2ZGdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY2NDkyMTUsImV4cCI6MjAyMjIyNTIxNX0.iH3DUuPp9OmXQifTax4ANfUTPgLMX6v3Z2yQTV9gDWQ';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

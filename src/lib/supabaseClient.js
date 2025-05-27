import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://your-https://lppoyhkzsyoynirwcafo.supabase.co-id.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwcG95aGt6c3lveW5pcndjYWZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgzMTU5MjksImV4cCI6MjA2Mzg5MTkyOX0.7wo-Wqq1tCZy0Cr-ToT3ZhuxwbnSHjJqMjGcbdTRMg0';
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
// Importa a função de criação do client Supabase via CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Cria o client com a URL e a chave fornecidas
export const supabase = createClient(
  'https://kkgmpaixcggfzotzbsfa.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtrZ21wYWl4Y2dnZnpvdHpic2ZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1MzU2NDUsImV4cCI6MjA2MjExMTY0NX0.wvG1Ak6Qoj_qG7DNTRrKpbKeXNNJZN3YoNRz8W1WTSE'
)
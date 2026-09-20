import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: import.meta.env.VITE_BLINK_PROJECT_ID || 'ald-pulse-market-lpwoox29',
  publishableKey: import.meta.env.VITE_BLINK_PUBLISHABLE_KEY || 'blnk_pk_0e9uqjJuBMqzG9_p2S1mzpApJ5BlYU2w',
  authRequired: false,
  auth: { mode: 'managed' },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const previewMode = process.env.BASE44_PREVIEW_MODE === '1';
const sandboxHostDomain = process.env.BASE44_SANDBOX_HOST_DOMAIN;

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: previewMode && sandboxHostDomain
      ? [`.${sandboxHostDomain}`]
      : true,
  },
})

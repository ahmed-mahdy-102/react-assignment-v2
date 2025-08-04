import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/react-assignment-v2/', // <-- This must match your repo name exactly!
  plugins: [react()],
});

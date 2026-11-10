// VITE CONFIGURATION
// Enables the React plugin so Vite can process JSX files in the project.
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Register the React plugin in the Vite development/build configuration.
export default defineConfig({
  plugins: [react()],
});

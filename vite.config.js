import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// 👇 replace "your-repo-name" with your actual repo name
export default defineConfig({
    plugins: [react(), tailwindcss()],
    base: "/Gallery-Axios/",
})
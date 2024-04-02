import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => {
  return {
    plugins: [
      react(),
      {
        name: "build-script",
        buildStart() {
          if (command === "build") {
            console.log(process.env.VITE_PUBLIC_SHARE_KEY);
          }
        },
      },
    ],
  };
});

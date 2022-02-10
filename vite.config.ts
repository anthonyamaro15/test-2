import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
   plugins: [react()],
   // css: {
   //    // preprocessorOptions: {
   //    //    scss: {
   //    //       charset: false,
   //    //       quietDeps: true,
   //    //    },
   //    // },
   //    postcss: {
   //       plugins: [
   //          {
   //             postcssPlugin: "internal:charset-removal",
   //             AtRule: {
   //                charset: (atRule) => {
   //                   if (atRule.name === "charset") {
   //                      atRule.remove();
   //                   }
   //                },
   //             },
   //          },
   //       ],
   //    },
   // },
   base: "./",
   build: {
      outDir: "./build",
      assetsDir: "./static",
   },
});

/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            blueColor: "#1eb9c8",
            purpleColor: "#453585",
            grayColor: "#dcdcdc",
            blackColor: "#080808",
            whiteColor: "#FFFFFF",
         },
      },
   },
   plugins: [],
}

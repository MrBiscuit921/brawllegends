import "./globals.css"; // Import global styles if any
import React from "react";
import PredictiveInput from "./components/PredictiveInput"; // Ensure the correct path to your component

export const metadata = {
  title: "Brawl Legends",
  description: "The new best brawlhalla legend viewer",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <PredictiveInput />
      </body>
    </html>
  );
}

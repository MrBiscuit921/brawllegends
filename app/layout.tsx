// app/layout.tsx
import "./global.css"; // Import global styles if any
import React from "react";
import PredictiveInput from "./PredictiveInput"; // Ensure the correct path to your component

export const metadata = {
  title: "Brawl Legends",
  description: "The new best brawlhalla legend viewer",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
      </head>
      <body>
        <PredictiveInput />
      </body>
    </html>
  );
}

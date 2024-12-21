import Page from "./page";
import {Analytics} from "@vercel/analytics/react";
import "./globals.css";
import AdSense from "@/components/AdSense";

export const metadata = {
  title: "Brawl Legends",
  description: "The new Best way to Veiw Brawlhalla Legends",
  icons: {
    icon: "/favicon.ico",
  },
  
};

export default function RootLayout() {
  return (
    <html lang="en">
      <meta name="google-adsense-account" content="ca-pub-2469585557731671"></meta>
      <head>
        <AdSense pId="ca-pub-2469585557731671" />
      </head>
      <body>
        <div>
          <Page />
        </div>
        <Analytics />
      </body>
    </html>
  );
}

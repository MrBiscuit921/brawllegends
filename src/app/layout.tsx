import Page from "./page";
import "./globals.css";

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
      <body>
        <div>
          <Page />
        </div>
      </body>
    </html>
  );
}

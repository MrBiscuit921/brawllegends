import Page from "./page";

export const metadata = {
  title: "Brawl Legends",
  description: "The new Best way to Veiw Brawlhalla Legends",
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

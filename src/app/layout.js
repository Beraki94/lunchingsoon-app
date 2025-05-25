import "./globals.css";

export const metadata = {
  title: "Joeandjoe Bag Wholesale",
  description: "Lagos Bag Wholeseller",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

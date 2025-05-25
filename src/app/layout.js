import "./globals.css";

export const metadata = {
  title: "Joeandjoe Bag Wholesale",
  description: "Luxury and Affordable Bag Wholesaler at New Mandilas International Market Lagos Nigeria",
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

export const metadata = {
  title: "SaharNail",
  description: "Professional Manicure & Pedicure in Almere. Book online."
};
import "../styles/globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from './clinetlayout';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Idea Company | Innovate. Develop. Empower.",
  description:
    "Discover The Idea Company – where innovation meets execution. We build solutions that empower businesses, startups, and communities to grow and thrive.",

  // Favicon
  icons: {
    icon: "/favicon.ico", // Place favicon.ico in the /public folder
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  {/* Google Analytics */}
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZLJQH5BZTM"></script>
  <script dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-ZLJQH5BZTM');
    `,
  }} />
</head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
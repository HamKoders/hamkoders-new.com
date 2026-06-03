import BootstrapClient from "@/components/BootstrapClient";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TawkChat from "@/components/TawkChat";

export const metadata = {
  title: "Design Agency for Startups | Branding, UI/UX & Web Solutions",
  description: "We help startups grow through bold branding, UI/UX design, and smart web solutions that turn big ideas into real results. Let's bring your vision to life today.",
  icons: {
    icon: [{ url: "/logo.svg" }, { url: "/logo.svg", type: "image/svg+xml" }],
    apple: "/logo.svg",
    shortcut: "/logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.gtranslateSettings = {"default_language":"en","languages":["en","de"],"wrapper_selector":".gtranslate_wrapper","flag_size":16,"switcher_horizontal_position":"inline","flag_style":"3d"}`
          }}
        />
        <script src="https://cdn.gtranslate.net/widgets/latest/dwf.js" defer></script>
      </head>
      <body>
        <BootstrapClient />
        {children}
        <TawkChat />
      </body>
    </html>
  );
}

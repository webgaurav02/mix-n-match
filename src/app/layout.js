import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Onlybees Events",
  description: "Discover and book tickets for the most exciting DJ nights, college events, and music concerts. Explore events, book tickets, and create unforgettable memories with OnlyBees!",
  keywords: [
      "OnlyBees", "event booking", "DJ nights", "college events", "music concerts", "tickets", "Meghalaya nightlife", "music festival in Meghalaya",
      "Hip-Hop and R&B", "Afrobeats music", "local talent in Meghalaya", "national artists in India",
      "live music event", "cultural exchange", "audiovisual experience", "entertainment in Meghalaya",
      "upcoming music festivals", "music events in India"
  ],
  og: {
    title: "OnlyBees - Discover Amazing Events",
    type: "website",
    url: "https://event.onlybees.in",
    description: "Join OnlyBees to find and book tickets for the best DJ nights, college events, and music concerts near you."
  },
  twitter: {
    card: "summary_large_image",
    site: "@OnlyBees",
    title: "OnlyBees - Your Premier Event Booking Platform",
    description: "Book your next adventure with OnlyBees! Discover DJ nights, college events, and music concerts.",
  },
  author: "Gaurav Joshi",
  date: "2024-05-20",
  location: "Shillong, Meghalaya, India",
  tags: ["Music Festival", "Nightlife", "Live Performance", "Cultural Event"],
  audience: "Music enthusiasts, Party-goers, Cultural explorers, Local and National artists",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}

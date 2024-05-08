import Image from "next/image";
import Navbar from "../Components/Navbar";
import EventDetailsAlchemy from "../Components/EventDetailsAlchemy";
import Footer from "../Components/Footer";

export const metadata = {
  metadataBase: new URL('https://event.onlybees.in'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    images: "/alchemy.jpeg",
    title: "Jameson Connect x Pure Feat. ZOKHUMA by Alchemy",
    description: "Book your tickets for Jameson Connect x Pure from Onlybees Events",
  },
  title: "Jameson Connect x Pure Feat. ZOKHUMA by Alchemy",
  description: "Join us this Saturday at NYX Lounge & Deck in Guwahati for Jameson Connects x Pure featuring DJ Zokhuma and Kangkan Nath.",
  keywords: [
    "Jameson Connects x Pure", "NYX Lounge & Deck", "Guwahati nightlife", "electronic music event",
    "DJ Zokhuma", "Kangkan Nath", "nightlife in Guwahati", "music event in Assam",
    "live DJ performance", "nightclub event", "party in Guwahati", "nightlife experience"
],
  twitter: {
    card: "summary_large_image",
    images: "/alchemy.jpeg",
    site: "@OnlyBees",
    title: "Jameson Connect x Pure Feat. ZOKHUMA by Alchemy",
    description: "Book your tickets for Jameson Connect x Pure from Onlybees Events",
  },
  date: "2024-05-31",
  date: "2024-05-11",
  location: "NYX Lounge & Deck, Guwahati, Assam",
  tags: ["Nightlife", "Music Event", "DJ Night", "Party", "Jameson Connects x Pure"],
  organizer: "Jameson Connects x Pure, Alchemy",
  audience: "Music enthusiasts, Nightlife aficionados, Party-goers",
  socialMediaHashtags: ["#JamesonConnectsPure", "#GuwahatiNightlife", "#NYXLoungeDeck"],
};

export default function Event() {
  return (
    <>
      <Navbar mode="dark" />
      <EventDetailsAlchemy />
      <Footer mode="dark" />
    </>
  );
}

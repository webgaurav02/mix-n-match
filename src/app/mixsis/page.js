import Image from "next/image";
import Navbar from "../Components/Navbar";
import EventDetailsMixSis from "../Components/EventDetailsMixSis";
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
    images: "/mix-sis.png",
    title: "The Mix'sis: A Celebration of Diversity and Inclusivity in Music",
    description: "Book your tickets for Mix'sis from Onlybees Events",
  },
  title: "The Mix'sis: A Celebration of Diversity and Inclusivity in Music",
  description: "The Mix'sis is not just an event; it's a celebration of diversity, talent, and inclusivity in the realm of music. Join us for an electrifying atmosphere with an all-female DJ lineup, showcasing unique styles and favorite genres. Experience the magic of The Mix'sis, a sanctuary where everyone can freely express themselves and be inspired by the empowering sounds of talented female DJs. Join the movement and celebrate unity through the power of music.",
  keywords: [
    "Mix'sis event", "Onlybees Events", "Meghalaya nightlife", "music festival in Meghalaya",
    "Hip-Hop and R&B", "Afrobeats music", "local talent in Meghalaya", "national artists in India",
    "live music event", "cultural exchange", "audiovisual experience", "entertainment in Meghalaya",
    "upcoming music festivals", "music events in India"
  ],
  twitter: {
    card: "summary_large_image",
    site: "@OnlyBees",
    title: "The Mix'sis: A Celebration of Diversity and Inclusivity in Music",
    description: "Book your tickets for Mix'sis from Onlybees Events",
  },
  date: "2024-05-31",
  location: "Shillong, Meghalaya India",
  tags: ["Music Festival", "Nightlife", "Live Performance", "DJ Night", "The Yeastern Civilization"],
  organizer: "Onlybees",
  audience: "Music enthusiasts, Party-goers, Cultural explorers, Local and National artists, Women, Girls, Ladies",
  socialMediaHashtags: ["#TheMixsis", "#MeghalayaMusic", "#OnlybeesEvents"],
};

export default function Event() {
  return (
    <>
      <Navbar mode="dark" />
      <EventDetailsMixSis />
      <Footer mode="dark" />
    </>
  );
}

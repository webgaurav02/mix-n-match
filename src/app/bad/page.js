
import Navbar from "../Components/Navbar";
import EventBad from "../Components/EventBad";
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
      images: "/bad.png",
      title: "B.A.D and Friends: Book tickets",
      description: "Join B.A.D, Banjop, Kamari, and Vince at the Evening Club on June 6th",
    },
    title: "B.A.D and Friends: Book tickets",
    description: "'A Dream Of Three.' B.A.D is a trio of music producers based in the beautiful town of Shillong, Meghalaya, India. With roots in E.D.M, Pop and Hip-Hop music, they are striving to mark their presence in the music industry. Solely driven by their love and passion for making music, they are an uprising talent in their city and they bring a fresh new sound to the local scene.",
    keywords: [
      "B.A.D and Friends", "Evening Club events", "Shillong music scene", "EDM in Shillong",
      "Pop and Hip-Hop music", "Banjop live", "Kamari live", "Vince live",
      "local music talent in Meghalaya", "music producers in India", "live music events", 
      "entertainment in Shillong", "upcoming music events", "music events in India"
    ],
    twitter: {
      card: "summary_large_image",
      site: "@OnlyBees",
      title: "B.A.D and Friends: Book tickets",
      description: "Join B.A.D, Banjop, Kamari, and Vince at the Evening Club on June 6th",
    },
    date: "2024-06-06",
    location: "Shillong, Meghalaya India",
    tags: ["Live Music", "EDM", "Pop Music", "Hip-Hop", "B.A.D Trio"],
    organizer: "Onlybees",
    audience: "Music enthusiasts, Party-goers, Cultural explorers, Local and National artists",
    socialMediaHashtags: ["#BADandFriends", "#ShillongMusic", "#OnlybeesEvents"],
  };
export default function Event() {
  return (
    <>
      <Navbar mode="dark" />
      <EventBad />
      <Footer mode="dark" />
    </>
  );
}

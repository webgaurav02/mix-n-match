import Image from "next/image";
import Navbar from "../Components/Navbar";
import EventDetails from "../Components/EventDetails2";
import Footer from "../Components/Footer";
import Head from "next/head";


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
        images: "/c1.png",
        title: "Kilometre Zero - An art and food affair",
        description: "Book your tickets into Kilometre Zero with OnlyBees!",
      },
    title: "Kilometre Zero - An art and food affair",
    description: "Immerse yourself in an extraordinary art collaborative event, where sustainability meets artistic expression, and culinary creativity intertwines with personal growth.",
    keywords: [
        "Art Collaborative Event", "Sustainability Movement", "Culinary Creation", "Personal Growth", "Kilometre Zero Movement",
        "Responsible Sourcing", "Carbon Footprint Reduction", "Nature Connection", "Cultural Appreciation", "Inner Exploration",
        "Holistic Well-being", "Artistic Expression", "Storytelling", "Food and Art Fusion", "Innovation", "Connection", "Inspiration"
    ],
    twitter: {
        card: "summary_large_image",
        site: "@OnlyBees",
        title: "Kilometre Zero - An art and food affair",
        description: "Book your tickets into Kilometre Zero with OnlyBees!",
    },
    date: "2024-05-20",
    location: "Ri Bhoi, Meghalaya, India",
    tags: ["Art Festival", "Sustainability", "Culinary Experience", "Cultural Exploration"],
    organizer: "Onlybees",
    audience: "Art Enthusiasts, Sustainability Advocates, Food Connoisseurs, Cultural Explorers",
    socialMediaHashtags: ["#KilometreZeroArt", "#SustainabilityEvent", "#ArtandCulinaryExperience", "#CulturalExploration"],
};

export default function Event() {
    return (
        <>
            <Navbar mode="dark" />
            <EventDetails />
            <Footer mode="dark" />
        </>
    );
}
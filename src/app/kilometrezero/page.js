import Image from "next/image";
import Navbar from "../Components/Navbar";
import EventDetails from "../Components/EventDetails2";
import Footer from "../Components/Footer";
import Head from "next/head";


export const metadata = {
    title: "Kilometre Zero - An art and food affair",
    description: "Immerse yourself in an extraordinary art collaborative event, where sustainability meets artistic expression, and culinary creativity intertwines with personal growth.",
    keywords: [
        "Art Collaborative Event", "Sustainability Movement", "Culinary Creation", "Personal Growth", "Kilometre Zero Movement",
        "Responsible Sourcing", "Carbon Footprint Reduction", "Nature Connection", "Cultural Appreciation", "Inner Exploration",
        "Holistic Well-being", "Artistic Expression", "Storytelling", "Food and Art Fusion", "Innovation", "Connection", "Inspiration"
    ],
    date: "2024-05-20",
    location: "Ri Bhoi, Meghalaya, India",
    tags: ["Art Festival", "Sustainability", "Culinary Experience", "Cultural Exploration"],
    organizer: "Onlybees",
    audience: "Art Enthusiasts, Sustainability Advocates, Food Connoisseurs, Cultural Explorers",
    socialMediaHashtags: ["#KilometreZeroArt", "#SustainabilityEvent", "#ArtandCulinaryExperience", "#CulturalExploration"]
};

export default function Event() {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keywords.join(', ')} />
                <meta property="og:title" content={metadata.title} />
                <meta property="og:description" content={metadata.description} />
                <meta property="og:image" content="/public/c1.png" />
                {/* Add more og tags as needed */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://event.onlybees.in/kilometrezero" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <Navbar mode="dark" />
            <EventDetails />
            <Footer mode="dark" />
        </>
    );
}
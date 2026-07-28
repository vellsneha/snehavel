import advantageSuzukiImage from "../../gallery/AdVantage Community Demo at Suzuki Inovation Center.jpeg?url";
import feedforwardBankImage from "../../gallery/FeedForward for Capital One Area Bank.jpeg?url";
import gdscImage from "../../gallery/GDSC.webp?url";
import ironsiteImage from "../../gallery/IRONSITE Hackathon.jpeg?url";
import smithFoodBankImage from "../../gallery/SMITHxCAPITALONE AREA FOODBANK.jpg?url";
import suzukiImage from "../../gallery/SUZUKI.jpeg?url";
import suzuki2Image from "../../gallery/SUZUKI2.jpg?url";
import technicaImage from "../../gallery/TECHNICA.jpeg?url";
import tedxImage from "../../gallery/TEDX.jpeg?url";
import tedxTeamImage from "../../gallery/TedXIARE Team.jpeg?url";
import edamWorkshopImage from "../../gallery/UI UX Workshop e-DAM.jpeg?url";
import edamTeamImage from "../../gallery/e-DAM Team.jpeg?url";

export type GalleryItem = {
  id: string;
  title: string;
  meta: string;
  image?: string;
  aspectRatio: number;
  hue: number;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "ironsite",
    title: "Ironsite Hackathon",
    meta: "VISTA · Runner-up · Feb 2026",
    image: ironsiteImage,
    aspectRatio: 1365 / 2048,
    hue: 198,
  },
  {
    id: "technica",
    title: "Technica",
    meta: "FinGraph · UMD · Nov 2025",
    image: technicaImage,
    aspectRatio: 1066 / 757,
    hue: 38,
  },
  {
    id: "smith-foodbank",
    title: "Smith × Capital Area Food Bank",
    meta: "FeedForward · Runner-up · Aug 2025",
    image: smithFoodBankImage,
    aspectRatio: 4000 / 6000,
    hue: 168,
  },
  {
    id: "feedforward-bank",
    title: "FeedForward",
    meta: "Capital Area Food Bank",
    image: feedforwardBankImage,
    aspectRatio: 1200 / 1600,
    hue: 168,
  },
  {
    id: "tedx",
    title: "TEDx IARE",
    meta: "Nature vs Nurture",
    image: tedxImage,
    aspectRatio: 1600 / 1200,
    hue: 12,
  },
  {
    id: "tedx-team",
    title: "TEDx IARE Team",
    meta: "Nature vs Nurture",
    image: tedxTeamImage,
    aspectRatio: 1206 / 1182,
    hue: 12,
  },
  {
    id: "gdsc",
    title: "GDSC",
    meta: "Google Developer Student Clubs",
    image: gdscImage,
    aspectRatio: 1872 / 3326,
    hue: 215,
  },
  {
    id: "suzuki",
    title: "Suzuki",
    image: suzukiImage,
    meta: "AdVantage · Team showcase",
    aspectRatio: 1536 / 2048,
    hue: 145,
  },
  {
    id: "suzuki-2",
    title: "Suzuki",
    image: suzuki2Image,
    meta: "AdVantage · Team showcase",
    aspectRatio: 3024 / 4032,
    hue: 145,
  },
  {
    id: "advantage-suzuki",
    title: "AdVantage × Suzuki",
    meta: "Community demo · Innovation Center",
    image: advantageSuzukiImage,
    aspectRatio: 1600 / 1200,
    hue: 145,
  },
  {
    id: "edam-workshop",
    title: "UI/UX Workshop",
    meta: "e-DAM",
    image: edamWorkshopImage,
    aspectRatio: 1206 / 1159,
    hue: 280,
  },
  {
    id: "edam-team",
    title: "e-DAM Team",
    meta: "e-DAM",
    image: edamTeamImage,
    aspectRatio: 1280 / 960,
    hue: 280,
  },
];

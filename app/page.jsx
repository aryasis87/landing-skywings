// app/page.jsx
"use client";
import React from "react";
import dynamic from "next/dynamic";
import HeroSection from "./components/HeroSection";
import DepartureBoard from './components/DepartureBoard';
import PopularDestinations from "./components/PopularDestinations";
import JourneySection from "./components/JourneySection";
import PromoSection from "./components/PromoSection";
import FeaturesSection from "./components/FeaturesSection";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import Partner from "./components/Partner";
import Message from "./components/Message";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PopularDestinations />
      <JourneySection />
      <PromoSection />
      <FeaturesSection />
      <DepartureBoard />
      <PricingSection />
      <FAQSection />
      <Message />
      <Partner />
    </main>
  );
}

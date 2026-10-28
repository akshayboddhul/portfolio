"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import DataArchitectureDeepDive from "@/components/DataArchitectureDeepDive";
import Toolkit from "@/components/Toolkit";
import EngineeringPrinciples from "@/components/EngineeringPrinciples";
import ExperienceJourney from "@/components/ExperienceJourney";
import Accreditations from "@/components/Accreditations";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F7F2] text-[#202522]">
      {/* 00 / Top Navigation */}
      <Header />

      <main id="main-content" className="flex-1">
        {/* Hero: The Engineer Behind the Systems + Pipeline Flow */}
        <Hero />

        {/* 01 / Selected Work: Real Projects & Architecture */}
        <SelectedWork />

        {/* 02 / Architecture & Lakehouse Design Deep-Dive */}
        <DataArchitectureDeepDive />

        {/* 03 / Data Engineering Toolkit: Clean Technical Index */}
        <Toolkit />

        {/* 04 / Engineering Principles: 6 Rules Forged in Production */}
        <EngineeringPrinciples />

        {/* 05 / Professional Journey: Verified Career Timeline */}
        <ExperienceJourney />

        {/* 06 / Accreditations: Databricks Certs & GitHub Badges */}
        <Accreditations />

        {/* 07 / About the Engineer: Philosophy & Focus */}
        <About />

        {/* 08 / Contact: Direct Channels & Composer */}
        <Contact />
      </main>

      {/* Colophon & Footer */}
      <Footer />
    </div>
  );
}

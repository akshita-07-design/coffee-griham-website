import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";

import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { WhyLove } from "@/components/site/WhyLove";
import { SignatureDrinks } from "@/components/site/SignatureDrinks";
import { FreshBites } from "@/components/site/FreshBites";
import { WorkSipConnect } from "@/components/site/WorkSipConnect";
import { PerfectCorner } from "@/components/site/PerfectCorner";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { InstagramGallery } from "@/components/site/InstagramGallery";
import { Visit } from "@/components/site/Visit";
import { FAQ } from "@/components/site/FAQ";


export const Route = createFileRoute("/")({
  component: Index,

  head: () => ({
    meta: [
      {
        title: "Coffee Griham — A peaceful corner in the heart of Bhilai",
      },
      {
        name: "description",
        content:
          "Handcrafted coffee, fresh sandwiches, warm lights and a cozy place to work, read or slow down. Vidya Vihar Colony, Bhilai. 4.6★ on Google.",
      },
      {
        property: "og:title",
        content:
          "Coffee Griham — A peaceful corner in the heart of Bhilai",
      },
      {
        property: "og:description",
        content:
          "Handcrafted coffee, fresh sandwiches, warm lights and a cozy place to work, read or slow down. Vidya Vihar Colony, Bhilai. 4.6★ on Google.",
      },
      {
        property: "og:image",
        content:
          "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/068051a0-5840-4f04-8e43-22f41a39c02c",
      },
    ],
  }),
});


function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />

      <Navbar />

      <main>
        <Hero />

        <About />

        <WhyLove />

        <SignatureDrinks />

        <FreshBites />

        <WorkSipConnect />

        <PerfectCorner />

        <Gallery />

        <Testimonials />

        <InstagramGallery />

        <Visit />

        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
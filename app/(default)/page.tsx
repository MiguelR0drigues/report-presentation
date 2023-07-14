"use client";
import Features from "@/components/features";
import Hero from "@/components/hero";
import ImageCarousel from "@/components/image-carousel";
import Testimonials from "@/components/testimonials";
import Zigzag from "@/components/zigzag";

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      {/* <Newsletter /> */}
      <Features />
      <Zigzag />
      <ImageCarousel />
    </>
  );
}

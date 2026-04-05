import Hero from "@/components/home/hero";
import FeaturedProperties from "@/components/home/featured-properties";
import WhyUs from "@/components/home/why-us";
import PropertyTypes from "@/components/home/property-types";
import ZonesSection from "@/components/home/zones-section";
import Testimonials from "@/components/home/testimonials";
import TeamPreview from "@/components/home/team-preview";
import BlogPreview from "@/components/home/blog-preview";
import CtaBanner from "@/components/home/cta-banner";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <WhyUs />
      <PropertyTypes />
      <ZonesSection />
      <Testimonials />
      <TeamPreview />
      <BlogPreview />
      <CtaBanner />
    </>
  );
}

import Hero from '@/components/Hero';
import Pillars from '@/components/Pillars';
import CollectionSection from '@/components/CollectionSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import CinematicVideoSection from '@/components/CinematicVideoSection';
import MenuSection from '@/components/MenuSection';
import StorySection from '@/components/StorySection';
import GallerySection from '@/components/GallerySection';
import ReviewsSection from '@/components/ReviewsSection';
import CoffeeClubBanner from '@/components/CoffeeClubBanner';
import LocationReservation from '@/components/LocationReservation';

export default function Home() {
  return (
    <>
      <Hero />
      <Pillars />
      <CollectionSection />
      <WhyChooseUs />
      <CinematicVideoSection />
      <MenuSection />
      <StorySection />
      <GallerySection />
      <ReviewsSection />
      <CoffeeClubBanner />
      <LocationReservation />
    </>
  );
}

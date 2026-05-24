import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Advantages from '@/components/Advantages';
import ProductSection from '@/components/ProductSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Advantages />
        <ProductSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

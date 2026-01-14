import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturesSection from "../components/FeaturesSection";
import WelcomeSection from "../components/WelcomeSection";
import AfterWelcomeSection from "../components/AfterWelcomeSection";
import Services from "../components/Services";
import Courses from "../components/Courses";
import Gallery from "../components/Gallery";
import TopPrefooter from "../components/TopPrefooter";
import PreFooter from "../components/Prefooter";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <FeaturesSection />
      <WelcomeSection />
      <AfterWelcomeSection />
      <Services />
      <Courses />
      <Gallery />
      <TopPrefooter/>
      <PreFooter />
      <Footer />
    </>
  );
}

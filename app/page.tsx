import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturesSection from "../components/FeaturesSection";
import WelcomeSection from "../components/WelcomeSection";
import AfterWelcomeSection from "../components/AfterWelcomeSection";
import StudentsStatsSection from "../components/StudentsStatsSection";
import Services from "../components/Services";
import Courses from "../components/Courses";
import InstituteSection from "../components/InstituteSection";
import CustomersReview from "../components/CustomersReview";
import IslamicInstitute from "../components/IslamicInstitute";
import Gallery from "../components/Gallery";
import NewsUpdate from "../components/NewsUpdate";
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
      <StudentsStatsSection />
      <Services />
      <Courses />
      <InstituteSection />
      <CustomersReview/>
      <IslamicInstitute />
      <Gallery />
      <NewsUpdate />
      <TopPrefooter/>
      <PreFooter />
      <Footer />
    </>
  );
}

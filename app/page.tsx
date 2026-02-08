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

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <WelcomeSection />
      <AfterWelcomeSection />
      <StudentsStatsSection />
      <Services />
      <Courses />
      <InstituteSection />
      <CustomersReview />
      <IslamicInstitute />
      <Gallery />
      <NewsUpdate />
    </>
  );
}

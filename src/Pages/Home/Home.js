import Heroes from "../../components/Heroes";
import CardSection from "../../components/Molecules/TopCardDisplay";
import Intro from "../../components/Molecules/Intro";
import BottomCardDisplay from "../../components/Molecules/BottomCardDisplay";
import TrippleIconIntro from "../../components/Molecules/TrippleIconIntro/TrippleIconIntro";
import ContactForm from "../../components/Molecules/ContactForm";

const Home = () => {
  return (
    <>
      <main>V
        <Intro />
        <CardSection />
        <BottomCardDisplay />

        <Heroes />
        <TrippleIconIntro />
        <ContactForm />
      </main>
    </>
  );
};

export default Home;

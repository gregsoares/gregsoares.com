import Heroes from "../../Components/Heroes";
import CardSection from "../../Components/Molecules/TopCardDisplay";
import Intro from "../../Components/Molecules/Intro";
import BottomCardDisplay from "../../Components/Molecules/BottomCardDisplay";
import TrippleIconIntro from "../../Components/Molecules/TrippleIconIntro/TrippleIconIntro";
import ContactForm from "../../Components/Molecules/ContactForm";

const Home = () => {
  return (
    <>
      <main>
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

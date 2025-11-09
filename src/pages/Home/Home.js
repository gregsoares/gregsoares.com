import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Heroes from '../../components/Heroes';
import CardSection from '../../components/Molecules/TopCardDisplay';
import Intro from '../../components/Molecules/Intro';
import BottomCardDisplay from '../../components/Molecules/BottomCardDisplay';
import TrippleIconIntro from '../../components/Molecules/TrippleIconIntro/TrippleIconIntro';
import ContactForm from '../../components/Molecules/ContactForm';
import ImageRight from '../../components/organisms/ImageRight';

const formSentSuccessfully = () =>
  toast.success('Message Sent', {
    position: 'top-center',
    autoClose: 5000,
    draggable: true,
    closeButton: true,
    theme: 'dark',
    icon: true
  });

const formFailedToSend = () =>
  toast.error('Error Attempting To Send', {
    position: 'top-center',
    autoClose: 5000,
    draggable: true,
    closeButton: true,
    theme: 'dark',
    icon: true
  });
const Home = () => {
  return (
    <>
      <main>
        <Intro />
        <CardSection />
        {/* <ImageRight /> */}
        {/* <BottomCardDisplay /> */}

        {/* <Heroes /> */}
        {/* <TrippleIconIntro /> */}
        <span>
          <ToastContainer autoClose={500} />
        </span>
        <ContactForm
          successToast={() => formSentSuccessfully()}
          failToast={() => formFailedToSend()}
        />
      </main>
    </>
  );
};

export default Home;

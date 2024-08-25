import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Heroes from '../../components/Heroes'
import CardSection from '../../components/TopCardDisplay'
import Intro from '../../components/Intro'
import BottomCardDisplay from '../../components/BottomCardDisplay'
import TrippleIconIntro from '../../components/TrippleIconIntro/TrippleIconIntro'
import ContactForm from '../../components/ContactForm'
import ImageRight from '../../components/ImageRight'

const formSentSuccessfully = () =>
  toast.success('Message Sent', {
    position: 'top-center',
    autoClose: 5000,
    draggable: true,
    closeButton: true,
    theme: 'dark',
    icon: true,
  })

const formFailedToSend = () =>
  toast.error('Error Attempting To Send', {
    position: 'top-center',
    autoClose: 5000,
    draggable: true,
    closeButton: true,
    theme: 'dark',
    icon: true,
  })
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
  )
}

export default Home

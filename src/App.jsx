import "./App.css";
import LandingCover from "./components/landingComponents/LandingCover.jsx";
import AudioController from "./components/landingComponents/AudioController.jsx";
import Cover from "./components/coverComponents/Cover.jsx";
import Verse from "./components/verseComponents/verse.jsx";
import GroomBrideIntro from "./components/GroomBrideIntroComponents/GroomBrideIntro.jsx";
import Events from "./components/eventsComponents/Events.jsx";
import Gallery from "./components/galleryComponents/Gallery.jsx";
import DigitalGift from "./components/digitalGiftComponents/DigitalGift.jsx";
import Footer from "./components/footerComponents/Footer.jsx";

function App() {
  return (
    <>
      <LandingCover />
      <AudioController />
      <div className="md:px-20 lg:px-80 flex flex-col gap-y-24 items-center justify-center w-full bg-white">
        <Cover />
        <Verse />
        <GroomBrideIntro />
        <Events />
        <Gallery />
        <DigitalGift />
        <Footer />
      </div>
    </>
  );
}

export default App;


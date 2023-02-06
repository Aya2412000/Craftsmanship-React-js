import AboutUs from "./Components/AboutUs/AboutUs";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import OurServices from "./Components/OurServices/OurServices";
export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Header />
        <AboutUs />
        <OurServices />
      </div>
    </>
  );
}

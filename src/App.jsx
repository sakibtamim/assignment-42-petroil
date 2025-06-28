import Banner from "./components/Banner";
import Blog from "./components/Blog";
import BrandLogo from "./components/BrandLogo";
import Gallery from "./components/Gallery";

import Header from "./components/Header";
import LearnAbout from "./components/LearnAbout";
import Menu from "./components/Menu";
import Service from "./components/Service";
import Wellcome from "./components/Wellcome";

function App() {
  return (
    <>
      <Header />
      <Menu />
      <Banner />
      <Wellcome />
      <Gallery />
      <Service />
      <LearnAbout />
      <BrandLogo />
      <Blog />
    </>
  );
}

export default App;

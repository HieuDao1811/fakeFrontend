import "./assets/css/base.css";
import "./assets/css/style.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";
import SectionSix from "./components/SectionSix";
import SectionSeven from "./components/SectionSeven";
import SectionEight from "./components/SectionEight";
import SectionNine from "./components/SectionNine";

function App() {
  return (
    <>
    <Header></Header>
    <div className="main">
      <SectionOne></SectionOne>
      <SectionTwo></SectionTwo>
      <SectionThree></SectionThree>
      <SectionFour></SectionFour>
      <SectionFive></SectionFive>
      <SectionSix></SectionSix>
      <SectionSeven></SectionSeven>
      <SectionEight></SectionEight>
      <SectionNine></SectionNine>
    </div>
    <Footer></Footer>
    </>
  );
}

export default App;

import Footer from "../../Shared/footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../banner/Banner";
import Offer from "../offer/Offer";
import Components from "../review/Components";

import Services from "../services/Services";

const Home = () => {
  return (
    <div>
      {/* <Navigation></Navigation> */}
      <Banner></Banner>
      <Services></Services>
      <Offer></Offer>
      <Components></Components>
      <Footer></Footer>
    </div>
  );
};

export default Home;

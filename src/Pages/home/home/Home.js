import Banner from "../banner/Banner";
import Offer from "../offer/Offer";
import Components from "../review/Components";

import Services from "../services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Offer></Offer>
      <Components></Components>
    </div>
  );
};

export default Home;

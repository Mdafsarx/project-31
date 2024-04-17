import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Cards from "./Cards";
import DealOfTheDay from "./DealOfTheDay";
import FiveFruit from "./FiveFruit";
import WhyChoseUs from "./WhyChoseUs";

const Home = () => {
    return (
        <div className="space-y-20 relative">
                  <Helmet>
                    <title>aFruits | Home </title>
                  </Helmet>
            <Banner />
            <FiveFruit />
            {/* w-7xl */}

            <div className="max-w-7xl mx-auto">
                <DealOfTheDay />
                <Cards />
                <WhyChoseUs/>
            </div>


        </div>
    );
};

export default Home;
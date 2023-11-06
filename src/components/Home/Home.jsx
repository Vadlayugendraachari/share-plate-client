import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import FeaturesFoods from "../FeaturedFood/FeaturesFoods";
import Testies from "../OurMemberSays/Testies";

const Home = () => {
    return (
        <div className="my-8">
            <Banner></Banner>
            <FeaturesFoods></FeaturesFoods>
            <AboutUs></AboutUs>
            <Testies></Testies>
        </div>
    );
};

export default Home;
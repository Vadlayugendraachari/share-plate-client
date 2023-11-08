import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import FeaturesFoods from "../FeaturedFood/FeaturesFoods";
import Testies from "../OurMemberSays/Testies";
import PageTitle from "../PageTitle";

const Home = () => {
    return (
        <div className="my-8">
        <PageTitle title='SharePlate | Home'></PageTitle>
            <Banner></Banner>
            <FeaturesFoods></FeaturesFoods>
            <AboutUs></AboutUs>
            <Testies></Testies>
        </div>
    );
};

export default Home;
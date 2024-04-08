import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FearuredJobs/FeaturedJobs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <h2>This is Home</h2>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;
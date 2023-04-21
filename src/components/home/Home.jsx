// import ProductsContainer from "../ProductsContainer/ProductsContainer";
import Categories from "./Categories";
import Clients from "./Clients";
import FAQ from "./FAQ";
import HeroSection from "./HeroSection";
import HomeContact from "./HomeContact";
import LatestAuctions from "./LatestAuctions";
import Newsletter from "./Newsletter";
function Home() {
    return (
        <>
        <HeroSection/>
        <Clients/>
        <LatestAuctions/>
        <Categories/>
        <FAQ/>
        <HomeContact/>
        <Newsletter/>
        </>
     );
}
 
export default Home;
// import ProductsContainer from "../ProductsContainer/ProductsContainer";
import Categories from "./Categories";
import Clients from "./Clients";
import FAQ from "./FAQ";
import HeroSection from "./HeroSection";
import HomeContact from "./HomeContact";
import HomeFooter from "./HomeFooter";
import LatestAuctions from "./LatestAuctions";
function Home() {
    return (
        <>
        <HeroSection/>
        <Clients/>
        <LatestAuctions/>
        <Categories/>
        <FAQ/>
        <HomeContact/>
        <HomeFooter/>
        </>
     );
}
 
export default Home;
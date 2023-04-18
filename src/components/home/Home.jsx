import ProductsContainer from "../ProductsContainer/ProductsContainer";
import Clients from "./Clients";
import HeroSection from "./HeroSection";
import HomeContact from "./HomeContact";
import HomeFooter from "./HomeFooter";
import LatestAuctions from "./LatestAuctions";
function Home() {
    return (
        <>
        <HeroSection/>
        <LatestAuctions/>
        {/* <Clients/> */}
        <HomeContact/>
        <HomeFooter/>
        </>
     );
}
 
export default Home;
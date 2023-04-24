import Categories from "./Categories";
import Clients from "./Clients";
import FAQ from "./FAQ";
import HeroSection from "./HeroSection";
import HomeContact from "./HomeContact";
import LatestAuctions from "./LatestAuctions";
import Newsletter from "./Newsletter";
import React, {useState, useEffect} from "react";

function Home() {
    const [latestProducts, setLatestProducts]=useState([])
    useEffect(() => {
        fetch("https://testing-e1kb.onrender.com/latest_products").then((response) => {
          if (response.ok) {
            response.json().then((data) => setLatestProducts(data));
          }
        });
      }, []);

    return (
        <>
        <HeroSection/>
        <Clients/>
        <LatestAuctions latestProducts={latestProducts}/>
        <Categories/>
        <FAQ/>
        <HomeContact/>
        <Newsletter/>
        </>
     );
}
 
export default Home;
import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

import Navbar from "../Navbar";
import Footer from "../Footer";

function ProductPage(){
    return(
        <>
        <Hero/>
        <LeftSection 
        imageURL="media/images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading plateform with streaming market
        data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your
        Android and iOS devices."
        tryDemo=""
        LearnMore=""
        googlePlay=""
        appStore="" 
     />
      <RightSection
              imageURL="media/images/console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account.Gain insights into your trades and investments with
        in-depth reports and visualisations."
       
        LearnMore=""
        />
        <LeftSection 
        imageURL="media/images/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commision-free, delivered directly to
        your Demat acoount. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        LearnMore=""
        googlePlay=""
        appStore="" 
     />
        <RightSection
          imageURL="media/images/kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experience with our super simple
        HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our
        clientbase."
       
        LearnMore=""
        />
          <LeftSection 
        imageURL="media/images/varsity.png"
        productName="Varsity mobile "
        productDescription="An easy grasp, collection of stock market lessons with in-depth
        coverage and illustrations. Content is broken down into bite-size cards to help you learn on
        the go."
        tryDemo=""
        LearnMore=""
        googlePlay=""
        appStore="" 
     />
     <p className="text-center mt-5 mb-5">Want to know more about our technology stacks? Check out the Zerodha. tech 
      blog.</p>
        <Universe/>
        </>
    );
}
export default ProductPage;
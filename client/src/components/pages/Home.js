import React from "react";
import CarouselComponent from "../Carousel";
import Cards from "../Cards";
import FooterV2 from "../Footerv2";
import HowItWorks from "../HowItWorks";

export default function Home() {
    return (
        <>
            <CarouselComponent/>
            <Cards/>
            <HowItWorks/>
            <FooterV2/>
        </>
    )
}
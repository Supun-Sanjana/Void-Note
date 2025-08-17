"use client"
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features/Features";
import Testermonial from "../components/Testermonials/Testermonial";
import Pricing from "../components/Pricing/Pricing";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import styles from "../app/css/page.module.css";

export default function Home() {


  return (
    <>
      <div
        className={styles.landing}

      >
        <ScrollToTop />
        <Header />
        <Hero />
        <Features />
        <Testermonial />
        <Pricing />
        <NewsLetter />
        <Footer />
      </div>


    </>
  );
}

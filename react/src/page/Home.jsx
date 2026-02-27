import Header from "../component/layout/global/Header";
import Hero from "../component/layout/home/Hero";
import About from "../component/layout/home/About";
import Why from "../component/layout/home/Why";
import Journey from "../component/layout/home/Journey";
import People from "../component/layout/home/People";
import Gallery from "../component/layout/home/Gallery";
import Footer from "../component/layout/global/Footer";
export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Why />
            <Journey />
            <People />
            <Gallery />
            <Footer />
        </>
    );
}
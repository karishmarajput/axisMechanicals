
import Navigation from "../components/Navbar"
import Main from "../components/Main"
import AboutUs from "../components/AboutUs"
import Mission from "../components/Mission"
import FAQ from "../components/FAQ"
import ReviewMain from "../components/ReviewMain"
import OurPartner from "../components/OurPartners"
import Links from "../components/Links"
import Footer from "../components/Footer"
import HomeServices from "../components/HomeServices"
function Home(){
    return(
        <div>
            <Navigation/>
            <Main/>
            <AboutUs/>
            <HomeServices/>
            <Mission/>
            <FAQ/>
            {/* <ReviewMain/> */}
            <OurPartner/>
            <Links/>
            <Footer/>
        </div>
    )
}
export default Home
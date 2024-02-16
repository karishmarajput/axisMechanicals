
import Navigation from "../components/Navbar"
import Main from "../components/Main"
import AboutUs from "../components/AboutUs"
import Mission from "../components/Mission"
import FAQ from "../components/FAQ"
import ReviewMain from "../components/ReviewMain"
import OurPartner from "../components/OurPartners"
import Footer from "../components/Footer"
function Home(){
    return(
        <div>
            <Navigation/>
            <Main/>
            <AboutUs/>
            <Mission/>
            <FAQ/>
            <ReviewMain/>
            <OurPartner/>
            <Footer/>
        </div>
    )
}
export default Home
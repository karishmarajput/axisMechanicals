import Navigation from "../components/Navbar"
import Footer from "../components/Footer"
import ApplyNow from "../components/ApplyNow"
import Partner from "../components/Partner"
import '../style/joinUs.css'
function JoinUs(){
    return(
        <div>
            <Navigation/>
            <div className="joinusMain">
            <h1><span>JOIN OUR TEAM TODAY!</span></h1>
            <div className="joinusContainer container">
                <div className="joinUsApplyNow">
                <ApplyNow/>
                </div>
                <div className="applyNowComments">
                    <p>We are always looking forward to hire and expand our team with professional and deserving candidate. </p>
                    <ul>
                        <li>Competitive salary</li>
                        <li>Extended Medical Benefits</li>
                        <li>On Job Training</li>
                        <li>Supporting Staff</li>
                    </ul>
                    <br/>
                    <p>Call us today to join the Team.</p>
                </div>
            </div>
       
            </div>
            <Partner/>

            <Footer/>
        </div>
    )
}
export default JoinUs
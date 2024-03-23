import Navigation from "../components/Navbar";
import Footer from "../components/Footer";
import ApplyNow from "../components/ApplyNow";
import Partner from "../components/Partner";
import '../style/joinUs.css'; // Import the CSS file
import Typewriter from "typewriter-effect";
function JoinUs(){
    return(
        <div>
            <Navigation/>
            <div className="joinusMain">
                <h1><span>
                <Typewriter
              options={{
                strings: ['JOIN OUR TEAM TODAY!'],
                autoStart: true,
                loop: true,
              }}
            /> </span></h1>
                <div className="joinusContainer container">
                    <div className="joinUsApplyNow">
                        <ApplyNow/>
                    </div>
                    <div className="applyNowComments">
                        <p>We are always looking forward to hiring and expanding our team with professional and deserving candidates.</p>
                        <ul>
                            <li>Competitive salary</li>
                            <li>Extended Medical Benefits</li>
                            <li>On-the-job Training</li>
                            <li>Supportive Staff</li>
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

export default JoinUs;

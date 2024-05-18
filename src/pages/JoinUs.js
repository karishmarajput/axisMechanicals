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
            <div className=" joinBg">
                
                <h1><span>
                JOIN OUR TEAM TODAY! </span></h1>
                <div className="contactText">
                    <h5>
                    We are always looking forward to hiring and expanding our team with professional and deserving candidates.
                    </h5>
                    <h4>
                    Call us today to join the Team.
                    </h4>
                    <br/>
                    <a class="mainBtn joinUsBtn" href="#joinUsForm">Apply Now</a>
                </div>
            </div>
            <div class="whyJoin">
                <div class="whyJoin1">
                    Competitive salary
                </div>
                <div class="whyJoin2">
                    Extended Medical Benefits
                </div>
                <div class="whyJoin3">
                    On-the-job Training
                </div>
                <div class="whyJoin4">
                    Supportive Staff
                </div>
            </div>
            <div class="joinusMain">
                <div class="joinusContainer container">
                    <div id="joinUsForm" class="joinUsApplyNow">
                        <h1>APPLY NOW</h1>
                        <div class="applyNowForm ">
                            <ApplyNow/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="partnerMain container" id="partnership">
            <Partner/>
            </div>
         
           
            <Footer/>
        </div>
    )
}

export default JoinUs;

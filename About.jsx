import React from "react";
import student from "./assets/student.jpg"
import CountUp from "react-countup";
import Footer from "./Footer";

const About = () => {
    return(
        <>
            <div className="about">
            <img className="student" src= {student} alt="student" />
            <h3 classname="h3">ABOUT US</h3>
            <h2 className="h2">First choice for online education anywhere</h2>
            <p className="p">Tempor erat elitr at rebum at at clita aliquyam consetetur.
                 Diam dolor diam ipsum et, tempor voluptua sit consetetur sit.
                  Aliquyam diam amet diam et eos sadipscing labore. 
                  Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. 
                  Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores 
                  takimata consetetur invidunt magna dolores aliquyam dolores dolore. 
                  Amet erat amet et magna</p>
                
                <div className="row">
                    <div className="cols">
                        <div className="counter-box1">
                            <h4 className="h4"><CountUp start={0} end={210} duration={2} delay={0}/></h4>
                            <br/>
                            <h5 className="h5">Available courses</h5>
                        </div>
                    </div>
                    <div className="cols">
                    <div className="counter-box2">
                            <h4 className="h4"><CountUp start={0} end={110} duration={2} delay={0}/></h4>
                            <br/>
                            <h5 className="h5">Skilled instructor</h5>
                        </div>
                    </div>
                    
                    <div className="cols">
                    <div className="counter-box3">
                            <h4 className="h4"><CountUp start={0} end={101} duration={2} delay={0}/></h4>
                            <br/>
                            <h5 className="h5">Online courses</h5>
                        </div>
                    </div>
                    <div className="cols">
                    <div className="counter-box4">
                            <h4 className="h4"><CountUp start={0} end={930} duration={2} delay={0}/></h4>
                            <br/>
                            <h5 className="h5">Happy Students</h5>
                        </div>
                    </div>
                </div>
                
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        
        <Footer/>
        </>
    )
}


export default About;
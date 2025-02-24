
import React from "react";
import image from "./assets/Home.jpg";

const BgHomeimg = () => {
    return (
        <>
                <div className="Homebg" style={{
            backgroundImage: `url(${image})`,
            width: 1349,
            height: 800,
            backgroundSize: 'contain' ,
            backgroundRepeat: "no-repeat",
            opacity: 0.6,
            position: "relative",
            overlay: 'blue',
        }}>
            <div className="color-overlay">
             
                <h3 className="h3">Learn From Home</h3>
                <h1 className="h1">Education Classes</h1>
                <h4 className="h4">Education is not only about great examination results, but it’s also about preparing 
                    children for life. Our aim is to shape true <br/> citizens of an ever-changing and highly competitive world.Hence, 
                    we live out our mission of doing the very best to <br/> contribute to society by educating a happy and 
                    fulfilled generation.</h4>
                </div>


                
                

        </div>

        </>
    )

}

export default BgHomeimg;
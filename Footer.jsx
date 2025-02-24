import React from "react";

const Footer = () => {
    return(
        <>
                        <div className="footer">
            <div className="box-container">
                <div className="box">
                    <h3>Why choose us?</h3>
                    <p>We have more icons, services, and support in Pro. If you want them, you 
                        subscribe. No shenanigans. We won't sell your data, because we don't want to 
                        live in that world,and we don't want to run that company</p>
                </div>

                <div className="box">
                    <h3>quick links</h3>
                    <a style={{textDecoration: 'none'}} href="/">Home</a>
                    <a style={{textDecoration: 'none'}} href="/about">About us</a>
                    <a style={{textDecoration: 'none'}} href="/course">Courses</a>
                    <a style={{textDecoration: 'none'}} href="/Team">Team</a>
                </div>



            </div>
        

        <h1 className="credit">created by <a href="/#">miss.Shilpa Gawade</a> | All rights reserved.</h1>

    </div>
        </>
    )
}


export default Footer;
import React, { useState } from "react";
import location from "./assets/location.png"
import call from "./assets/call.jpg"
import email from "./assets/email.png"
import Footer from "./Footer";


const Contact = () => {

    const [userRegistration , setUserRegistraton] = useState({
    input: "",
    input2: "",
    input3: "",
    message: ""
    });

    const [records, setRecords] = useState([]);

    const handleInput = (e) => {
       const Name = e.target.className;
       const value = e.target.value;
       console.log(Name,value);

       setUserRegistraton({...userRegistration,[Name]:value});
    }

    const handleSubmit = (e) =>  {
        e.preventDefault();

        const newRecord = {...userRegistration , id: new Date().getTime().toString()}
        setRecords([...records, newRecord]);
        console.log(records);

        setUserRegistraton({input:"", input2:"", input3:"", message:""});
    }

    return(
        <>
        <div className="contact">
            <img className="location" src= {location} alt="" />
            <h1 className="address">Our Location</h1>
            <p className="info">123 Street, New York, USA.</p>
            <br/>
            <img className="call" src= {call} alt="" />
            <h1 className="address2">Call Us</h1>
            <p className="info2">+012 345 6789</p>
            <br/>
            <img className="email" src= {email} alt="" />
            <h1 className="address3">Email Us</h1>
            <p className="info3">mail@domain.com</p>
            <h3 className="h3">NEED HELP?</h3>
            <h2 className="h2">Send Us A Message</h2>

            <div>
            <form id="form" action="/" onSubmit={handleSubmit}>

            <input type="text" placeholder="Name" className="input" required="required" 
            id="Name" autoComplete="off"
            value={userRegistration.input}
            onChange={handleInput}/>

            <input type="text" placeholder="Email" className="input2" 
            id="Email" autoComplete="off"
            value={userRegistration.input2}
            onChange={handleInput}/>

            <input type="text" placeholder="Subject" className="input3" 
            id="Subject" autoComplete="off"
            value={userRegistration.input3}
            onChange={handleInput}/>

            <textarea className="message" cols={5} rows={5} placeholder="Message" 
            id="message" autoComplete="off"
            value={userRegistration.message}
            onChange={handleInput}>
            </textarea>
            
            <button className="submit">Submit</button>
            </form>

            <div>
                {
                records.map((curElem) => {
                    return (
                        <div className="showDataStyle">
                            <p>{curElem.Name}</p>
                            <p>{curElem.Email}</p>
                            <p>{curElem.Subject}</p>
                            <p>{curElem.Message}</p>
                        </div>
                    )
                })
            }
            </div>
            </div>
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Footer/>

        </>
    )
}




export default Contact;
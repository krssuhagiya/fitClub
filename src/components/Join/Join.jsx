import React, { useRef } from 'react'
import "./Join.css"
import emailjs from "@emailjs/browser"
const Join = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_tc4ozbb', 'template_knbaxfl', form.current, {
            publicKey: 'Iwuprh3UvCADnzVGK',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <div className="Join" id="join-us">
        <div className="left-j">
            <hr />
            <div>
                <soan className="stroke-text">READY TO</soan>
                <soan>LEVEL UP</soan>
            </div>
            <div>
                <soan>YOUR BODY</soan>
                <soan className="stroke-text">WITH US?</soan>
            </div>
        </div>
        <div className="right-j">
            <form ref={form} className="email-container" onSubmit={sendEmail}>
                <input type="email" name="user_email" placeholder='Enter Your Email-Address' id="" />
                <button className='btn btn-join'>Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join
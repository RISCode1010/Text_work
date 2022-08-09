import React from 'react'


export default function Contact() {
  return (
        <section className="contact">
            <div className="container">
                <div className="contactInfo">
                    <div className="box1">
                        <div className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i>
                        </div>
                        <div className="text">
                            <h3>Address</h3>
                            <p>4671 Sugar Camp Road,<br/>Owatonna,Minnesota,<br/>55060</p>
                        </div>
                    </div>
                    <div className="box1">
                        <div className="icon"><i className="fa fa-phone" aria-hidden="true"></i>
                        </div>
                        <div className="text">
                            <h3>Phone</h3>
                            <p>507-809-7905</p>
                        </div>
                    </div>
                    <div className="box1">
                        <div className="icon"><i className="fa fa-envelope-o" aria-hidden="true"></i>
                        </div>
                        <div className="text">
                            <h3>Email</h3>
                            <p>rishabhraghav1010@gamil.com</p>
                        </div>
                    </div>
                </div>
                <div className="contactForm">
                    <form>
                        <h2>Send Message</h2>
                        <div className="inputBox">
                            <input type="text" name="" required/>
                            <span>Full Name</span>
                        </div>
                        <div className="inputBox">
                            <input type="text" name="" required/>
                            <span>Email</span>
                        </div>
                        <div className="inputBox">
                            <textarea required></textarea>
                            <span>Type Your Message...</span>
                        </div>
                        <div className="inputBox">
                            <input type="submit" name="" value="Send"/>
                        </div>
                    </form>
                </div>
            </div>
        
        </section>
  )
}

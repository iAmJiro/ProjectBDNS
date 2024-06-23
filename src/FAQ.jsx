import React from 'react';
import { Navbar } from Navbar;

export default function FAQ() {
    return (
        <div>
            <Navbar />
            <h1>How can we help you?</h1>

            <h1>Frequently Asked Questions</h1>
            <div></div>


            <div className="form-input-wrapper">

                <div className="form-input-group">
                    <input type="text" placeholder="Name" name="name" />
                    <span></span>
                </div>
                <div className="form-input-group">
                    <input type="email" name="email" placeholder="Email" className="email" />
                    <span></span>
                </div>
            </div>
            <div className="form-input-group">
                <input type="text" name="subject" placeholder="Subject" className="subject" />
                <span></span>
            </div>

            <div className="form-input-group">
                <textarea type="text" placeholder="Message" className="textarea" name="message"></textarea>
                <span></span>
            </div>
            <div className="message">
            </div>
            <button type="submit" className="contact-button submit-button">
                <div>
                    <span className="bg"></span>
                    <span className="base"></span>
                    <span className="text">Send</span>
                </div>
            </button>
        </div>
    );
}
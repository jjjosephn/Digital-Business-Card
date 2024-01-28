import React from "react"
import GradPhoto from "../images/GradPhoto2.jpg"
import MailIcon from "../images/Mail.png"
import WebsiteIcon from "../images/WebsiteIcon.png"

export default function About () {
    return(
        <div>
            <img className="image" src={GradPhoto}/>
            <h1 className="name">Joseph Nguyen</h1>
            <p className="title">Computer Scientist</p>
            <div className="btn">
                <a href="mailto: jthnguyen02@gmail.com" target="_blank">
                    <button className="email"><img className="mail-icon" src={MailIcon} />Email</button>
                </a>
                <a href="https://tech-portfolio-nine.vercel.app/" target="_blank">
                    <button className="website"><img className="website-icon" src={WebsiteIcon} />Website</button>
                </a>
            </div>
        </div>
    )
}
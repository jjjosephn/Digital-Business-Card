import React from "react"
import GithubIcon from "../images/GitHubIcon.png"
import InstagramIcon from "../images/InstagramIcon.png"
import linkedinIcon from "../images/linkedin.png"

export default function Footer () {
    return (
        <div className="footer-container">
            <a href="https://www.instagram.com/jjjosephn" target="_blank">
                <img className="icon" src={InstagramIcon} />
            </a>
            <a href="https://github.com/jjjosephn" target="_blank">
                <img className="icon" src={GithubIcon} />
            </a>
            <a href="https://www.linkedin.com/in/josephnguyen-cs/" target="_blank">
                <img className="icon" src={linkedinIcon} />
            </a>
        </div>
    )
}
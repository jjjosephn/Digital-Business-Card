import React from "react"
import Logo from "../images/sickiqs.png"
import InstagramIcon from "../images/instagram.png"
import TiktokIcon from "../images/tiktok.png"

export default function About () {
    return(
        <div class="contain">
            <img className="image" src={Logo}/>
            <h1 className="name">Sickiqs</h1>
            <p className="title">Located in San Jose, CA</p>
            <div className="btn">
                <div className="insta">
                    <a href="https://www.instagram.com/sickiqs" target="_blank">
                        <button className="email"><img className="instagram-icon" src={InstagramIcon} />Instagram</button>
                    </a>
                </div>
                <a href="https://www.tiktok.com/@sickiqs?_t=8jjeIEXKbMM&_r=1" target="_blank">
                    <button className="website"><img className="tiktok-icon" src={TiktokIcon} />TikTok</button>
                </a>
            </div>
        </div>
    )
}
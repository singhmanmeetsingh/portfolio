import React from 'react'
import Git from "../../assets/git.svg";
import Link from "../../assets/link.svg";
import "./Footer.css"

function Footer() {
  return (
    <div className="contact-grid">
      <div>Tel : 705-241-1972</div>
      <div>
        <a href="https://github.com/singhmanmeetsingh" target="_blank">
          <img src={Git} alt="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/manmeet-singh-788ab2a4/"
          target="_blank"
        >
          <img src={Link} alt="linkedin" />
        </a>
      </div>
      <div>workmanmeet7@gmail.com</div>
    </div>
  );
}

export default Footer

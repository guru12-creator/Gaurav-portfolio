import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://github.com/guru12-creator/Mypic/blob/main/WhatsApp%20Image%202024-03-06%20at%203.18.07%20PM.jpeg?raw=true"}
          alt="Founder"
        />

        <h2>Gaurav Deshmukh</h2>
        <p>Motivation is temporary, discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/gaurav-deshmukh-049535268" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://www.instagram.com/f_gaurav_1?igsh=NGVhN2U2NjQ0Yg==" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/guru12-creator" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
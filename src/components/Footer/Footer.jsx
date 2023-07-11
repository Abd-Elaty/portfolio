import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { VscGithubInverted,VscTwitter } from "react-icons/vsc";
import { SiLinkedin } from "react-icons/si";


const Footer = () => {
  return (
    <section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    className={`paddings ${css.wrapper}`}>
      
      
      <div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Contacts</span>
            <div className="contacts">
            <a href="" style={{marginLeft:'10px',display:'inline-block', color:'#fff'}}>
                <VscGithubInverted size={"30px"} />
              </a>
              <a href="" style={{marginLeft:'10px',display:'inline-block', color:'#fff'}}>
                <SiLinkedin size={"30px"} />
              </a>
              <a href="" style={{marginLeft:'10px',display:'inline-block', color:'#fff'}}>
                <VscTwitter size={"30px"} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

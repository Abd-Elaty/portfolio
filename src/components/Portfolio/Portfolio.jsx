import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant} from "../../utils/motion";
import { VscChevronRight } from "react-icons/vsc";
const Portfolio = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>

        <motion.div variants={textVariant(.2)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Latest Works</span>
          </div>
          <a className="secondaryText" href="" style={{color:'rgb(40 201 219)', textDecoration:'none'}}>
            See my github account 
            <VscChevronRight size={"30px"} style={{marginBottom:'-5px'}}/>
          </a>
        </motion.div>

        <div className={`flexCenter ${css.showCase}`}>
            <a href="">
              <motion.img variants={fadeIn("up", "tween", .4, .3)} src="./showCase1.png" alt="project" />
            </a>
            <a href="">
              <motion.img variants={fadeIn("up", "tween", .4, .3)} src="./showCase2.png" alt="project" />
            </a>
            <a href="">
              <motion.img variants={fadeIn("up", "tween", .4, .3)} src="./showCase1.png" alt="project" />
            </a>
            <a href="">
              <motion.img variants={fadeIn("up", "tween", .6, .4)} src="./showCase2.png" alt="project" />
            </a>
            <a href="">
              <motion.img variants={fadeIn("up", "tween", .6, .4)} src="./showCase1.png" alt="project" />
            </a>
            <a href="">
              <motion.img variants={fadeIn("up", "tween", .6, .4)} src="./showCase2.png" alt="project" />
            </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;

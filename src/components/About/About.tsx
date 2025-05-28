import { Container } from "./styles";
import Radheshyam from "../../assets/PORT-DP.jpg";
import java from "../../assets/java.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import expressIcon from "../../assets/express.svg";
import nextjsIcon from "../../assets/nextjs.svg";
import mongodbIcon from "../../assets/mongodb.svg";
import postgresqlIcon from "../../assets/postgresql.svg";
// import supabaseIcon from "../../assets/supabase.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi there! I'm Radheshyam, a Full Stack Developer skilled in web development, 
            Java, JavaScript technologies, and building scalable software solutions.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            I specialize in building responsive web applications with modern frameworks, 
            designing efficient backend services, and working with various databases.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            My expertise spans across the JavaScript ecosystem including React, Node.js, 
            Express, and Next.js, along with database technologies like MongoDB, PostgreSQL, 
            and Supabase.
          </p>
        </ScrollAnimation>
        
        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <div className="education">
            <h3>Education:</h3>
            <h4>COMPUTER SCIENCE AND ENGINEERING (B.TECH)</h4>
            <p>GALGOTIAS UNIVERSITY, GREATER NOIDA, UP | NOV 2021 - Present</p>
            <p>7.92 CGPA</p>
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation animateIn="fadeInLeft" delay={550}>
          <div className="experience">
            <h3>Experience:</h3>
            <h4>FULL STACK DEVELOPMENT</h4>
            <p>30DAY'S CODING PLATFORM | MARCH 2024 - AUGUST 2024</p>
            <p>REMOTE</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        
        <div className="hard-skills">
          {/* Programming Languages */}
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={java} alt="Java" title="Java" />
            </ScrollAnimation>
          </div>
          
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={jsIcon} alt="JavaScript" title="JavaScript" />
            </ScrollAnimation>
          </div>
          
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="TypeScript" title="TypeScript" />
            </ScrollAnimation>
          </div>
          
          {/* Frontend */}
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" title="React" />
            </ScrollAnimation>
          </div>
          
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={vueIcon} alt="Vue" title="Vue.js" />
            </ScrollAnimation>
          </div>
          
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={htmlIcon} alt="HTML" title="HTML5" />
            </ScrollAnimation>
          </div>
          
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={cssIcon} alt="CSS" title="CSS3" />
            </ScrollAnimation>
          </div>
          
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
              <img src={boostrapIcon} alt="Bootstrap" title="Bootstrap" />
            </ScrollAnimation>
          </div>
          
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.21 * 1000}>
              <img src={nextjsIcon} alt="Next.js" title="Next.js" />
            </ScrollAnimation>
          </div>
          
          {/* Backend */}
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.11 * 1000}>
              <img src={nodeIcon} alt="Node.js" title="Node.js" />
            </ScrollAnimation>
          </div>
          
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.22 * 1000}>
              <img src={expressIcon} alt="Express.js" title="Express.js" />
            </ScrollAnimation>
          </div>
          
          {/* Databases */}
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.23 * 1000}>
              <img src={mongodbIcon} alt="MongoDB" title="MongoDB" />
            </ScrollAnimation>
          </div>
          
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.24 * 1000}>
              <img src={postgresqlIcon} alt="PostgreSQL" title="PostgreSQL" />
            </ScrollAnimation>
          </div>
          
          {/* <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.25 * 1000}>
              <img src={supabaseIcon} alt="Supabase" title="Supabase" />
            </ScrollAnimation>
          </div> */}
        </div>
      </div>
      
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.26 * 1000}>
          <img src={Radheshyam} alt="Radheshyam Kumar" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
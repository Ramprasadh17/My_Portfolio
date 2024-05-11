import React, { useState } from "react";
import "../Styles/Styles.css";
import Photo_1 from "../Images/Ram_1.jpg";
import Photo_2 from "../Images/Ram_2.jpg";

function Resume() {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <>
      <div className="content">
        <div className="left_tab">
          <div>
            <img src={Photo_2} alt="" className="profile_pic" id="#home" />
            <p className="name">Ramprasadh</p>
            <h2 className="course">Full Stack Web Developer</h2>
          </div>
          <div className="left_content_container">
            <div
              className={`left_content ${activeTab === "home" ? "active" : ""}`}
              onClick={() => handleTabClick("home")}
            >
              <a href="#home">Home</a>
            </div>
            <div
              className={`left_content ${
                activeTab === "about" ? "active" : ""
              }`}
              onClick={() => handleTabClick("about")}
            >
              <a href="#about">About</a>
            </div>
            <div
              className={`left_content ${
                activeTab === "skills" ? "active" : ""
              }`}
              onClick={() => handleTabClick("skills")}
            >
              <a href="#skills">Skills</a>
            </div>
            <div
              className={`left_content ${
                activeTab === "education" ? "active" : ""
              }`}
              onClick={() => handleTabClick("education")}
            >
              <a href="#education">Education</a>
            </div>
            <div
              className={`left_content ${activeTab === "work" ? "active" : ""}`}
              onClick={() => handleTabClick("work")}
            >
              <a href="#work">Work</a>
            </div>
            <div
              className={`left_content ${
                activeTab === "contact" ? "active" : ""
              }`}
              onClick={() => handleTabClick("contact")}
            >
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
        <span></span>
        <div className="right_tab">
          <div id="home">
            <p className="content_heading home">
              Welcome to my portfolio website!{" "}
            </p>
            <p className="home_content">
              I'm <b>Ramprasadh</b>, a passionate Full Stack Developer based in
              Bangalore. Here, you'll find a showcase of my skills, projects,
              and experiences in the world of web development. From building
              dynamic web applications to crafting elegant user interfaces, I'm
              dedicated to creating impactful digital solutions. Explore my
              portfolio to learn more about my journey and the projects I've
              worked on. Let's collaborate and turn your ideas into reality!
            </p>
          </div>
          <div id="about">
            <p className="content_heading about">About</p>
            <p className="home_content">
              Hello! I'm Ramprasadh, a Full Stack Developer with a strong
              passion for creating innovative web solutions. With a background
              in Mechanical Engineering, I transitioned into the world of
              programming to pursue my love for technology and coding. My
              expertise lies in frontend and backend development, specializing
              in technologies such as HTML5, CSS3, JavaScript, React.js,
              Node.js, Express.js, and MongoDB. I thrive on challenges and am
              committed to delivering high-quality code that exceeds
              expectations. Outside of coding, I enjoy reading, gaming, and
              staying updated on the latest trends in the tech industry. Let's
              connect and explore how we can work together to bring your
              projects to life!
            </p>
          </div>
          <div id="skills">
            <p className="content_heading skills">Skills</p>
            <p className="home_content">
              <p>Here's a breakdown of my technical skills:</p>
              <ul>
                <li>Front-End: HTML5, CSS3, JavaScript, React.js</li>
                <li>Back-End: Node.js, Express.js</li>
                <li>Databases: MongoDB</li>
                <li>Version Control: Git</li>
                <li>Tools: Visual Studio Code, Postman</li>
              </ul>
              <p>
                I'm proficient in both frontend and backend development, with a
                focus on creating seamless user experiences and robust web
                applications. Let's leverage these skills to build something
                amazing together!
              </p>
            </p>
          </div>
          <div id="education">
            <p className="content_heading education">Education</p>
            <div className="home_content">
              <table
                style={{
                  width: "100%",
                  textAlign: "center",
                  borderCollapse: "collapse",
                }}
              >
                <thead>
                  <tr>
                    <th style={{ width: "25%" }}>Degree/School</th>
                    <th style={{ width: "25%" }}>Institution Name</th>
                    <th style={{ width: "25%" }}>Year</th>
                    <th style={{ width: "25%" }}>CGPA/Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ padding: "20px 0" }}>
                    <td>B.E. (Mechanical Engineering)</td>
                    <td>Renganayagi Varatharaj College of Engineering</td>
                    <td>2020</td>
                    <td>6.73 CGPA</td>
                  </tr>
                  <tr style={{ padding: "20px 0" }}>
                    <td>XII</td>
                    <td>P.A.C.M Higher Secondary School, Rajapalayam</td>
                    <td>2016</td>
                    <td>70%</td>
                  </tr>
                  <tr style={{ padding: "20px 0" }}>
                    <td>X</td>
                    <td>P.A.C.M Higher Secondary School, Rajapalayam</td>
                    <td>2014</td>
                    <td>87.4%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div id="work">
            <p className="content_heading work">Projects</p>
            <p className="project_content">
              <p>
                <b style={{ fontSize: "50px" }}>Chat Application</b>
                <a
                  href="https://github.com/Ramprasadh17/Chat_Application.git"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  {" "}
                  Get Code
                </a>{" "}
              </p>{" "}
              <p>
                <b>Summary:</b> I developed a comprehensive full-stack chat
                application using the MERN (MongoDB, Express.js, React.js,
                Node.js) stack. This project encompasses both frontend and
                backend components, providing a seamless user experience.
              </p>
              <b>Highlighted Skills:</b>{" "}
              <ol>
                <li>
                  <b>Frontend Development with React.js:</b> Designed and
                  implemented the frontend interface using React.js, a popular
                  JavaScript library for building user interfaces. Created
                  interactive components, managed state, and handled user
                  interactions to deliver a dynamic user experience.
                </li>
                <li>
                  <b>Backend Development with Node.js and Express.js:</b> Built
                  a robust backend server using Node.js and Express.js, enabling
                  the application to handle HTTP requests, route traffic, and
                  manage middleware. Utilized Express.js to define RESTful API
                  endpoints for client-server communication.
                </li>
                <li>
                  <b>Database Management with MongoDB and Mongoose:</b> Utilized
                  MongoDB, a NoSQL database, to store user data, chat messages,
                  and file uploads. Employed Mongoose, an Object Data Modeling
                  (ODM) library, for seamless interaction with the MongoDB
                  database, including schema definition and data manipulation.
                </li>
                <li>
                  <b>User Authentication and Authorization:</b> Implemented user
                  authentication functionalities, including registration, login,
                  and session management, to ensure secure access to the
                  application. Utilized JSON Web Tokens (JWT) for authentication
                  and authorization mechanisms.
                </li>
                <li>
                  <b>File Upload and Storage:</b> Developed features for file
                  uploading and storage, allowing users to upload profile
                  pictures and share files within the chat application. Managed
                  file storage on the server and maintained metadata in the
                  MongoDB database.
                </li>
                <li>
                  <b>Responsive Design and User Experience:</b> Designed the
                  frontend interface with a focus on responsive design
                  principles, ensuring compatibility across various devices and
                  screen sizes. Prioritized user experience by implementing
                  intuitive navigation, clear feedback, and visually appealing
                  UI elements.
                </li>
              </ol>
            </p>
          </div>

          <div id="contact">
            <p className="content_heading contact">Contact</p>
            <p className="home_content contact">
              <h2>Let's get in touch! </h2>
              <p>
                <b>Phone:</b> +91 9698044857
              </p>{" "}
              <p>
                <b>E-mail:</b> ramprasadh019@gmail.com
              </p>{" "}
              <p>
                Reach out to discuss collaboration opportunities, project ideas,
                or just to say hello.
              </p>{" "}
              <p>
                <em>I'm excited to connect with you!</em>
              </p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;

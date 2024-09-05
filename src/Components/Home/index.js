import React, { useState } from 'react';
import { FaQuestionCircle, FaArrowLeft, FaArrowRight, FaPlus } from 'react-icons/fa';
import './index.css'
import { FaRegCircleQuestion } from "react-icons/fa6";


const Home = () => {
    const [selectedSection, setSelectedSection] = useState('about');
    const [images, setImages] = useState([
      'images/image.png',
      'images/image.png',
    ]);
    const handleSectionClick = (section) => {
      setSelectedSection(section);
    };
  
    const handleAddImage = (e) => {
      const newImage = URL.createObjectURL(e.target.files[0]);
      setImages([...images, newImage]);
    };

  return (
    <div className='main-container'>
    <div className='sub-container-one'></div>
    <div className="sub-container-two">
 
    <div className='about-container'>
    {/* <FaRegCircleQuestion color='white' size={80} /> */}
    {/* <div> */}
      <div className="section-tabs">
        <div className={`tab ${selectedSection === 'about' ? 'active' : ''}`} onClick={() => handleSectionClick('about')}>
          About Me
        </div>
        <div className={`tab ${selectedSection === 'experience' ? 'active' : ''}`} onClick={() => handleSectionClick('experience')}>
          Experiences
        </div>
        <div className={`tab ${selectedSection === 'recommended' ? 'active' : ''}`} onClick={() => handleSectionClick('recommended')}>
          Recommended
        </div>
      {/* </div> */}
      </div>
{/* <div className="section-content" style={{display:'flex'}}> */}
      {/* <div>hi</div> */}

      <div className="section-content">
        {selectedSection === 'about' && (
          <div>
          <p>
          Hello everyone,
          </p>
<p>
I am Kiruthika, and I am excited to introduce myself to the team at Lunacal.
</p>
<p>
I have recently completed my Bachelor's degree in Computer Science from Annai Women's College, where my academic journey was filled with both challenges and rewarding experiences in the field of technology.
</p>
<p>
I have developed proficiency in various programming languages and technologies, including HTML, CSS, Bootstrap, JavaScript, Python, React.js, Node.js, and SQL. These skills have given me the confidence to build and contribute to innovative projects. 
</p>
<p>
One of my proudest achievements is winning first place in a prompt engineering competition conducted by the government, where my work was recognized by the district collector. This accomplishment highlighted the importance of creativity, collaboration, and perseverance, all of which I strive to bring to any role I take on.
</p>
<p>
I am enthusiastic about the opportunity to contribute to Lunacal’s success and to embark on a journey of growth and innovation together.
</p>

          </div>
        )}
        {selectedSection === 'experience' && (
          <div>
            <p>
            I am well-equipped for this role due to my completion of a full stack development course with expertise in the MERN stack. With hands-on experience in MongoDB, Express.js, React.js, and Node.js, I can deliver end-to-end solutions for web applications.            </p>
            <p>
            My problem-solving skills, collaborative approach, and commitment to staying updated on industry trends make me an ideal candidate. I am eager to contribute my skills and passion for creating exceptional user experiences to your team.
            </p>
          </div>
        )}
        {selectedSection === 'recommended' && (
          <div>
            <p>
              
Real-time chat application (https://github.com/kiruthikadev-r/chat-mern-project.git)
</p>
<p>
I developed a real-time chat application for my college community, enabling seamless communication among
students, faculty, and staff. It includes instant messaging, group chat, file sharing, and user-friendly interfaces. I
also integrated robust security measures to ensure privacy and confidentiality. The platform has been widely
adopted, enhancing collaboration and fostering a sense of community.
Technologies used: JavaScript, Bootstrap, React.js, Node.js, Mongodb, Express.js
            </p>

            <p>I
also integrated robust security measures to ensure privacy and confidentiality. The platform has been widely
adopted, enhancing collaboration and fostering a sense of community.
Technologies used: JavaScript, Bootstrap, React.js, Node.js, Mongodb, Express.js
            </p>
          </div>
        )}
      </div>
      </div>
      {/* </div> */}

      <hr className='line'/>

      <div className="gallery-section">
        <div className="gallery-header">
        <div style={{alignSelf:'start'}} className="tooltip-container">
              <FaRegCircleQuestion color='white' size={20} />
              <div className="tooltip-text">I am an image container where you can upload more images</div>
            </div>
          <div className='gallery-title'>
           <button className='gallery-button'>Gallery</button>
           </div>
           <div className='add-image-container'>
           <div>
                <label className="add-image-button" htmlFor="file-input">
                  <FaPlus /> ADD IMAGE
                </label>
                <input
                  id="file-input"
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={handleAddImage}
                />
              </div>
          <div>
          <FaArrowLeft className="carousel-control" />
          </div>
          <div>
          <FaArrowRight className="carousel-control" />
          </div>
          </div>
        </div>
        <div className="image-carousel">
          <div className="image-list">
          {images.map((image, index) => (
                <img key={index} src={image} alt={`Gallery ${index}`} className="gallery-image" />
              ))}
          </div>
        </div>
      </div>
    <hr className='line'/>
    </div>

      
    </div>
  )
}

export default Home

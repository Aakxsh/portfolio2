<<<<<<< HEAD
import React, { useState, useRef } from 'react' 
=======
import React, { useState, useRef } from 'react';
>>>>>>> b1e18e0 (Added/Updated README.md)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';

function Projects() {
<<<<<<< HEAD
const [listProjects] = useState([
  {
    name: 'My Portfolio Website',
    des: 'Eu voluptate sit do labore consectetur in ad esse qui laborum ad eiusmod. Esse ea velit culpa exercitation anim enim reprehenderit. Fugiat nostrud non dolore aliquip quis in ea amet duis.',
    mission: 'Back-end Developer, system analysis, design and DataBase',
    language: 'HTML5, CSS3, React JS',
    images: '/project3.PNG'
  },
  {
    name: 'ELearning Website',
    des: 'Eu voluptate sit do labore consectetur in ad esse qui laborum ad eiusmod. Esse ea velit culpa exercitation anim enim reprehenderit. Fugiat nostrud non dolore aliquip quis in ea amet duis.',
    mission: 'Back-end Developer, DataBase(MongoDB)',
    language: 'HTML5, CSS3, React JS,Redux',
    images: '/project1.PNG'
  },
  {
    name: 'Build with OpenAI',
    des: 'Eu voluptate sit do labore consectetur in ad esse qui laborum ad eiusmod. Esse ea velit culpa exercitation anim enim reprehenderit. Fugiat nostrud non dolore aliquip quis in ea amet duis.',
    mission: 'Back-end Developer, system analysis and design',
    language: 'HTML5, CSS3, React JS',
    images: '/project2.PNG'
  },
  
]);
const divs = useRef([]);
const scrollTab = useRef();
CustomHook(scrollTab, divs);
  return (
    <section className='projects' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Projects
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis quae veniam amet nesciunt voluptatibus quis consectetur consequatur quisquam harum.
       </div>
       <div className="list">
        {
          listProjects.map((value, key) => (
            <div className='item' key={key} ref={(el) => el && divs.current.push(el)}>
              <div className="images">
                <img src={value.images} alt="" />
              </div>
              <div className="content">
                <h3>{value.name}</h3>
                <div className="des">{value.des}</div>
                <div className="mission">
                    <div><FontAwesomeIcon icon={faPersonCircleQuestion} /></div>
                    <div>
                        <h4>Mission</h4>
                        <div className="des">{value.mission}</div>
                    </div>
                </div>
                <div className="mission">
                    <div><FontAwesomeIcon icon={faEarthAmericas} /></div>
                    <div>
                        <h4>Languages</h4>
                        <div className="des">{value.language}</div>
                    </div>
                </div>
              </div>
            </div>
          ))
        }
       </div>
    </section>
  )
}
export default Projects
=======
  const [listProjects] = useState([
    {
      name: 'Uber Clone',
      des: 'Developed a full-stack Uber-like ride booking web application that enables users to book rides, track drivers in real-time, and manage their rides from request to completion. The platform includes separate interfaces for riders and drivers, featuring interactive maps, vehicle selection, booking confirmation, and driver tracking.',
      mission: 'Back-end Developer, system analysis, design and database management',
      language: 'HTML5, CSS3, React JS, Node.js, Express.js, MongoDB',
      images: '/uber.png',
      link: 'https://cgsvljh0-5173.inc1.devtunnels.ms/home',
    },
    {
      name: 'Movie Information App',
      des: 'Created a responsive web app that displays detailed information about movies, including title, poster, rating, genre, cast, and synopsis. Integrated with a third-party movie API (like TMDb or OMDb) for dynamic content fetching and search functionality.',
      mission: 'Full Stack Developer, API integration, UI development and data rendering',
      language: 'HTML5, CSS3, JavaScript, React JS',
      images: '/movie.png',
      link: 'https://movie-teal-chi.vercel.app/',
    },
    {
      name: 'AutoPred - Vehicle Price Prediction',
      des: 'Built a machine learning-based web application that predicts the resale price of used vehicles using user input features like brand, fuel type, kilometers driven, and transmission. Integrated with a trained regression model and deployed with a user-friendly UI.',
      mission: 'ML Engineer, Model Training, Frontend-Backend Integration',
      language: 'Python, Scikit-learn, Pandas, HTML, CSS, Flask',
      images: '/autopred.png',
      link: 'https://cgsvljh0-3003.inc1.devtunnels.ms/',
    },
  ]);

  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  return (
    <section className='projects' ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        Development Highlights
      </div>

      <div className="des" ref={(el) => el && divs.current.push(el)}>
        These projects highlight my hands-on experience building real-world web applications using modern technologies. From scalable full-stack platforms to intelligent machine learning tools, each project reflects my ability to deliver clean, efficient, and user-focused solutions from end to end.
      </div>

      <div className="list">
        {listProjects.map((value, key) => (
          <div className="item" key={key} ref={(el) => el && divs.current.push(el)}>
            <div className="images">
              <a
                href={value.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={value.images} alt={value.name} />
              </a>
            </div>
            <div className="content">
              <h3>{value.name}</h3>
              <div className="des">{value.des}</div>
              <div className="mission">
                <div><FontAwesomeIcon icon={faPersonCircleQuestion} /></div>
                <div>
                  <h4>Mission</h4>
                  <div className="des">{value.mission}</div>
                </div>
              </div>
              <div className="mission">
                <div><FontAwesomeIcon icon={faEarthAmericas} /></div>
                <div>
                  <h4>Languages</h4>
                  <div className="des">{value.language}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
>>>>>>> b1e18e0 (Added/Updated README.md)

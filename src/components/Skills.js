import React, { useRef, useState } from 'react';
import CustomHook from './CustomHook';

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  const [listSkills] = useState([
    {
      name: 'HTML',
      des: 'Eu voluptate sit do labore consectetur in ad esse qui laborum ad eiusmod...',
      image: '/html.png',
    },
    {
      name: 'CSS',
      des: 'Ad ad in cillum ut labore irure aliqua. Ex sit dolore ipsum id duis...',
      image: '/css.png',
    },
    {
      name: 'JavaScript',
      des: 'Sunt nostrud nulla qui cillum mollit aute anim aliqua aute magna tempor...',
      image: '/javascript.png',
    },
    {
      name: 'ReactJS',
      des: 'Voluptate qui adipisicing dolore pariatur laboris deserunt consectetur...',
      image: '/react.png',
    },
    {
      name: 'C++',
      des: 'Laborum commodo reprehenderit anim sunt est. Aliquip ipsum nisi incididunt...',
      image: '/cpp.png',
    },
    {
      name: 'MongoDB',
      des: 'NoSQL database for scalable apps.',
      image: '/mongodb.png',
    },
    {
      name: 'Tailwind CSS',
      des: 'Utility-first CSS framework.',
      image: '/tailwind.png',
    },
    {
      name: 'Postman',
      des: 'API testing tool for developers.',
      image: '/postman.png',
    },
    {
      name: 'Git',
      des: 'Version control system for tracking changes.',
      image: '/git.png',
    },
  ]);

  return (
    <section className="skills" ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
       Technical Proficiencies
      </div>

      <div className="des" ref={(el) => el && divs.current.push(el)}>
        I have experience working across a wide range of frontend, backend, and DevOps tools. These skills help me build complete, scalable, and responsive web applications.
      </div>

      <div className="list">
        {listSkills.map((value, key) => (
          <div
            className="item"
            key={key}
            ref={(el) => el && divs.current.push(el)}
          >
            <img
              src={value.image}
              alt={value.name}
              style={{ width: '64px', height: '64px', objectFit: 'contain', marginBottom: '10px' }}
            />
            <h3>{value.name}</h3>
            <div className="des">{value.des}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

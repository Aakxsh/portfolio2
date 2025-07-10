<<<<<<< HEAD
import React, { useRef, useState } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJs, faJava,  faPython } from '@fortawesome/free-brands-svg-icons';
=======
import React, { useRef, useState } from 'react';
>>>>>>> b1e18e0 (Added/Updated README.md)
import CustomHook from './CustomHook';

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
<<<<<<< HEAD
const [listSkills] = useState([
  {
    name: 'HTML',
    des: 'Eu voluptate sit do labore consectetur in ad esse qui laborum ad eiusmod. Esse ea velit culpa exercitation anim enim reprehenderit. Fugiat nostrud non dolore aliquip quis in ea amet duis.',
    icon: faHtml5
  },
  {
    name: 'CSS',
    des: 'Ad ad in cillum ut labore irure aliqua. Ex sit dolore ipsum id duis nostrud veniam. Nisi duis ut veniam ut eiusmod occaecat ullamco ullamco. Consequat eu sunt ut elit dolor sint magna magna velit ex. Excepteur occaecat reprehenderit tempor veniam.',
    icon: faCss3
  },
  {
    name: 'Javascript',
    des: 'Sunt nostrud nulla qui cillum mollit aute anim anim aliqua aute magna tempor. Do culpa culpa excepteur officia ut eu deserunt proident sint non ut do magna minim. Sunt et excepteur tempor culpa irure non exercitation. Amet nostrud ex aute incididunt incididunt ipsum.',
    icon: faJs},
  {
    name: 'ReactJs',
    des: 'Voluptate qui adipisicing dolore pariatur laboris deserunt consectetur reprehenderit. Esse dolor elit ullamco duis quis aliquip fugiat ipsum nisi est et. Nisi ut deserunt excepteur irure aliquip proident ',
    icon: faReact
  },
  {
    name: 'C++',
    des: 'Laborum commodo reprehenderit anim sunt est. Aliquip ipsum nisi incididunt enim ex id et sit sint magna. Deserunt minim ullamco aute veniam. Do irure nulla ut quis.',
    icon: faJava
  },
  {
    name: 'Pyhton',
    des: 'Ullamco incididunt adipisicing laboris ullamco ipsum quis nulla non. Non et irure amet in sint duis Lorem est eiusmod nisi. Aute dolor eiusmod esse et cupidatat ex minim do reprehenderit ut aute. In commodo do consectetur qui occaecat cupidatat sint ullamco dolor tempor ullamco elit.',
    icon: faPython
  }

]);
  return (
    <section className='skills' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Skills
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis quae veniam amet nesciunt voluptatibus quis consectetur consequatur quisquam harum.
       </div>
       <div className="list">
        {
          listSkills.map((value, key) => (
            <div className={'item '} key={key} ref={(el) => el && divs.current.push(el)}>
              <FontAwesomeIcon icon={value.icon} />
              <h3>{ value.name }</h3>
              <div className="des">{value.des}</div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills

=======

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
>>>>>>> b1e18e0 (Added/Updated README.md)

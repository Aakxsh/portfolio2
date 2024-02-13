import React, { useState, useRef } from 'react' 
import CustomHook from './CustomHook';

function Contacts() {
const [listContacts] = useState([
  {
    title: 'Phone Number',
    value: '+91 9717707384'
  },{
    title: 'Email',
    value: 'Aakxsh17@gmail.com'
  },{
    title: 'Instagram',
    value: 'Vishwakarmx'
  }
])
const divs = useRef([]);
const scrollTab = useRef();
CustomHook(scrollTab, divs);

  return (
    <section className='contacts' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        Contact Me
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis quae veniam amet nesciunt voluptatibus quis consectetur consequatur quisquam harum.
       </div>
       <div className="list"  ref={(el) => el && divs.current.push(el)}>
        {
          listContacts.map((value, key) => (
            <div className='item' key={key}>
              <h3>{value.title}</h3>
              <div>{value.value}</div>
            </div>
          ))
        }
       </div>
    </section>
  )
}
export default Contacts

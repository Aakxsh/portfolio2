import React, { useRef } from 'react' 
import CustomHook from './CustomHook';
function Home() {
const scrollTab = useRef();
CustomHook(scrollTab);

return (
    <section ref={scrollTab} className='home'>
        <div className="content">
            <div className="name">
                Hey I'm <span>Akash Vishwakarma</span>
            </div>
            <div className="des">
                {/* 30 */}
               I'm a Btech student passing out from Ajay Kumar Garg Engineering College in Computer Science and engineering with specialization of Date Science
            </div>
            
            <a href="MyResume.pdf"  target="MyResume.pdf" rel="noopener noreferrer" className='animation active '>
                Download My Resume
            </a>
        </div>
        <div className="avatar">
            <div className="card">
                <img src="/avatar.png" alt="" />
                <div className="info">
                    <div>Developer</div>
                    <div>Aakash</div>
                    <div>17/09</div>
                    <div>Male</div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Home

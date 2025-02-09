import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import Chatbot from './components/Chatbot'
import ChatHistory from './components/ChatHistory'



function App() {

  return (
    <main>
      <NavBar />
      <Home />
      <Skills />
      <Projects />
      <Contacts />
      <Chatbot />
    </main>
  );
}

export default App;

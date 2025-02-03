import React, {useState} from 'react'
import Navbar from './Components/Navbar/Navbar'
import Intro from './Components/Intro/Intro';
import Skills from './Components/Skills/Skills';
import Works from './Components/Works/Works';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';


const MyContext = React.createContext();

const App = () => {
  const [darkTheme, setDarkTheme]= useState(true);

  const toggleTheme = () => {
    setDarkTheme(prevTheme => !prevTheme);
    document.body.classList.toggle('light-theme');
  };
  return (
    <div>
      <MyContext.Provider value={{darkTheme, toggleTheme}}>
        <Navbar/>
        <Intro/>
        <Skills/>
        <Works/>
        <Contact/>
        <Footer/>
      </MyContext.Provider>
    </div>
  )
}

export const useDark =()=>React.useContext(MyContext);
export default App

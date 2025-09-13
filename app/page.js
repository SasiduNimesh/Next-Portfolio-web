'use client'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect ,useState} from "react";

export default function Home() {
  const [isDarkMode , setIsDarkMode] = useState(true);
  
  useEffect(()=>{
    if(localStorage.theme === 'darkTheme' || (!('theme' in localStorage) && window.
    matchMedia('(prefers-color-scheme: darkTheme)').matches)){
      setIsDarkMode(true)
    }else{
      setIsDarkMode(false)
    }
      
  },[])

  useEffect(()=>{
    if(isDarkMode){
      document.documentElement.classList.add('darkTheme');
      localStorage.theme = 'darkTheme' ;
    }else{
      document.documentElement.classList.remove('darkTheme');
      localStorage.theme = '' ;
    }
  },[isDarkMode])
  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Hero isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <About isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Skills isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Project isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Contact isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </>
  );
}

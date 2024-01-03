import react from 'react'
import './App.css'

import HeaddingText from '../Components/HeaddingText/HeaddingText';
import NavigationButton from '../Components/NavigationButton/NavigationButton';


function App() {
  return (
    <div className='home'>
      <div className='home-headding-container'>
        <HeaddingText href='#home' headding='Anirudh MK' color='#fff'/>
        <NavigationButton href='#home' title='Home' width={115} top={33} left={588} background='rgba(255, 255, 255, 0.50)'/>
        <NavigationButton href='#about' title='About' width={115} top={33} left={730}/>
        <NavigationButton href='#project' title='Project' width={115} top={33} left={872}/>
        <NavigationButton href='#contact' title='Contact Me' width={149} top={33} left={1014}/>
      </div>
    </div>
  )
}

export default App

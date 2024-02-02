import react from "react";
import "./App.css";

import HeaddingText from "../Components/HeaddingText/HeaddingText";
import DetailsText from "../Components/DetailsText/DetailsText";

import IconButton from "../Components/IconButton/IconButton";
import TextButton from "../Components/TextButton/TextButton";
import NavigationButton from "../Components/NavigationButton/NavigationButton";

import ProfileImage from "../Components/ProfileImage/ProfileImage";

import TopDecorator from "../Components/TopDecorator/TopDecorator";
import BottomDecorator from "../Components/BottomDecorator/BottomDecorator";

import AnirudhImage from "../assets/images/anirudh.png";
import AnirudhAboutImage from "../assets/images/anirudh_about.png";

import ProjectScreen from "../Screen/ProjectScreen/ProjectScreen";

import {
  faGithubAlt,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      <div className="home">
        <div className="flex w-screen lg:w-[1192px] mt-0 md:mt-[46px] pl-[28px] home-headding-container">
          <HeaddingText href="#home" headding="Anirudh MK" color="#fff" />
          {/* <div className="flex pt-[20px] pl-[300px]">
            <NavigationButton
              href="#home"
              title="Home"
              width={115}
              top={33}
              left={588}
              background="rgba(255, 255, 255, 0.50)"
            />
            <NavigationButton
              href="#about"
              title="About"
              width={115}
              top={33}
              left={730}
            />
            <NavigationButton
              href="#project"
              title="Project"
              width={115}
              top={33}
              left={872}
            />
            <NavigationButton
              href="#contact"
              title="Contact Me"
              width={149}
              top={33}
              left={1014}
            />
          </div> */}
        </div>
      </div>
      <div className="flex  w-screen lg:w-[1192px] grid grid-cols-1 lg:grid-cols-[649px_344px] home-details-container pt-[80px] pb-[80px] gap-[40px]">
        <div className="flex flex-col items-center">
          <DetailsText />
          <div className="flex justify-left grid grid-cols-1 md:grid-cols-[165px_220px] pt-[20px] pb-[20px] gap-[20px] ">
            <div className="flex justify-center">
              <TextButton
                button_text="Download CV"
                link="https://drive.google.com/uc?export=download&id=1-4GLCPY6f3s-t-zt0tmb95Kg-2hHJ0B3"
                text_button_color="#6E6F64"
              />
            </div>
            <div className="flex justify-center grid-cols-subgrid gap-[20px]">
              <IconButton
                icon={faGithubAlt}
                link="https://github.com/anirudh-mk"
                icon_button_color="#6E6F64"
              />
              <IconButton
                icon={faEnvelope}
                link="https://mail.google.com/mail/u/0/?fs=0&to=anirudhmk123@gmail.com&tf=cm"
                icon_button_color="#6E6F64"
              />
              <IconButton
                icon={faLinkedinIn}
                link="https://www.linkedin.com/in/anirudh-mk"
                icon_button_color="#6E6F64"
              />
              <IconButton icon={faTwitter} icon_button_color="#6E6F64" />
            </div>
          </div>
        </div>
        <div className="flex">
          <img src="" alt="" className="w-[344px] h-[403px]" />
        </div>
        {/* <ProfileImage
          image={AnirudhImage}
          width={344}
          height={403}
          border_radius={172}
          left={765}
          image_background_top={142}
          image_container_top={83}
        /> */}
      </div>
      <div id="about" className="flex flex-col w-screen lg:w-[1192px] about">
        <HeaddingText className="" href="#about" headding="About" />
        <div className="flex justify-center grid grid-cols-1 md:grid-cols-[118px_500px] lg:grid-cols-[118px_690px] pt-[80px] gap-[40px]">
          <div className="flex justify-center">
            <img className="w-[117px] h-[117px]"></img>
          </div>
          <div className="flex pl-[40px] pr-[40px] pb-[100px]">
            <p className="flex flex-col text-center md:text-left ">
              Hey, I'm Anirudh MK, a backend web developer at G-tech Mulearn,
              immersed in Django and Python. Pursuing a degree in Electronics
              and Communication Engineering, I'm passionate about app and web
              development, as well as robotics. Let's connect
              <br />
              <br />
              <i>-I'm eager to collaborate and discuss tech innovations.</i>
            </p>
          </div>
        </div>
      </div>
      <br />
      {/* <ProjectScreen
        id="project"
        href="#project"
        username="anirudh-mk"
        token={import.meta.env.VITE_GITHUB}
      /> */}
      <div className="flex flex-col w-scereen lg:w-[1192px] contact">
        <HeaddingText href="#contact" headding="Contact" />
        <div className="flex justify-center grid grid-cols-1 md:grid-cols-[165px_280px] pt-[150px] pb-[150px] gap-[40px]">
          <div className="flex justify-center">
            <TextButton
              className=""
              button_text="Download CV"
              link="https://drive.google.com/uc?export=download&id=1-4GLCPY6f3s-t-zt0tmb95Kg-2hHJ0B3"
              font_color="#000"
            />
          </div>
          <div className="flex justify-center grid-cols-subgrid gap-[40px]">
            <IconButton
              icon={faGithubAlt}
              link="https://github.com/anirudh-mk"
              icon_color="#000"
            />
            <IconButton
              icon={faEnvelope}
              link="https://mail.google.com/mail/u/0/?fs=0&to=anirudhmk123@gmail.com&tf=cm"
              icon_color="#000"
            />
            <IconButton
              icon={faLinkedinIn}
              link="https://www.linkedin.com/in/anirudh-mk"
              icon_color="#000"
            />
            <IconButton icon={faTwitter} icon_color="#000" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

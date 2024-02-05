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
      {/* <div className="home">
        <div className="flex w-screen lg:w-[1192px] mt-0 md:mt-[46px] pl-[28px] home-headding-container">
          <HeaddingText href="#home" headding="Anirudh MK" color="#fff" /> */}
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
      {/* </div>
      </div> */}

      <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-8"
              alt="Flowbite Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="flex  w-screen lg:w-[1192px] grid grid-cols-1 lg:grid-cols-[649px_344px] home-details-container pt-[80px] pb-[80px] gap-[40px]">
        <div className="flex flex-col items-center">
          <div className="flex pb-[40px] lg:hidden ">
            <ProfileImage
              className="hidden lg:flex"
              image={AnirudhImage}
              width={300}
              height={351}
              border_radius={172}
            />
          </div>
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
        <div className="hidden lg:flex pb-[80px]">
          <ProfileImage
            className="hidden lg:flex"
            image={AnirudhImage}
            width={344}
            height={403}
            border_radius={172}
          />
        </div>
      </div>
      <div id="about" className="flex flex-col w-screen lg:w-[1192px] about">
        <HeaddingText className="" href="#about" headding="About" />
        <div className="flex justify-center grid grid-cols-1 md:grid-cols-[118px_500px] lg:grid-cols-[118px_690px] pt-[80px] gap-[40px]">
          <div className="flex justify-center">
            <ProfileImage
              className="hidden lg:flex"
              image={AnirudhImage}
              width={117}
              height={138}
              border_radius={58}
            />
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
        <div className="flex justify-center grid grid-cols-1 md:grid-cols-[165px_280px] pt-[150px] pb-[50px] gap-[40px]">
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
        <h1 className="text-center pb-[100px] copywrite">&copy; Anirudh MK</h1>
      </div>
    </>
  );
}

export default App;

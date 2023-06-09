import React from 'react';
import desktopLight from '../assets/bg-desktop-light.jpg';
import mobileLight from '../assets/bg-mobile-light.jpg';
import desktopDark from '../assets/bg-desktop-dark.jpg';
import mobileDark from '../assets/bg-mobile-dark.jpg';
import { MoonIcon, SunIcon } from '../icons';

const Header = ({ darkMode, toggleTheme }) => {
  return (
    <header className="z-50">
      <picture>
        <source
          media="(max-width: 600px)"
          srcSet={darkMode ? mobileDark : mobileLight}
          sizes="375px"
        />
        <source srcSet={darkMode ? desktopDark : desktopLight} sizes="1440px" />
        <img src={mobileLight} alt="mountains" className="absolute w-full" />
      </picture>
      <section className="flex justify-between pt-10 lg:pt-14 max-w-md mx-auto relative px-4 xl:max-w-xl xl:pt-20">
        <h1 className="text-lightTheme-50 text-2xl md:text-3xl tracking-[10px] font-josefin">
          TODO
        </h1>
        {darkMode ? (
          <SunIcon onClick={toggleTheme} className="cursor-pointer" />
        ) : (
          <MoonIcon onClick={toggleTheme} className="cursor-pointer" />
        )}
      </section>
    </header>
  );
};

export default Header;

import React, { useState } from "react";
import { a1, a2, a3, a4, a5, hinh1New, hinh2New, hinh4New, hinh5New, hinh6New } from "../assets";

export interface ScreenType {
  key: React.Key;
  component: React.ReactNode;
}

export default function useAppViewModel() {
  const images = [a1, a2, a3, a4, a5];
  const [currentImage, setCurrentImage] = useState<string>(images[0]);
  const [activeLink, setActiveLink] = useState<string>("#section0");

  const onScrollChange = (_activeLink: string) => {
    setActiveLink(_activeLink);
    switch (_activeLink) {
      case "#section0":
        setCurrentImage(hinh4New);
        break;
      case "#section1":
        setCurrentImage(hinh1New);
        break;
      case "#section2":
        setCurrentImage(hinh2New);
        break;
      case "#section3":
        setCurrentImage(hinh6New);
        break;
      case "#section4":
        setCurrentImage(hinh5New);
        break;
    }
  };

  return {
    images,
    currentImage,
    activeLink,
    onScrollChange,
  };
}

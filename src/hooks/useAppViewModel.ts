import React, { useState } from "react";
import { a1, a2, a3, a4, a5 } from "../assets";

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
        setCurrentImage(a1);
        break;
      case "#section1":
        setCurrentImage(a2);
        break;
      case "#section2":
        setCurrentImage(a3);
        break;
      case "#section3":
        setCurrentImage(a4);
        break;
      case "#section4":
        setCurrentImage(a5);
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

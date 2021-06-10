import { useState, useEffect } from "react";

export const useScrollPast = (props) => {
  const [scrollPast, setScrollPast] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  });

  const visibleHeight =
    window.innerWidth < 900 ? props.height - 56 : props.height;

  const handleScroll = () => {
    if (window.scrollY > visibleHeight) {
      setScrollPast(true);
    }
  };
  return scrollPast;
};

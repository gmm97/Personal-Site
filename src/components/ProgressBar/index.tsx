import React from "react";
import { ProgressBarContainer, FillerStyles, PercentageStyles } from "./styles";
import { useState, useEffect, useContext } from "react";
import { HeightContext } from "../../pages/Home";

export const ProgressBar = () => {
  const homeHeight = useContext(HeightContext);

  const [scrollNav, setScrollNav] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    changeNav();
    return () => window.removeEventListener("scroll", changeNav);
  });

  const changeNav = (): void => {
    if (homeHeight === 0) {
      setScrollNav(0);
      return;
    }
    var percentage =
      (window.scrollY / homeHeight) *
      100 *
      (homeHeight / (homeHeight - window.innerHeight));
    setScrollNav(Math.min(Math.round(percentage), 100));
  };

  return (
    <ProgressBarContainer>
      <FillerStyles scrollNav={scrollNav}>
        <PercentageStyles scrollNav={scrollNav}>{scrollNav}%</PercentageStyles>
      </FillerStyles>
    </ProgressBarContainer>
  );
};

import React, { useRef, useReducer, useLayoutEffect } from "react";
import useResizeObserver from "@react-hook/resize-observer";
import reducer from "../reducer";
import NavBar from "../components/NavBar";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import MobileNavBar from "../components/MobileNavBar";
import { sidebarDescr } from "../components/NavBar/content";
import { Description as AboutDescription } from "../components/About/content";
import {
  Description as ProjectDescription,
  CarouselContent,
} from "../components/Projects/content";
import { ContactInformation, Languages } from "../components/Contact/content";
import { HomeWrapper, MainPages } from "./HomeStyles";

export const HeightContext = React.createContext();

const Home = () => {
  const refArray = [];
  const initialState = {
    aboutHeight: 0,
    workHeight: 0,
    projectsHeight: 0,
    contactHeight: 0,
    bottomHeight: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const useSize = (target) => {
    useLayoutEffect(() => {
      dispatch({
        type: target.current.id,
        payload: target.current.offsetTop,
      });
    }, [target]);
    useResizeObserver(target, (entry) => {
      refArray.map((ref, index) => {
        recomputeTopHeights(ref);
      });
      recomputeBottomHeights(refArray[refArray.length - 1]);
    });
    return;
  };

  const recomputeTopHeights = (target) => {
    if (!target.current) {
      return;
    }
    dispatch({
      type: target.current.id,
      payload: target.current.offsetTop,
    });
  };

  const recomputeBottomHeights = (target) => {
    if (!target.current) {
      return;
    }
    dispatch({
      type: "homepage",
      payload: target.current.offsetTop + target.current.offsetHeight,
    });
  };

  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  refArray.push(aboutRef, workRef, projectRef, contactRef);

  useSize(aboutRef);
  useSize(workRef);
  useSize(projectRef);
  useSize(contactRef);

  return (
    <HomeWrapper>
      <HeightContext.Provider value={state.bottomHeight}>
        <NavBar {...sidebarDescr} />
      </HeightContext.Provider>

      <MainPages>
        <MobileNavBar />
        <About
          {...AboutDescription}
          ref={aboutRef}
          height={state.aboutHeight}
        />
        <Experience ref={workRef} height={state.workHeight} />
        <Projects
          description={ProjectDescription}
          content={CarouselContent}
          ref={projectRef}
          height={state.projectsHeight}
        />
        <Contact
          {...ContactInformation}
          languages={Languages}
          ref={contactRef}
          height={state.contactHeight}
        />
      </MainPages>
    </HomeWrapper>
  );
};

export default Home;

import React, { useRef, useReducer, useLayoutEffect } from "react";
import useResizeObserver from "@react-hook/resize-observer";
import reducer from "../reducer";
import NavBar from "../components/NavBar";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import MobileNavBar from "../components/MobileNavBar";
import { DesktopNavBarDescription } from "../components/NavBar/content";
import { AboutDescription } from "../components/About/content";
import {
  ProjectDescription,
  CarouselContent,
} from "../components/Projects/content";
import {
  ContactInformation,
  TranslatedLanguages,
  ContactDescription,
} from "../components/Contact/content";
import { HomeWrapper, MainPages } from "./HomeStyles";

export interface ReducerState {
  aboutHeight: number;
  workHeight: number;
  projectsHeight: number;
  contactHeight: number;
  bottomHeight: number;
}

export type ActionTypes =
  | { type: "about"; payload: number }
  | { type: "work"; payload: number }
  | { type: "projects"; payload: number }
  | { type: "contact"; payload: number }
  | { type: "bottom"; payload: number };

export const HeightContext = React.createContext<number>(0);

const Home = () => {
  // contains all the refs created
  const refArray: React.RefObject<HTMLDivElement>[] = [];

  const initialState: ReducerState = {
    aboutHeight: 0,
    workHeight: 0,
    projectsHeight: 0,
    contactHeight: 0,
    bottomHeight: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const checkTypeInActions = (
    node: HTMLDivElement | null
  ): ActionTypes["type"] | null => {
    if (!node) {
      return null;
    }
    var actionType = node.id;
    if (
      actionType === "about" ||
      actionType === "work" ||
      actionType === "projects" ||
      actionType === "contact"
    ) {
      let actionType: ActionTypes["type"] = node.id as ActionTypes["type"];
      return actionType;
    }
    return null;
  };

  const useSize = (target: React.RefObject<HTMLDivElement>): void => {
    const node = target.current;

    useLayoutEffect(() => {
      let actionType = checkTypeInActions(node);
      if (actionType !== null) {
        dispatch({
          type: actionType,
          payload: node!.offsetTop,
        });
      }
    }, [node]);

    useResizeObserver(target, (entry) => {
      refArray.map((ref, index) => {
        recomputeTopHeights(ref);
      });
      recomputeBottomHeights(refArray[refArray.length - 1]);
    });
  };

  const recomputeTopHeights = (
    target: React.RefObject<HTMLDivElement>
  ): void => {
    const node = target.current;
    let actionType = checkTypeInActions(node);
    if (actionType) {
      dispatch({
        type: actionType,
        payload: node!.offsetTop,
      });
    }
  };

  const recomputeBottomHeights = (
    target: React.RefObject<HTMLDivElement>
  ): void => {
    const node = target.current;
    let actionType = "bottom" as ActionTypes["type"];
    if (node) {
      dispatch({
        type: actionType,
        payload: node!.offsetTop + node!.offsetHeight,
      });
    }
  };

  const aboutRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useSize(aboutRef);
  useSize(workRef);
  useSize(projectRef);
  useSize(contactRef);

  refArray.push(aboutRef, workRef, projectRef, contactRef);

  return (
    <HomeWrapper>
      <HeightContext.Provider value={state.bottomHeight}>
        <NavBar DesktopNavBarDescription={DesktopNavBarDescription} />
      </HeightContext.Provider>

      <MainPages>
        <MobileNavBar />
        <About
          AboutDescription={AboutDescription}
          ref={aboutRef}
          height={state.aboutHeight}
        />
        <Experience ref={workRef} height={state.workHeight} />
        <Projects
          ProjectDescription={ProjectDescription}
          CarouselContent={CarouselContent}
          ref={projectRef}
          height={state.projectsHeight}
        />
        <Contact
          ContactInformation={ContactInformation}
          TranslatedLanguages={TranslatedLanguages}
          ContactDescription={ContactDescription}
          ref={contactRef}
          height={state.contactHeight}
        />
      </MainPages>
    </HomeWrapper>
  );
};

export default Home;

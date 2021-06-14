import { useRouteMatch } from "react-router";
import { CarouselContentItem } from "../../../components/Projects/content";

export const useProjectDetails = (CarouselContent: CarouselContentItem[]) => {
  const { path } = useRouteMatch();
  const projectEntry = CarouselContent.find((carouselItem) => {
    return `/project/${carouselItem.LinkName}` === path;
  });
  if (!projectEntry) {
    throw Error("Could not find details of this project.");
  } else {
    return projectEntry;
  }
};

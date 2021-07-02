import React from "react";
import { Switch, Route, useRouteMatch } from "react-router";
import {
  CarouselContent,
  CarouselContentItem,
} from "../../components/Projects/content";
import { ProjectPage } from "./ProjectPage";
import key from "weak-key";

const ProjectNavigation = () => {
  const { path } = useRouteMatch();
  return (
    <React.Fragment>
      <Switch>
        {CarouselContent &&
          CarouselContent.map((CarouselContentItem: CarouselContentItem) => {
            return (
              <Route
                key={key(CarouselContentItem)}
                path={`${path}/${CarouselContentItem.LinkName}`}
              >
                <ProjectPage CarouselContentItem={CarouselContentItem} />
              </Route>
            );
          })}
      </Switch>
    </React.Fragment>
  );
};

export default ProjectNavigation;

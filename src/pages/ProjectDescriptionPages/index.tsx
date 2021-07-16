import React, { Suspense, lazy } from "react";
import { Switch, Route, useRouteMatch } from "react-router";
import {
  CarouselContent,
  CarouselContentItem,
} from "../../components/Projects/content";
import Spinner from "../../components/ReusableComponents/LoadingSpinner";
import key from "weak-key";

const ProjectPage = lazy(() => import("./ProjectPage"));

const ProjectNavigation = () => {
  const { path } = useRouteMatch();
  return (
    <React.Fragment>
      <Suspense fallback={<Spinner />}>
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
      </Suspense>
    </React.Fragment>
  );
};

export default ProjectNavigation;

import React from "react";
import { Switch, Route, useRouteMatch } from "react-router";
import { CarouselContent } from "../../components/Projects/content";

import { default as ParticleSwarm } from "./ParticleSwarm";
import { default as Chatbot } from "./Chatbots";
import { default as Codebook } from "./Codebook";
import { default as Database } from "./Database";
import { default as HeartSound } from "./Heart-Sound";
import { default as KalmanFilter } from "./Kalman-Filter";
import { default as Microservices } from "./Microservices";
import { default as PersonalSite } from "./Personal-Site";
import { default as SEM } from "./SEM";

const ProjectNavigation = () => {
  const { path } = useRouteMatch();
  return (
    <React.Fragment>
      <Switch>
        <Route path={`${path}/particleswarm`}>
          <ParticleSwarm CarouselContent={CarouselContent} />
        </Route>
        <Route path={`${path}/database`}>
          <Database CarouselContent={CarouselContent} />
        </Route>
        <Route path={`${path}/chatbots`}>
          <Chatbot CarouselContent={CarouselContent} />
        </Route>
        <Route path={`${path}/SEM`}>
          <SEM CarouselContent={CarouselContent} />
        </Route>
        <Route path={`${path}/microservices`}>
          <Microservices CarouselContent={CarouselContent} />
        </Route>
        <Route path={`${path}/codebook`}>
          <Codebook CarouselContent={CarouselContent} />
        </Route>
        <Route path={`${path}/personal-site`}>
          <PersonalSite CarouselContent={CarouselContent} />
        </Route>
        <Route path={`${path}/heart-sound`}>
          <HeartSound CarouselContent={CarouselContent} />
        </Route>
        <Route path={`${path}/kalman-filter`}>
          <KalmanFilter CarouselContent={CarouselContent} />
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default ProjectNavigation;

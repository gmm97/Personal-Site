import { CarouselContentItem } from "../../components/Projects/content";
import { useProjectDetails } from "./GetDetailsFromContent";
import {
  ProjectContentContainer,
  ProjectMainHeading,
  ProjectSubHeading,
  ProjectElaboration,
  ProjectDateHeading,
  ReturnMainPage,
} from "./ProjectDescriptionStyles";

interface ProjectPageItem {
  CarouselContent: CarouselContentItem[];
}

const ParticleSwarm = (props: ProjectPageItem) => {
  const ProjectEntry: CarouselContentItem = useProjectDetails(
    props.CarouselContent
  );
  return (
    <ProjectContentContainer>
      <ProjectMainHeading scrollPast={false}>
        {ProjectEntry.ProjectName}
      </ProjectMainHeading>
      <ProjectDateHeading>
        {ProjectEntry.PageData.TimeWorked}
      </ProjectDateHeading>{" "}
      <ProjectSubHeading>About</ProjectSubHeading>
      <ProjectElaboration>{ProjectEntry.PageData.About}</ProjectElaboration>
      <ProjectSubHeading>Tools</ProjectSubHeading>
      <ProjectElaboration>{ProjectEntry.PageData.Tools}</ProjectElaboration>
      <ProjectSubHeading>Details</ProjectSubHeading>
      <ProjectElaboration>
        {ProjectEntry.PageData.ProjectDetails}
      </ProjectElaboration>
      <ProjectSubHeading>References</ProjectSubHeading>
      <ProjectElaboration>
        {ProjectEntry.PageData.FurtherReading}
      </ProjectElaboration>
      <ReturnMainPage to={"/"}>Return to Home Page</ReturnMainPage>
    </ProjectContentContainer>
  );
};

export default ParticleSwarm;

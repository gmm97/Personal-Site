import { useState, useEffect } from "react";
import { CarouselContentItem } from "../../components/Projects/content";
import {
  ProjectContentContainer,
  ProjectMainHeading,
  ReturnMainPage,
  ProjectDateHeading,
  MarkdownWrapper,
} from "./ProjectDescriptionStyles";
import ReactMarkdown from "react-markdown";

interface ProjectPageItem {
  CarouselContentItem: CarouselContentItem;
}

export const ProjectPage = (props: ProjectPageItem) => {
  const [currentMarkdown, setCurrentMarkdown] = useState("");
  const projectEntry = props.CarouselContentItem;

  useEffect(() => {
    let linkName = projectEntry.LinkName;

    const fetchMarkdown = async () => {
      let markdownFile;
      try {
        markdownFile = await import("./Project_Pages/" + linkName + ".md");
      } catch (err) {
        console.log(err);
        return;
      }
      const markdownContent = await fetch(markdownFile.default);

      const markdownText = await markdownContent.text();

      setCurrentMarkdown(markdownText);
    };
    fetchMarkdown();
  }, []);

  return (
    <ProjectContentContainer>
      <ProjectMainHeading scrollPast={false}>
        {projectEntry.ProjectName}
      </ProjectMainHeading>
      <ProjectDateHeading>
        {projectEntry.PageData.TimeWorked}
      </ProjectDateHeading>
      <MarkdownWrapper>
        <ReactMarkdown children={currentMarkdown} />
      </MarkdownWrapper>
      <ReturnMainPage to={"/"}>Return to Home Page</ReturnMainPage>
    </ProjectContentContainer>
  );
};

export default ProjectPage;

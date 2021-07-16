import { useState, useEffect } from "react";
import { CarouselContentItem } from "../../components/Projects/content";
import Spinner from "../../components/ReusableComponents/LoadingSpinner";
import {
  ProjectContentContainer,
  ProjectMainHeading,
  ReturnMainPage,
  ProjectDateHeading,
  MarkdownWrapper,
  StyledMarkdown,
} from "./ProjectDescriptionStyles";
import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import materialLight from "react-syntax-highlighter/dist/cjs/styles/prism/material-light";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/typescript";

SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("tsx", tsx);

interface ProjectPageItem {
  CarouselContentItem: CarouselContentItem;
}

const ProjectPage = (props: ProjectPageItem) => {
  const [currentMarkdown, setCurrentMarkdown] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const projectEntry = props.CarouselContentItem;

  const customRenderers = {
    code(code: any) {
      const { className, children } = code;
      const language = className.split("-")[1];
      return (
        <SyntaxHighlighter
          language={language}
          children={children}
          style={materialLight}
        />
      );
    },
  };

  useEffect(() => {
    setIsLoading(true);
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
    setIsLoading(false);
    return () => setIsLoading(true);
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
        {isLoading && <Spinner />}
        <StyledMarkdown
          children={currentMarkdown}
          components={customRenderers}
        />
      </MarkdownWrapper>
      <ReturnMainPage to={"/"}>Return to Home Page</ReturnMainPage>
    </ProjectContentContainer>
  );
};

export default ProjectPage;

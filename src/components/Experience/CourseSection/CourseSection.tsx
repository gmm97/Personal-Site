import React, { useState } from "react";
import key from "weak-key";
import {
  SearchBarWrapper,
  SearchBarResultsWrapper,
  IndividualResult,
  InputArea,
  IndividualTitle,
  IndividualGrade,
  InputWrapper,
} from "./CourseSectionStyles";
import {
  SectionSubHeading,
  SectionElaboration,
} from "../../ReusableComponents/styles";
import { CourseDescription } from "./content";
import { VisibleCourseItem } from "../content";

interface CourseSectionProps {
  VisibleCourseData: VisibleCourseItem[];
  AllCoursesData: VisibleCourseItem[];
  CourseDescription: CourseDescription;
}

export const CourseSection = (props: CourseSectionProps) => {
  const [resultsList, setResultsList] = useState<VisibleCourseItem[]>(
    props.VisibleCourseData
  );

  const onInputChange = (e: string): void => {
    var currentWord = e;

    let oldList = props.AllCoursesData.map((course: VisibleCourseItem) => {
      return { Title: course.Title.toUpperCase(), Grade: course.Grade };
    });
    if (currentWord !== "") {
      let newList: VisibleCourseItem[] = [];
      newList = oldList.filter((course: VisibleCourseItem, idx) => {
        return course.Title.includes(currentWord.toUpperCase());
      });
      setResultsList(newList);
    } else {
      setResultsList(props.VisibleCourseData);
    }
  };

  const numberOfRows: Array<VisibleCourseItem> = [
    ...Array(Math.ceil(resultsList.length / 3)),
  ];
  const individualRows: VisibleCourseItem[][] = numberOfRows.map(
    (row: VisibleCourseItem, idx) => resultsList.slice(3 * idx, 3 * (idx + 1))
  );
  return (
    <SearchBarWrapper>
      <SectionSubHeading>
        {props.CourseDescription.CoursePrimarySubHeading}
      </SectionSubHeading>
      <SectionElaboration>
        {props.CourseDescription.CoursePrimaryElaboration}
      </SectionElaboration>
      <InputWrapper>
        <InputArea
          placeholder="Enter a course name"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            onInputChange(e.target.value);
          }}
        />
      </InputWrapper>
      <SearchBarResultsWrapper>
        {individualRows.map((row: VisibleCourseItem[], idx) => {
          return (
            <React.Fragment key={key(row)}>
              {row.map((course: VisibleCourseItem, idx) => {
                return (
                  <IndividualResult key={key(course)}>
                    <IndividualTitle key={course.Title}>
                      {course.Title}
                    </IndividualTitle>
                    <IndividualGrade key={course.Grade}>
                      {course.Grade}
                    </IndividualGrade>
                  </IndividualResult>
                );
              })}
            </React.Fragment>
          );
        })}
      </SearchBarResultsWrapper>
    </SearchBarWrapper>
  );
};

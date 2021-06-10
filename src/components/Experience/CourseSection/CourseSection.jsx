import React, { useState } from "react";
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
import key from "weak-key";

export const CourseSection = (props) => {
  const [resultsList, setResultsList] = useState(props.coursesVisible);

  const onInputChange = (e) => {
    var currentWord = e;

    let oldList = props.allCourses.map((course) => {
      return { Title: course.Title.toUpperCase(), Grade: course.Grade };
    });
    if (currentWord !== "") {
      let newList = [];
      newList = oldList.filter((course, idx) => {
        return course.Title.includes(currentWord.toUpperCase());
      });
      setResultsList(newList);
    } else {
      setResultsList(props.coursesVisible);
    }
  };
  const numberOfRows = [...Array(Math.ceil(resultsList.length / 3))];
  const individualRows = numberOfRows.map((row, idx) =>
    resultsList.slice(3 * idx, 3 * (idx + 1))
  );
  return (
    <SearchBarWrapper>
      <SectionSubHeading>{props.description.Introduction}</SectionSubHeading>
      <SectionElaboration>{props.description.Elaboration}</SectionElaboration>
      <InputWrapper>
        <InputArea
          placeholder="Enter a course name"
          onChange={(e) => {
            onInputChange(e.target.value);
          }}
        />
      </InputWrapper>
      <SearchBarResultsWrapper>
        {individualRows.map((row, idx) => {
          return (
            <React.Fragment key={key(row)}>
              {row.map((course, idx) => {
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

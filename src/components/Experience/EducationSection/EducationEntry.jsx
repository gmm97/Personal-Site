import {
  EntryContainer,
  TopLineContainer,
  EntryHeading,
  EntryDate,
  SubEntryHeader,
  DetailsContainer,
  SingleDetail,
} from "../ReusableComponents/styles";

export const EducationEntry = ({ entry }) => {
  const instituteName = entry.instituteName;
  const qualificationName = entry.qualificationName;
  const Date = entry.Date;
  const Details = entry.Details;

  return (
    <EntryContainer>
      <TopLineContainer>
        <EntryHeading>{instituteName}</EntryHeading>
        <EntryDate>{Date}</EntryDate>
      </TopLineContainer>
      <SubEntryHeader>{qualificationName}</SubEntryHeader>
      <DetailsContainer>
        {Details.map((detail, idx) => {
          return <SingleDetail key={idx}>{detail}</SingleDetail>;
        })}
      </DetailsContainer>
    </EntryContainer>
  );
};

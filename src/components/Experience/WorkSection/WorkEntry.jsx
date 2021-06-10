import {
  EntryContainer,
  TopLineContainer,
  EntryHeading,
  EntryDate,
  SubEntryHeader,
  DetailsContainer,
  SingleDetail,
} from "../ReusableComponents/styles";

export const WorkEntry = ({ entry }) => {
  const companyName = entry.Title;
  const Role = entry.Role;
  const Date = entry.Date;
  const Details = entry.Details;

  return (
    <EntryContainer>
      <TopLineContainer>
        <EntryHeading>{companyName}</EntryHeading>
        <EntryDate>{Date}</EntryDate>
      </TopLineContainer>
      <SubEntryHeader>{Role}</SubEntryHeader>
      <DetailsContainer>
        {Details.map((detail, idx) => {
          return <SingleDetail key={idx}>{detail}</SingleDetail>;
        })}
      </DetailsContainer>
    </EntryContainer>
  );
};

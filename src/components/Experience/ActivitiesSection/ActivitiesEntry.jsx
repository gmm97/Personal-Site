import {
  EntryContainer,
  TopLineContainer,
  EntryHeading,
  EntryDate,
  SubEntryHeader,
  DetailsContainer,
  SingleDetail,
} from "../ReusableComponents/styles";

export const ActivitiesEntry = ({ entry }) => {
  const clubName = entry.clubName;
  const positionName = entry.positionName;
  const Date = entry.Date;
  const Details = entry.Details;

  return (
    <EntryContainer>
      <TopLineContainer>
        <EntryHeading>{clubName}</EntryHeading>
        <EntryDate>{Date}</EntryDate>
      </TopLineContainer>
      <SubEntryHeader>{positionName}</SubEntryHeader>
      <DetailsContainer>
        {Details.map((detail, idx) => {
          return <SingleDetail key={idx}>{detail}</SingleDetail>;
        })}
      </DetailsContainer>
    </EntryContainer>
  );
};

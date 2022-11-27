const AwardsList = [
  {
    id: 1,
    title: "article title 1",
    year: 2022,
  },
  {
    id: 2,
    title: "article title 2",
    year: 2022,
  },
  {
    id: 3,
    title: "article title 3",

    year: 2022,
    journal: "journal name",
  },
  {
    id: 4,
    title: "article title 4",
    year: 2022,
  },
];

export default function Awards() {
  return (
    <div>
      {AwardsList.map((award) => (
        <div key={award.id}>
          <h4>{award.title}</h4>
          <small>{award.year}</small>
          <hr />
        </div>
      ))}
    </div>
  );
}

const papersList = [
  {
    id: 1,
    title: "article title 1",
    authors: "author name, second author",
    year: 2022,
    journal: "journal name",
  },
  {
    id: 2,
    title: "article title 2",
    authors: "author name, second author",
    year: 2022,
    journal: "journal name",
  },
  {
    id: 3,
    title: "article title 3",
    authors: "author name, second author",
    year: 2022,
    journal: "journal name",
  },
  {
    id: 4,
    title: "article title 4",
    authors: "author name, second author",
    year: 2022,
    journal: "journal name",
  },
];

export default function Papers() {
  return (
    <div>
      {papersList.map((paper) => (
        <div key={paper.id}>
          <h4>{paper.title}</h4>
          <p>{paper.authors}</p>
          <small>
            {paper.journal} - {paper.year}
          </small>
          <hr />
        </div>
      ))}
    </div>
  );
}

import styles from './AssociatedPaperDetails.module.css';

interface Paper {
  title: string;
  authors: string[];
  publicationDate: string;
  journalName: string;
  citations: number;
  impactFactor: number;
}

interface AssociatedPaperDetailsProps {
  paper: Paper;
}

const AssociatedPaperDetails = ({ paper }: AssociatedPaperDetailsProps) => {
  return (
    <div className="mt-5">
      <h3 className={styles.title}>Associated Research Paper</h3>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{paper.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{paper.authors.join(', ')}</h6>
          <p className="card-text">
            Published in <em>{paper.journalName}</em> on {paper.publicationDate}.
          </p>
          <p>
            <strong>Citations:</strong> {paper.citations} | <strong>Journal Impact Factor:</strong> {paper.impactFactor}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AssociatedPaperDetails;

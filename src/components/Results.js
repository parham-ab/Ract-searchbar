// icons
import { BsSearch } from "react-icons/bs";

const Results = ({ result }) => {
  //   console.log(result);
  return (
    <div className="results-list">
      <p className="result-title">{result.title}</p>
      <span>
        <BsSearch />
      </span>
    </div>
  );
};

export default Results;

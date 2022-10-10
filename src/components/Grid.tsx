import "../styles/grid.css";
import { Launch } from "../types";
import Card from "../components/Card";

interface Props {
  launches: Array<Launch>;
}
const Grid = ({ launches }: Props) => {
  return (
    <section>
      <div className="grid-container">
        {launches.map((launch, i) => {
          return <Card key={i} launch={launch} />;
        })}
      </div>
    </section>
  );
};

export default Grid;

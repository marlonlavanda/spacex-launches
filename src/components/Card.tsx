import { Launch } from "../types";
import "../styles/card.css";
interface Props {
  launch: Launch;
}

const Card = ({ launch }: Props) => {
  return (
    <article>
      <div className="image-container">
        <img src={launch.links.patch.small} alt="" />
      </div>

      <div className="content-container">
        <h3>{launch.name}</h3>
        <div>{launch.details?.substring(0, 100)}</div>
      </div>
    </article>
  );
};

export default Card;

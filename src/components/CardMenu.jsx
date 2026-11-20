import { Link } from "react-router-dom";

export default function CardMenu({ showTitle, showPic, showDetail, path }) {
  return (
    <Link to={path} className="menu-card">
      <img src={showPic} alt="" />
      <h2>{showTitle}</h2>
      <p>{showDetail}</p>
    </Link>
  );
}

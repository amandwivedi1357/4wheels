import { Link, useLocation } from "react-router-dom";
import "./css/home/bred.css"
const Breadcrumbs = () => {
  const location = useLocation();

  if (!location || !location.pathname) {
    
    return null;
  }

  const pathnames = location.pathname.split("/").filter((x) => x);
  let breadcrumbPath = "";

  return (
    <div className="breadcrumbs">
      {pathnames.length > 0 && (
        <Link className="breadcrumb-link" to="/">
          Home
        </Link>
      )}
      {pathnames.map((name, index) => {
        breadcrumbPath += `/${name}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <span key={index} className="breadcrumb-item">
    {'>'} {name}
  </span>
) : (
  <span key={index} className="breadcrumb-item">
    {'>'}<Link className="breadcrumb-link" to={breadcrumbPath}>
      {name}
    </Link>
  </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;

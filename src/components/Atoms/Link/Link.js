import { Link as NavLink } from "react-router-dom";

const Link = ({ href, to, text, targetBlank }) =>
  href ? (
    <li>
      <a
        className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
        href={href}
        target={targetBlank ? "_blank" : ""}
        rel="noopener noreferrer"
      >
        {text}
      </a>{" "}
    </li>
  ) : (
    <li>
      <NavLink
        className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
        to={to}
        target={targetBlank ? "_blank" : ""}
        rel="noopener noreferrer"
      >
        {text}
      </NavLink>
    </li>
  );

export default Link;

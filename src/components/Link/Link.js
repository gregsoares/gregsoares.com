const Link = ({ href, to, text, targetBlank }) =>
  href ? (
    <li>
      <a
        className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
        href={href}
        target={targetBlank ? '_blank' : ''}
        rel="noopener noreferrer"
      >
        {text}
      </a>{' '}
    </li>
  ) : (
    <li>
      <a
        className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
        href={to}
        target={targetBlank ? '_blank' : ''}
        rel="noopener noreferrer"
      >
        {text}
      </a>
    </li>
  );

export default Link;

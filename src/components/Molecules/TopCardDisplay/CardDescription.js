import React from 'react';

export const CardDescription = ({ description, style }) => {
  if (style === 'ul') {
    return (
      <ul className="text-left mt-6 mb-4">
        {description?.map((paragraph, index) => (
          <li key={index} className="m-2 text-base text-gray-800">
            {paragraph}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <>
      {description?.map((paragraph, index) => (
        <p key={index} className="pl-2 m-2 text-base text-gray-800 text-left">
          {paragraph}
        </p>
      ))}
    </>
  );
};

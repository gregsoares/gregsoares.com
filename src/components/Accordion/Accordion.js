import React from 'react';
import {
  AccordionContainer,
  AccordionItem,
  AccordionTitle,
  AccordionContent,
  PreviewImage
} from './styled';

const Accordion = ({ componentList, activeIndexControls }) => {
  const { activeIndex, handleToggle } = activeIndexControls;
  const CustomComponent = ({ component }) => {
    const Component = component.type === 'function' ? component : () => component;
    return <Component />;
  };

  return (
    <AccordionContainer>
      {componentList.map((component, index) => (
        <AccordionItem key={index}>
          <div>
            <AccordionTitle onClick={() => handleToggle(index)}>{component.title}</AccordionTitle>
            {activeIndex === index && (
              <AccordionContent>
                <PreviewImage src={component.image} alt={component.title} />
                <CustomComponent component={component.description} />
              </AccordionContent>
            )}
          </div>
        </AccordionItem>
      ))}
    </AccordionContainer>
  );
};

export default Accordion;

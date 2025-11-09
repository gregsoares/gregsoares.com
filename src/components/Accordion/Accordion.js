import React from 'react';
import {
  AccordionContainer,
  AccordionItem,
  AccordionTitle,
  AccordionContent,
  PreviewImage
} from './styled';

/**
 * Accordion component that displays a collapsible list of items
 * @param {Object} props - Component props
 * @param {Array} props.componentList - Array of accordion items
 * @param {string} props.componentList[].title - Title displayed in accordion header
 * @param {string} [props.componentList[].image] - Optional image URL to display
 * @param {React.Component|Function} [props.componentList[].customComponent] - Custom component to render
 * @param {Object} props.activeIndexControls - Controls for accordion state
 * @param {number} props.activeIndexControls.activeIndex - Currently active accordion index (-1 for none)
 * @param {Function} props.activeIndexControls.handleToggle - Function to toggle accordion items
 * @returns {React.Component} Rendered accordion component
 */
const Accordion = ({ componentList, activeIndexControls }) => {
  const { activeIndex, handleToggle } = activeIndexControls;
  /**
   * Renders a custom component, handling both function and JSX components
   * @param {Object} props - Component props
   * @param {React.Component|Function} props.component - Component to render
   * @returns {React.Component} Rendered component
   */
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

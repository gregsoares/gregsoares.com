import styled from 'styled-components';

export const AccordionContainer = styled.div`
  width: 100%;
  min-height: 30vh;
  border: 1px solid #ccc;
`;

export const AccordionItem = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
`;

export const AccordionTitle = styled.div`
  padding: 1em;
  cursor: pointer;
  background-color: #f1f1f1;
  flex: 1;
`;

export const AccordionContent = styled.div`
  padding: 1em;
  background-color: #fff;
  flex: 2;
`;

export const PreviewImage = styled.img`
  max-width: 250px;
  max-height: 250px;
  object-fit: cover;
  margin: 1em auto;
`;

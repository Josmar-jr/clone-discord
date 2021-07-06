import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--tertiary);
  padding: 0.65rem 0;

  min-height: 100vh;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
  ::-webkit-scrollbar-track {
    display: none;
  }
`;

export const Separator = styled.div`
  width: 2rem;
  border-bottom: 2px solid var(--quaternary);

  margin-bottom: 0.5rem;
`;

export const ServerButton = styled.div``;

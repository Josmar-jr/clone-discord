import styled from 'styled-components';

import { Props } from '.';

export const Button = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 48px;
  height: 48px;
  border-radius: 50%;

  margin-bottom: 0.5rem;

  background-color: ${({ isHome }) =>
    isHome ? 'var(--rocketseat)' : 'var(--primary)'};
  cursor: pointer;
  position: relative;

  > img {
    width: 100%;
    height: 100%;
    border-radius: 30%;
  }

  &:before {
    width: 9px;
    height: 9px;

    position: absolute;
    left: -17px;
    top: calc(50% - 4.5px);

    background-color: var(--white);
    border-radius: 50%;

    content: '';
    display: ${({ hasNotifications }) =>
      hasNotifications ? 'inline' : 'none'};
  }

  &:after {
    background-color: var(--notification);
    width: auto;
    height: 16px;

    padding: 0 4px;

    position: absolute;
    bottom: -3px;
    right: -4px;

    border-radius: 12px;
    border: 4px solid var(--quaternary);

    text-align: right;
    font-size: 0.8rem;
    font-weight: bold;
    color: var(--white);

    content: '${({ mentions }) => mentions && mentions}';
    display: ${({ mentions }) =>
      mentions && mentions > 0 ? 'inline' : 'none'};
  }

  transition: border-radius 0.2s ease;

  &.active,
  &:hover {
    border-radius: 0.9rem;
    background-color: ${({ isHome }) =>
      isHome ? 'var(--rocketseat)' : 'var(--discord)'};
  }
`;

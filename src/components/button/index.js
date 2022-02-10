import styled, { css } from 'styled-components';

const reset = css`
  border: none;
  margin: 0;
  padding: 0;
  overflow: visible;
`;

const Button = styled.button`
  ${reset}

  background: #0052CC;
  color: #fff;
  padding: 0 6px;

  border-radius: 4px;
  font-size: 16px;
  line-height: 2em;
  cursor: pointer;

  :hover {
    background: #0065FF;
  }

  :active{
    background: #004bb3;
  }
`;

export { Button }
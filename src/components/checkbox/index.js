import styled from 'styled-components';

const InputHidden = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
`;

const Check = styled.span`
  position: absolute;
  display: none;
  left: 6.8px;
  top: 3px;
  width: 4px;
  height: 8px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
  width: 10px;
  height: 10px;

  ${InputHidden}:checked ~ & {
    display: block;
  }
`;

const Wrapper = styled.label`
  position: relative;
  width: 32px;
  height: 32px;
  cursor: pointer;

  ${Check} {
    display: ${props => props.checked ? 'block' : 'none'};
  }
`;

export const Checkbox = (props) => {
  return (
    <Wrapper >
      <InputHidden type="checkbox" {...props} />

      <Check />
    </Wrapper>
  )
}
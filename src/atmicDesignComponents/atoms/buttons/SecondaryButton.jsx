import styled from "styled-components";
import { BaseButton } from "./BaseButton";

const Button = styled(BaseButton)`
  background-color: #11999e;
`;

export const SecondaryButton = props => {
  const { children, onClick } = props;
  return <Button onClick={onClick} >{children}</Button>;
};

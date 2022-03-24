import styled from "styled-components";
import { BaseButton } from "./BaseButton";

const Button = styled(BaseButton)`
  background-color: #40514e;
`;

export const PrimaryButton = props => {
  const { children } = props;
  return <Button>{children}</Button>;
};

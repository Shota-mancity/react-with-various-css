import styled from "styled-components";

const Container = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Title = styled.p`
  margin: 0;
  color: #3d84a8;
`;
const Button = styled.button`
  padding: 8px;
  border-radius: 8px;
  border: none;
  background-color: #abdee8;
  &:hover {
    background-color: #3d84a8;
    color: #fff;
    cursor: pointer;
  }
`;

export const StyledComponents = () => {
  return (
    <>
      <Container>
        <Title>---Styled Components---</Title>
        <Button>FIGHT!</Button>
      </Container>
    </>
  );
};

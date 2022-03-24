import { useHistory } from "react-router-dom";
import React, { useContext } from "react";
import styled from "styled-components";
import { SecondaryButton } from "../atoms/buttons/SecondaryButton";
import { UserContext } from "../../providers/UserProvider";
import { useSetRecoilState } from "recoil";
import { userState } from "../../store/userState";

const Container = styled.div`
  text-align: center;
`;

export const Top = () => {
  const history = useHistory();
  //   const {setUserInfo}=useContext(UserContext)
  const setUserInfo = useSetRecoilState(userState);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push("/users");
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push("/users");
  };

  return (
    <Container>
      <h2>This is a Top page</h2>
      <SecondaryButton onClick={onClickAdmin}>Admin User</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>Nomal User</SecondaryButton>
    </Container>
  );
};

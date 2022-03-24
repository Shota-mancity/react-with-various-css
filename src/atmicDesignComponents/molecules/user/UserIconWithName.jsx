import React, { useContext, memo } from "react";
import styled from "styled-components";
import { UserContext } from "../../../providers/UserProvider";
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/userState";

const Container = styled.div`
  text-align: center;
`;
const Image = styled.img`
  border-radius: 50%;
`;
const Name = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;
const Edit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;

export const UserIconWithName = memo(props => {
  console.log("UserIconWithName");
  //   const {userInfo} = useContext(UserContext);
  const userInfo = useRecoilValue(userState);
  const { image, name } = props;
  const isAdmin = userInfo ? userInfo.isAdmin : false;
  return (
    <Container>
      <Image height={160} width={160} src={image} alt={name} />
      <Name>{name}</Name>
      {isAdmin && <Edit>Edit</Edit>}
    </Container>
  );
});

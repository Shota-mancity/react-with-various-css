import React, { useContext } from "react";
import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { SecondaryButton } from "../atoms/buttons/SecondaryButton";
import { UserContext } from "../../providers/UserProvider";
import { useRecoilState } from "recoil";
import { userState } from "../../store/userState";

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 24px;
`;
const UserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
`;

const users = [...Array(10).keys()].map(val => {
  return {
    id: val,
    name: `Tom${val}`,
    image: "https://source.unsplash.com/5PVXkqt2s9k",
    email: "12345@example.com",
    phone: "090-1111-2222",
    living: {
      prefecture: "Tottori"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  //   const { userInfo, setUserInfo } = useContext(UserContext);
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const onClickSwitch = () => {
    setUserInfo({ isAdmin: !userInfo.isAdmin });
  };

  return (
    <Container>
      <h2>Users List</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>Change</SecondaryButton>
      <UserArea>
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </UserArea>
    </Container>
  );
};

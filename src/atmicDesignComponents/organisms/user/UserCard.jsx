import styled from "styled-components";
import { Card } from "../../atoms/cards/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";
import { memo } from "react";

const Dl = styled.dl`
  text-align: left;
  margin-bottom: 0;
  dt {
    float: left;
  }
  dd {
    padding-left: 65px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;

export const UserCard = memo(props => {
    console.log("UserCard")
  const { user } = props;
  return (
    <Card>
      <UserIconWithName image={user.image} name={user.name} />
      <Dl>
        <dt>mail</dt>
        <dd>{user.email}</dd>
        <dt>TEL</dt>
        <dd>{user.phone}</dd>
        <dt>Prefecture</dt>
        <dd>{user.living.prefecture}</dd>
        <dt>WEB</dt>
        <dd>{user.website}</dd>
      </Dl>
    </Card>
  );
})

import styled from "styled-components";
import { PrimaryButton } from "../atoms/buttons/PrimaryButton";
import { Input } from "../atoms/inputs/input";
import { memo } from "react";

const Container = styled.div`
  display: flex;
  align-items: center;
`;
const ButtonWrapper = styled.div`
  padding-left: 8px;
`;

export const SearchInput = memo(() => {
  console.log("SeatchInput")
  return (
    <div>
      <Container>
        <Input placeholder="検索条件を入力" />
        <ButtonWrapper>
          <PrimaryButton>Search</PrimaryButton>
        </ButtonWrapper>
      </Container>
    </div>
  );
})

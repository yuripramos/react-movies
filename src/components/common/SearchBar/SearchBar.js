import React from "react";

import { Search, Wrapper, IconWrapper, ButtonWrapper } from "./styles";
import Input from "../../common/Input";
import Button from "../../common/Button";
import Icon from "../../common/Icon";

function SearchBar() {
  return (
    <Wrapper>
      <Search>
        <Input
          type="text"
          name="name"
          // onChange={handleUserInputFavoredData}
          // value={"favoredData.name}"}
          placeholder="Type your next movie to watch"
        />
        <ButtonWrapper>
          <Button isCallToAction width={110} type="submit">
            <IconWrapper>
              <Icon name="Search" />
            </IconWrapper>
          </Button>
        </ButtonWrapper>
      </Search>
    </Wrapper>
  );
}

export default SearchBar;

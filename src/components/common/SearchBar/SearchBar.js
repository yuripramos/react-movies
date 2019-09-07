import React from "react";
import { Search, Wrapper, IconWrapper, ButtonWrapper } from "./styles";
import Input from "../../common/Input";
import Button from "../../common/Button";
import Icon from "../../common/Icon";
import { func, object, bool } from "prop-types";

function SearchBar({
  handleUserSearch,
  searchData,
  getQueryListBySearch,
  ClearFilterOnSearch
}) {
  return (
    <Wrapper>
      <Search>
        <Input
          type="text"
          name="searchTerm"
          onChange={handleUserSearch}
          value={searchData.searchTerm}
          placeholder="Type your next movie to watch"
        />
        <ButtonWrapper
          onClick={() => {
            getQueryListBySearch(searchData.searchTerm);
            ClearFilterOnSearch(false);
          }}
        >
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
SearchBar.defaultProps = {
  searchData: {}
};

SearchBar.propTypes = {
  handleUserSearch: func.isRequired,
  getQueryListBySearch: func.isRequired,
  searchData: object,
  ClearFilterOnSearch: bool
};

export default SearchBar;

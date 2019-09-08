import React from "react";
import { Search, Wrapper, IconWrapper, ButtonWrapper } from "./styles";
import Input from "../../common/Input";
import Button from "../../common/Button";
import Icon from "../../common/Icon";
import { func, object } from "prop-types";

function SearchBar({
  handleUserSearch,
  searchData,
  getQueryListBySearch,
  ClearFilterOnSearch,
  ClearSearchBar
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
            ClearFilterOnSearch();
            ClearSearchBar();
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
  ClearFilterOnSearch: func,
  ClearSearchBar: func
};

export default SearchBar;

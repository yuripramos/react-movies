import React, { Component } from "react";
import {
  ListMenuItems,
  Item,
  Span,
  MenuList,
  Divisor,
  LeftBorder,
  ListItem
} from "./styles";
import { string, bool, func } from "prop-types";
import { redirect } from "../../../utils/redirect";

class SidebarMenu extends Component {
  constructor(props) {
    super(props);
    this.isActive = this.isActive.bind(this);
  }

  isActive(path) {
    const { currentLocation } = this.props;
    return currentLocation.includes(path);
  }

  redirectTo(path) {
    const { closeMenu } = this.props;
    closeMenu();
    redirect(path);
  }

  render() {
    const { desktop } = this.props;
    if (desktop) {
      return (
        <ListMenuItems>
          <Item
            onClick={() => redirect("/movies")}
            active={this.isActive("/movies")}
          >
            <Span>MOVIES</Span>
          </Item>
          <Item
            onClick={() => redirect("/series")}
            active={this.isActive("/series")}
          >
            <Span>SERIES</Span>
          </Item>
          <Item
            onClick={() => redirect("/categories")}
            active={this.isActive("/categories")}
          >
            <Span>CATEGORIES</Span>
          </Item>
        </ListMenuItems>
      );
    } else {
      return (
        <MenuList>
          <Divisor />
          <ListItem
            onClick={() => redirect("/movies")}
            active={this.isActive("/movies")}
          >
            <LeftBorder />
            MOVIES
          </ListItem>
          <ListItem
            onClick={() => redirect("/series")}
            active={this.isActive("/series")}
          >
            <LeftBorder />
            SERIES
          </ListItem>
          <ListItem
            onClick={() => redirect("/categories")}
            active={this.isActive("/categories")}
          >
            <LeftBorder />
            CATEGORIES
          </ListItem>
        </MenuList>
      );
    }
  }
}

export default SidebarMenu;

SidebarMenu.propTypes = {
  currentLocation: string,
  desktop: bool,
  closeMenu: func
};

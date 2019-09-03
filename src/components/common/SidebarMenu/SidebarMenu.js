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
            onClick={() => redirect("/news")}
            active={this.isActive("/news")}
          >
            <Span>NEWS</Span>
          </Item>
          <Item
            onClick={() => redirect("/vision")}
            active={this.isActive("/vision")}
          >
            <Span>OUR VISION</Span>
          </Item>
          <Item
            onClick={() => redirect("/contact")}
            active={this.isActive("/contact")}
          >
            <Span>CONTACT</Span>
          </Item>
        </ListMenuItems>
      );
    } else {
      return (
        <MenuList>
          <Divisor />
          <ListItem
            onClick={() => redirect("/news")}
            active={this.isActive("/news")}
          >
            <LeftBorder />
            NEWS
          </ListItem>
          <ListItem
            onClick={() => redirect("/vision")}
            active={this.isActive("/vision")}
          >
            <LeftBorder />
            OUR VISION
          </ListItem>
          <ListItem
            onClick={() => redirect("/contact")}
            active={this.isActive("/contact")}
          >
            <LeftBorder />
            CONTACT
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

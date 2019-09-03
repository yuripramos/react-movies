import React from "react";
import { string } from "prop-types";

/*ICONS*/
import Papers from "./Papers";
import NotFound from "./NotFound";
import Wallet from "./Wallet";
import Menu from "./Menu";
import MenuClose from "./MenuClose";
import Filter from "./Filter";
import Arrow from "./Arrow";

const IconGenerator = props => {
  switch (props.name) {
    case "NotFound":
      return <NotFound {...props} />;
    case "Papers":
      return <Papers {...props} />;
    case "Wallet":
      return <Wallet {...props} />;
    case "Menu":
      return <Menu {...props} />;
    case "MenuClose":
      return <MenuClose {...props} />;
    case "Filter":
      return <Filter {...props} />;
    case "Arrow":
      return <Arrow {...props} />;
    default:
      return;
  }
};

IconGenerator.propTypes = {
  name: string
};

export default IconGenerator;

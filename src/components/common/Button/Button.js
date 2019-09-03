import React from "react";
import { bool, node, string, func, number } from "prop-types";
import { ButtonTag } from "../../../styles/objects";

function Button({
  children,
  onClick,
  isCallToAction,
  type,
  disabled,
  width,
  className,
  small,
  height,
  dataTest,
  opacity
}) {
  return (
    <ButtonTag
      className={className}
      width={width}
      height={height}
      type={type}
      disabled={disabled}
      isCallToAction={isCallToAction}
      data-test={dataTest ? dataTest : Button.displayName}
      onClick={onClick}
      small={small}
      opacity={opacity}
    >
      {children}
    </ButtonTag>
  );
}

Button.displayName = "Button";

Button.defaultProps = {
  isCallToAction: null,
  type: "button",
  disabled: false,
  width: null,
  height: null,
  onClick: null,
  className: null,
  small: false
};

Button.propTypes = {
  children: node,
  isCallToAction: bool,
  disabled: bool,
  type: string,
  width: number,
  onClick: func,
  className: string,
  small: bool,
  height: number,
  dataTest: string,
  opacity: string
};

export default Button;

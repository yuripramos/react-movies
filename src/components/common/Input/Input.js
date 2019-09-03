import React, { Component } from "react";
import { string, func, bool, array, number, oneOfType } from "prop-types";

import { InputWrapper, InputField, Label, Prefix } from "./styles";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
      emptyState: false,
      isValid: typeof props.valid === "boolean" ? props.valid : null,
      isDisabled: false
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.value === "" && this.state.isValid !== null) {
      this.setState({
        isValid: null
      });
    }

    if (prevProps.value === "" && this.props.value.length > 4) {
      this.setState({
        isValid:
          this.props.value === ""
            ? null
            : typeof this.props.valid === "function"
            ? this.props.valid()
            : this.state.isValid
      });
    }
  }

  render() {
    const {
      label,
      value,
      placeholder,
      onChange,
      onBlur,
      type,
      name,
      valid,
      tinyLabels,
      width,
      onFocus,
      prefix,
      ...props
    } = this.props;
    const { isFocused, emptyState, isValid } = this.state;
    return (
      <InputWrapper valid={emptyState ? false : isValid} width={width}>
        {prefix && (value || isFocused) && <Prefix>{prefix}</Prefix>}
        <InputField
          {...props}
          required
          onChange={e => {
            onChange && onChange(e);
            this.setState({ emptyState: e.target.value === "" });
          }}
          onFocus={e => {
            onFocus && onFocus(e);
            prefix && this.setState({ isFocused: true });
          }}
          onBlur={e => {
            onBlur && onBlur(e);
            this.setState({
              isFocused: false,
              isValid: valid ? valid() : this.state.isValid
            });
          }}
          prefix={prefix}
          type={type}
          value={value}
          name={name}
          onKeyDown={this.onKeyDown}
          placeholder={placeholder}
          isEmpty={!value}
          tinyLabels={tinyLabels}
        />
        {label && <Label tinyLabels={tinyLabels}>{label}</Label>}
      </InputWrapper>
    );
  }
}

Input.displayName = "Input";

Input.defaultProps = {
  placeholder: "",
  type: "text",
  name: "",
  label: null,
  valid: () => {},
  onFocus: null,
  onBlur: () => {},
  value: "",
  disableKeys: []
};

Input.propTypes = {
  placeholder: string,
  type: string,
  name: string,
  label: string,
  icon: string,
  tinyLabels: bool,
  value: oneOfType([number, string]),
  valid: oneOfType([bool, func]),
  onBlur: func,
  onFocus: func,
  disableKeys: oneOfType([number, string, array]),
  onChange: func,
  width: string,
  prefix: string
};

export default Input;

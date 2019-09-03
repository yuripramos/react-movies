import React, { Component } from "react";
import { string, oneOfType, func, bool, number, array } from "prop-types";
import { DropdownWrapper, DropdownField } from "./styles";
import { Label } from "../../common/Input/styles";

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emptyState: false,
      isValid: typeof props.valid === "boolean" ? props.valid : null
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.value === "" && this.state.isValid !== null) {
      this.setState({
        isValid: null
      });
    }

    if (prevProps.value === "" && this.props.value !== "") {
      this.setState({
        isValid: this.props.valid ? this.props.valid() : this.state.isValid
      });
    }
  }

  render() {
    const {
      value,
      placeholder,
      onChange,
      type,
      name,
      dataTest,
      list,
      label,
      tinyLabels,
      width,
      valid,
      noEmptySelection
    } = this.props;

    const { emptyState, isValid } = this.state;
    const emptyOptionTemplate = noEmptySelection
      ? []
      : [{ name: "", selected: true }];

    return (
      <DropdownWrapper valid={emptyState ? false : isValid} width={width}>
        <DropdownField
          required
          onChange={e => {
            onChange && onChange(e);
            this.setState({ emptyState: e.target.value === "" });
          }}
          onBlur={() => {
            this.setState({
              isValid: valid ? valid() : this.state.isValid
            });
          }}
          type={type}
          value={value}
          name={name}
          placeholder={placeholder}
          data-test={dataTest ? dataTest : Dropdown.displayName}
          isEmpty={!value}
          tinyLabels={tinyLabels}
        >
          {emptyOptionTemplate.concat(list).map((e, i) => (
            <option key={i} value={e.value} defaultValue={e.selected}>
              {e.name}
            </option>
          ))}
        </DropdownField>
        {label && <Label tinyLabels={tinyLabels}>{label}</Label>}
      </DropdownWrapper>
    );
  }
}

Dropdown.defaultProps = {
  value: "",
  name: "",
  label: ""
};

Dropdown.propTypes = {
  placeholder: string,
  type: string,
  name: string,
  label: string,
  tinyLabels: bool,
  value: oneOfType([number, string]),
  valid: oneOfType([bool, func]),
  onChange: func,
  dataTest: string,
  list: array,
  width: number,
  noEmptySelection: bool
};

export default Dropdown;

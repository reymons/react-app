import React from "react";

const FormControl = ({input, meta, elementType, ...props}) => {
  const hasError = meta.error && meta.touched;
  let element;

  if (hasError) {
    element = React.createElement(
      elementType,
      {...input, ...props, style: { border: "2px solid red" } }
    )
  } else {
    element = React.createElement(
      elementType,
      {...input, ...props }
    )
  }

  return (
    <>
      {element}
      <br />
      {hasError && <span style={{color: "red"}}>{meta.error}</span>}
    </>
  )
}

export default FormControl;
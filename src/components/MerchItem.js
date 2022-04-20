import React from "react";
import PropTypes from "prop-types";

function MerchItem(props) {
  return (
    <React.Fragment>
      <h3>{props.exampleMerch.name}</h3>
      <p>{props.exampleMerch.description} | {props.exampleMerch.quantity}
      </p>
    </React.Fragment>
  )
}

MerchItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.number
}

export default MerchItem;
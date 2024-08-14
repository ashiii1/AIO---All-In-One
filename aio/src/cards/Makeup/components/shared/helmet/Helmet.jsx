import React from "react";

const Helmet = props => {
  document.title = 'Furni.com - ' + props.title;
  return <div>{props.children}</div>
}

export default Helmet;
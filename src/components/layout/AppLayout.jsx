/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";
import Header from "./Header";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <>
        <div className="layout">
          <Header />
          <WrappedComponent {...props} />
        </div>
      </>
    );
  };
};

export default AppLayout;

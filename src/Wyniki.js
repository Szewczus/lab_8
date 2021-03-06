import React from "react";

export const CLASS_NAME = "result-container";
export default function Wyniki(props) {
  if (props.isLoading) {
    return (
      <div className={CLASS_NAME}>
        <div className="loader" />
      </div>
    );
  }

  if (props.result === undefined) {
    return <div className={"empty-div " + CLASS_NAME} />;
  }

  return (
    <div className={"row " + CLASS_NAME}>
      <h3 className="content">Result: {props.result.toLocaleString()}</h3>
    </div>
  );
}

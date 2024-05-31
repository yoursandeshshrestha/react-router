import React from "react";
import { useParams } from "react-router-dom";

function Random() {
  const { id } = useParams();
  return (
    <div className="Contact">
      <h1>Random : {id}</h1>
    </div>
  );
}

export default Random;

import React from "react";
import { useParams } from "react-router-dom";

const Course = () => {
  const { id } = useParams();
  return <div>This is course ID: {id}</div>;
};

export default Course;

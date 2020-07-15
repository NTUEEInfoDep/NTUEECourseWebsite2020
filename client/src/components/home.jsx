import React, { useState, useEffect } from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";

import { getAllCourse } from "../actions/courseAction";
import { selectGrade } from "../actions/uiActions";

import CourseCard from "./courseCard";
import Loading from "./loading";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
  },
}));

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.course);
  const { selectedGrade } = useSelector((state) => state.ui);
  const grades = [
    { key: 1, val: "大一" },
    { key: 2, val: "大二" },
    { key: 3, val: "大三" },
    { key: 0, val: "實驗" },
  ];
  useEffect(() => {
    // don't want to dispatch the function every time router back
    if (Object.entries(courses).length === 0) dispatch(getAllCourse());
    // dispatch(getAllCourse());
  }, []);
  const handleSelectGrade = (key) => {
    dispatch(selectGrade(key));
  };

  return (
    <Container component="div" maxWidth="lg">
      <CssBaseline />
      <div className={classes.paper}>
        <ButtonGroup
          color="secondary"
          size="large"
          aria-label="outlined primary button group"
        >
          {grades.map((grade) => (
            <Button
              key={grade.key}
              onClick={() => handleSelectGrade(grade.key)}
            >
              {grade.val}
            </Button>
          ))}
        </ButtonGroup>
        {courses[selectedGrade]
          ? courses[selectedGrade].map((course) => (
              <CourseCard
                courseID={course.courseID}
                grade={selectedGrade}
                name={course.name}
                key={course.courseID}
              />
            ))
          : null}
      </div>
    </Container>
  );
};

export default Home;

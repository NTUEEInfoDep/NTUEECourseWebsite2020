import React, { useState, useEffect } from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";

import { getAllCourse } from "../actions/courseAction";

import CourseCard from "./courseCard";

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
  useEffect(() => {
    dispatch(getAllCourse());
  }, [dispatch]);
  const [selectedGrade, setSelectedGrade] = useState(1);
  const courses = useSelector((state) => state.course);

  const handleSelectGrade = (key) => {
    setSelectedGrade(key);
  };
  const grades = [
    { key: 1, val: "大一" },
    { key: 2, val: "大二" },
    { key: 3, val: "大三" },
    { key: 4, val: "十選二" },
  ];

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
        {courses.map((course) =>
          course.grade === selectedGrade ? (
            <CourseCard
              courseID={course.courseID}
              grade={course.grade}
              name={course.name}
              key={course.courseID}
            />
          ) : null
        )}
      </div>
    </Container>
  );
};

export default Home;

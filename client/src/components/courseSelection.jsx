import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { makeStyles } from "@material-ui/core/styles";
import { useParams, Link as RouterLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import CourseOption from "./courseOption";
import {
  getCourseSelection,
  updateCourseSelection,
} from "../actions/courseAction";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
  selection: {
    marginTop: theme.spacing(2),
  },
}));

const CourseSelection = () => {
  const { id } = useParams();
  const classes = useStyles();
  const dispatch = useDispatch();
  const subTitles = {
    "1": "大一",
    "2": "大二",
    "3": "大三",
    "4": "十選二",
  };
  useEffect(() => {
    dispatch(getCourseSelection(id));
  }, [dispatch]);
  const { name, grade, selected, unselected } = useSelector(
    (state) => state.selection
  );
  const onDragEnd = (result) => {
    // drag end move, reorder the state and update state
    const { source, destination } = result;
    if (!destination) {
      return;
    }
    const newSelection = {
      selected: [...selected],
      unselected: [...unselected],
    };
    const [remove] = newSelection[source.droppableId].splice(source.index, 1);
    newSelection[destination.droppableId].splice(destination.index, 0, remove);
    dispatch(updateCourseSelection(newSelection)); // redux action to update state
  };
  return (
    <Container component="div" maxWidth="lg">
      <CssBaseline />
      <div className={classes.root}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          color="secondary"
        >
          <Link color="inherit" component={RouterLink} to="/home">
            首頁
          </Link>
          <div>{subTitles[grade]}</div>
          <div>{name}</div>
        </Breadcrumbs>
      </div>
      <div className={classes.selection}>
        <List>
          <DragDropContext onDragEnd={onDragEnd}>
            <Typography variant="h5" gutterBottom>
              已選課程
            </Typography>
            <Droppable droppableId="selected">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {selected
                    ? selected.map((content, ind) => (
                        <Draggable
                          key={content}
                          draggableId={content}
                          index={ind}
                        >
                          {(innerProvided) => (
                            <div
                              ref={innerProvided.innerRef}
                              {...innerProvided.draggableProps}
                              {...innerProvided.dragHandleProps}
                            >
                              <CourseOption
                                content={content}
                                index={content}
                                order={content}
                              />
                              {innerProvided.placeholder}
                            </div>
                          )}
                        </Draggable>
                      ))
                    : null}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <br />
            <Typography variant="h5" gutterBottom>
              未選課程
            </Typography>
            <Droppable droppableId="unselected">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {unselected
                    ? unselected.map((content, ind) => (
                        <Draggable
                          key={content}
                          draggableId={content}
                          index={ind}
                        >
                          {(innerProvided) => (
                            <div
                              ref={innerProvided.innerRef}
                              {...innerProvided.draggableProps}
                              {...innerProvided.dragHandleProps}
                            >
                              <CourseOption
                                content={content}
                                index={content}
                                order={content}
                              />
                              {innerProvided.placeholder}
                            </div>
                          )}
                        </Draggable>
                      ))
                    : null}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </List>
      </div>
    </Container>
  );
};

export default CourseSelection;

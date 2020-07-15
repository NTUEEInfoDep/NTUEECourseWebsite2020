import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { makeStyles } from "@material-ui/core/styles";
import { useParams, Link as RouterLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import CourseOption from "./courseOption";
import {
  getCourseSelection,
  updateCourseSelection,
  saveSelection,
} from "../actions/courseAction";
import Loading from "./loading";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
  selection: {
    marginTop: theme.spacing(2),
    flexGrow: 1,
  },
  selectionList: {
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  },
}));

const CourseSelection = () => {
  const { courseID } = useParams();
  const classes = useStyles();
  const dispatch = useDispatch();
  const subTitles = {
    1: "大一",
    2: "大二",
    3: "大三",
    0: "實驗",
  };
  useEffect(() => {
    dispatch(getCourseSelection(courseID));
  }, [dispatch]);
  const { name, grade, selected, unselected } = useSelector(
    (state) => state.selection
  );
  const { isLoading } = useSelector((state) => state.ui);
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
    dispatch(saveSelection(courseID, newSelection.selected));
  };
  return (
    <Container component="div" maxWidth="lg">
      <CssBaseline />
      {isLoading ? (
        <Loading />
      ) : (
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

          <div className={classes.selection}>
            <List>
              <DragDropContext onDragEnd={onDragEnd}>
                <Grid container>
                  <Grid item xs={12} sm={6} className={classes.selectionList}>
                    <Typography variant="h5" gutterBottom>
                      已選課程
                    </Typography>
                    <Droppable droppableId="selected">
                      {(provided) => (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                        >
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
                  </Grid>
                  <br />
                  <Grid item xs={12} sm={6} className={classes.selectionList}>
                    <Typography variant="h5" gutterBottom>
                      未選課程
                    </Typography>
                    <Droppable droppableId="unselected">
                      {(provided) => (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                        >
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
                  </Grid>
                </Grid>
              </DragDropContext>
            </List>
          </div>
        </div>
      )}
    </Container>
  );
};

export default CourseSelection;

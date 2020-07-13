import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    display: "flex",
    marginTop: theme.spacing(1),
    backgroundColor: "#303030",
  },
  chip: {
    marginRight: theme.spacing(0.5),
    backgroundColor: "#505050",
  },
}));

const CourseCard = (props) => {
  const { courseID, grade, name } = props;
  const history = useHistory();
  const subTitles = {
    "1": "大一",
    "2": "大二",
    "3": "大三",
    "4": "十選二",
  };
  const classes = useStyles();
  const handleCardClick = (e) => {
    e.preventDefault();
    history.push(`/course/${courseID}`);
  };
  return (
    <Card className={classes.root} color="secondary">
      <CardActionArea onClick={handleCardClick}>
        <CardContent>
          <Typography variant="h5" color="textPrimary" gutterBottom>
            {name}
          </Typography>
          <Chip
            className={classes.chip}
            label="必修"
            icon={
              <FiberManualRecordIcon
                style={{ color: "#ff8775" }}
                fontSize="small"
              />
            }
          />
          <Chip
            className={classes.chip}
            label={subTitles[grade]}
            icon={
              <FiberManualRecordIcon
                style={{ color: "#ffb875" }}
                fontSize="small"
              />
            }
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

CourseCard.propTypes = {
  courseID: PropTypes.string.isRequired,
  grade: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default CourseCard;

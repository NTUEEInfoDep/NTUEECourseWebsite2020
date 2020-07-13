import React from "react";
import PropTypes from "prop-types";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ReorderIcon from "@material-ui/icons/Reorder";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  item: {
    backgroundColor: "#252525",
  },
});

const courseOption = (props) => {
  const { content } = props;
  const classes = useStyles();
  return (
    <div>
      <ListItem className={classes.item} button>
        <ListItemText primary={content} />
        <ListItemIcon>
          <ReorderIcon fontSize="small" />
        </ListItemIcon>
      </ListItem>
    </div>
  );
};

courseOption.propTypes = {
  content: PropTypes.string.isRequired,
};

export default courseOption;

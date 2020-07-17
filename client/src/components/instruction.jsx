import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

const useStyles = makeStyles({
  img: {
    width: "100%",
  },
});

const Instruction = (props) => {
  const { onClose, open } = props;
  const classes = useStyles();
  const handleClose = () => {
    onClose();
  };
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="instruction"
      open={open}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle id="instruction">操作說明</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <ul>
            <li>點進課程</li>
            <li>拖曳排序愈選志願</li>
            <li>選完課登出</li>
          </ul>
        </DialogContentText>
        <img
          className={classes.img}
          src="/instruction_take3.gif"
          alt="instruction"
        />
      </DialogContent>
    </Dialog>
  );
};

Instruction.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default Instruction;

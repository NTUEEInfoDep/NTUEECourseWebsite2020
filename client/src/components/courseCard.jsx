import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        display: 'flex',
        marginTop: theme.spacing(1)
    },
    chip: {
        marginRight: theme.spacing(0.5)
    }

}));

const CourseCard = (props) => {
    const { course } = props;
    const subTitles = {
        '1': '大一',
        '2': '大二',
        '3': '大三',
        '4': '十選二'
    }
    const classes = useStyles();
    return (
        <Card className={classes.root} color="secondary" variant="outlined">
            <CardActionArea>
                <CardContent>
                    <Typography variant="h5" color="textPrimary" gutterBottom>
                        {course.name}
                    </Typography>
                    <Chip
                        className={classes.chip}
                        label="必修"
                        icon={<FiberManualRecordIcon fontSize='small' />}
                    />
                    <Chip
                        className={classes.chip}
                        label={subTitles[course.grade]}
                        icon={<FiberManualRecordIcon fontSize='small' />}
                    />
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

CourseCard.propTypes = {
    course: PropTypes.objectOf(PropTypes.object).isRequired
}

export default CourseCard
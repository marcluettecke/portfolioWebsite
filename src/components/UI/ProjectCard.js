import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles({
	root: {
		minWidth: 300,
		backgroundColor: 'rgb(245, 245, 245)',
		fontFamily: 'Dosis',
		margin: '0 20px'
	}
});

const ProjectCard = props => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					component='img'
					// style={{ height: '80%' }}
					alt={props.imageLabel}
					image={props.imagePath}
					title={props.title}
				/>
				<CardContent>
					<Typography gutterBottom variant='h4' component='h2'>
						{props.title}
					</Typography>
					<Typography variant='h6' color='textSecondary' component='p'>
						{props.description}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size='large' color='primary'>
					<FontAwesomeIcon icon='chevron-up' />{' '}
					<span style={{ fontSize: '10px', paddingLeft: '10px' }}>More information</span>
				</Button>
			</CardActions>
		</Card>
	);
};
export default ProjectCard;

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Projects from './Projects';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && (
				// <Box p={3}>
				<Typography>{children}</Typography>
				// </Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired
};

export default function IconLabelTabs() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		// <Paper square style={{ backgroundColor: '#091c29' }}>
		<Fragment>
			<Tabs
				value={value}
				onChange={handleChange}
				variant='fullWidth'
				indicatorColor='primary'
				textColor='primary'
				aria-label='icon label tabs example'
				className='w-full mx-auto md:w-4/5'
			>
				<Tab
					icon={<FontAwesomeIcon icon='globe' />}
					label='All Projects'
					style={{ fontSize: '20px', outline: 'none' }}
				/>
				<Tab
					icon={<FontAwesomeIcon icon='chart-bar' />}
					label='Data Science'
					style={{ fontSize: '20px', outline: 'none' }}
				/>
				<Tab
					icon={<FontAwesomeIcon icon='desktop' />}
					label='Frontend'
					style={{ fontSize: '20px', outline: 'none' }}
				/>
				<Tab
					icon={<FontAwesomeIcon icon='dumbbell' />}
					label='Practice'
					style={{ fontSize: '20px', outline: 'none' }}
				/>
			</Tabs>
			<TabPanel value={value} index={0}>
				<Projects category={'all'}></Projects>
			</TabPanel>
			<TabPanel value={value} index={1}>
				<Projects category={'dataScience'}></Projects>
			</TabPanel>
			<TabPanel value={value} index={2}>
				<Projects category={'frontend'}></Projects>
			</TabPanel>
			<TabPanel value={value} index={3}>
				<Projects category={'practice'}></Projects>
			</TabPanel>
		</Fragment>
	);
}

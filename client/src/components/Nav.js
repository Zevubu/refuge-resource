import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Needed from '../needed'

function Link1 (){
return <Link to="/needed">Help Needed</Link>
}
function Link2 (){
  return <Link to="/offered">Help Needed</Link>
  }
  function Link3 (){
    return <Link to="/neededForm">Help Needed</Link>
    }
    function Link4 (){
      return <Link to="/offeredForm">Help Needed</Link>
      }

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`nav-tabpanel-${index}`}
        aria-labelledby={`nav-tab-${index}`}
        {...other}
      >
        <Box p={3}>{children}</Box>
      </Typography>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `nav-tab-${index}`,
      'aria-controls': `nav-tabpanel-${index}`,
    };
  }
  
  function LinkTab(props) {
    return (
      <Tab
        component="a"
        onClick={event => {
          // event.preventDefault();
        }}
        {...props}
      />
    );
  }
  
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));
  
  export default function NavTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    
  
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
          >

            <LinkTab label="Help Needed"  component={Link} to="/needed" {...a11yProps(0)}/>
            <LinkTab label="Help Offered" component={Link} to="/offered" {...a11yProps(1)} />
          <LinkTab label="Post Needed" component={Link} to="/neededform" {...a11yProps(2)} />
          <LinkTab label="Post Offered" component={Link} to="/offeredform" {...a11yProps(3)} />
          </Tabs>
    </AppBar>
        <TabPanel value={value} index={0}>
          <b>Help Needed</b>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <b>Help Offered</b>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <b>I Need Help.</b>
          </TabPanel>
        <TabPanel value={value} index={3}>
          <b>I Want To Help.</b>
        </TabPanel>

      </div>
    );
  }

// export default Nav
import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import SwitchVideoIcon from '@mui/icons-material/SwitchVideo';
import HamburgerIcon from '../../icons/hamburger.png';
import styles from './drawer.module.css';
// import HamburgerIcon from '../../icons/hamburger.png'
type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function SwipeableTemporaryDrawer() {

  const [openDrawer,setOpenDrawer]=useState(false);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const sideMenuItem=[{image:'',title:''},{
    image:'',
    title:'watchlist'
  },
  {
    image:<SwitchVideoIcon />,
    title:'Your videos'
  },
  {
    image:'',
    title:'coming soon'
  },
  {
    image:<FavoriteBorderIcon />,
    title:'liked videos'
  },
  {
    image:<NotificationAddIcon />,
    title:'notifications'
  }]

  const  toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      // if (
      //   event &&
      //   event.type === 'keydown' &&
      //   ((event as React.KeyboardEvent).key === 'Tab' ||
      //     (event as React.KeyboardEvent).key === 'Shift')
      // ) {
      //   return;
      // }
      setOpenDrawer(!openDrawer);

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width:  250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {sideMenuItem.map((item, index) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {item.image}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
     
      <React.Fragment key={'left'}>
          <Button onClick={toggleDrawer('left', true)} className={styles.button}>
          <img src={HamburgerIcon} />
          </Button>

          <SwipeableDrawer
            anchor={'left'}
            open={openDrawer}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
          >
            {list('left')}
          </SwipeableDrawer>
        </React.Fragment>
    </div>
  );
}

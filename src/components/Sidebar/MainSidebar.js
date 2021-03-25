import React from 'react';
import injectSheet from 'react-jss';
import {Sidebar, DropdownItem, Item, LogoText} from 'react-sidebar-ui';
import { MdFlightTakeoff } from 'react-icons/md';
import { GiTicket } from 'react-icons/gi';
import { BsLock } from 'react-icons/bs';

import styles from './MainSidebar.styles';
import { Link } from 'react-router-dom';

const mql = window.matchMedia(`(min-width: 800px)`);

const MainSidebar = (props) => {
  const { classes } = props;
  return (
      <Sidebar classes={classes.sidebar} isCollapsed={false}>
        <LogoText>FlightHelp</LogoText>
        <DropdownItem classes={classes.menuItem}
          values={[<Link to='/tickets/reservate'>Reservate</Link>,<Link to='/tickets/buy'>Buy</Link>]}>
          <GiTicket></GiTicket>
          <span className={classes.menuLabel} to='/tickets'>Tickets</span>
        </DropdownItem>

        <Item classes={classes.menuSingleItem} >
          <MdFlightTakeoff></MdFlightTakeoff>
          <Link className={classes.menuLabel} to='/flights'>Flights</Link>
        </Item>
        <DropdownItem classes={classes.menuItem}
          values={[<Link to='/admin/delays'>Delays</Link>, <Link to='/admin/flights'>Most Used Flights</Link>, <Link to='/admin/destinations'>Destinations</Link>]}>
          <BsLock></BsLock>
          <span className={classes.menuLabel}>Administration</span>
        </DropdownItem>
      </Sidebar>
  );
};

export default injectSheet(styles)(MainSidebar);
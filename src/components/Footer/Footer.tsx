import {
  BottomNavigation,
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Typography,
} from '@mui/material';
import NavItem from 'components/NavItem';
import { contactDetails, navItems, socialMediaDetails } from 'constants';

import logo from '../../assets/vertical-logo.png';
import { styles } from './styles';

const Footer = () => {
  return (
    <BottomNavigation component="footer" sx={styles.footerBar}>
      <Grid container sx={styles.outerContainer} spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Box component="img" src={logo} alt="logo" height={160} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="body1">Doormat Navigation</Typography>
          <List>
            {navItems.map((item, idx) => (
              <ListItem disableGutters>
                <NavItem key={idx} item={item} idx={idx} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="body1">Contact</Typography>
          <List>
            {contactDetails.map((item, idx) => (
              <ListItem disableGutters>
                <Box role="span">{item.icon}</Box>
                <ListItemText key={idx} secondary={item.value} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="body1">Social Media Links</Typography>
          <List>
            {socialMediaDetails.map((item, idx) => (
              <ListItem disableGutters>
                <Box role="span">{item.icon}</Box>
                <ListItemButton key={idx} component="a" href={item.value}>{item.label}</ListItemButton>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </BottomNavigation>
  );
};

export default Footer;

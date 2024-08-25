import {
  BottomNavigation,
  Box,
  Grid,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from '@mui/material';
import logo from 'assets/vertical-logo.png';
import NavItem from 'components/NavItem';
import { contactDetails, navItems, socialMediaDetails } from 'data';

import { styles } from './styles';

const Footer = () => {
  return (
    <BottomNavigation component="footer" sx={styles.footerBar}>
      <Grid container sx={styles.outerContainer}>
        <Grid
          item
          xs={12}
          md={6}
          sx={styles.logoGridItem}
        >
          <Box
            component="img"
            src={logo}
            alt="logo"
            sx={styles.logoImg}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="subtitle2">Doormat Navigation</Typography>
          <List>
            {navItems.map((item, idx) => (
              <ListItem disableGutters key={idx}>
                <NavItem size="small" item={item} idx={idx} />
              </ListItem>
            ))}
          </List>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="subtitle2">Contact</Typography>
          <List>
            {contactDetails.map((item, idx) => (
              <ListItem disableGutters key={idx}>
                <Box role="span">{item.icon}</Box>
                <Typography variant="subtitle3">{item.value}</Typography>
              </ListItem>
            ))}
          </List>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="subtitle2">Social Media</Typography>
          <List sx={styles.socialMedia}>
            {socialMediaDetails.map((item, idx) => (
              <ListItem disableGutters key={idx}>
                <ListItemButton component="a" href={item.value} sx={styles.iconHover}>
                  {item.icon}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </BottomNavigation>
  );
};

export default Footer;

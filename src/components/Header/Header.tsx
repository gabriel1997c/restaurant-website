import { Menu as MenuIcon } from '@mui/icons-material';
import { AppBar, Box, Button, Drawer, Grid, Toolbar } from '@mui/material';
import Divider from '@mui/material/Divider';
import NavItem from 'components/NavItem';
import { navItems } from 'constants';

import { Fragment } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/horizontal-logo.png';
import { styles } from './styles';
import type { IHeader } from './types';

const Header: React.FC<IHeader> = ({ enableLogoClick = true }: IHeader) => {
  const navigate = useNavigate();

  const handleClickLogo = () => {
    navigate('/');
  };

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <AppBar position="static" elevation={0} component="header" sx={styles.appBar}>
      <Toolbar disableGutters component="nav">
        <Grid container sx={styles.outerContainer}>
          <Grid
            container
            item
            xs
            sm={'auto'}
            zeroMinWidth
            wrap="nowrap"
            sx={{
              ...styles.logoContainer,
              cursor: enableLogoClick ? 'pointer' : 'default',
            }}
            onClick={enableLogoClick ? handleClickLogo : undefined}
          >
            <Box component="img" src={logo} alt="logo" height={35} />
          </Grid>
          <Grid
            container
            item
            xs
            sm={'auto'}
            zeroMinWidth
            wrap="nowrap"
            sx={styles.navLinksContainer}
          >
            <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
              {navItems.map((item, idx) => (
                <NavItem key={idx} item={item} idx={idx} />
              ))}
            </Box>
            <Box sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}>
              <Button
                onClick={handleDrawerToggle}
                aria-controls={mobileOpen ? 'nav-items-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={mobileOpen ? 'true' : undefined}
              >
                <MenuIcon />
              </Button>
              <Drawer
                id="nav-items-menu"
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={styles.drawer}
              >
                {navItems.map((item, idx) => (
                  <Fragment key={`nav-items-menu-item-${idx}`}>
                    <NavItem key={idx} item={item} idx={idx} />
                    {idx !== navItems.length - 1 && <Divider />}
                  </Fragment>
                ))}
              </Drawer>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

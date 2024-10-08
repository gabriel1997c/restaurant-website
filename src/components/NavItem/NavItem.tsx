import { Button } from '@mui/material';

import { Link } from 'react-router-dom';

import type { INavItem } from './types';

const NavItem: React.FC<INavItem> = ({ size, item, idx }: INavItem) => (
  <Button
    key={`nav-items-menu-item-${idx}`}
    variant="text"
    size={size}
    component={Link}
    to={item.url}
  >
    {item.label}
  </Button>
);

export default NavItem;

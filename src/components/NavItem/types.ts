export interface INavItemProps {
  url: string;
  label: string;
}

export interface INavItem {
  size: 'small' | 'medium' | 'large';
  item: INavItemProps;
  idx: number;
}

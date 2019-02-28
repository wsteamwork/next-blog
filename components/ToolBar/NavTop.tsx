import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import React, {Fragment, useRef, ComponentType, useState} from 'react';
import {compose} from 'recompose';
import Link from 'next/link';
import RootRef from '@material-ui/core/RootRef';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography/Typography';
import Button from '@material-ui/core/Button/Button';
import MenuPopper from '@/components/MenuContent/MenuPopper';
import PlaceToGo from '@/components/MenuContent/PlaceToGo';
import CategoryMenu from '@/components/MenuContent/CategoryMenu';

const styles: any = (theme: ThemeCustom) => createStyles({
  root: {
    flexGrow: 1,
  },
  navTop:{
    backgroundColor: '#ffffff',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.06)',
    position: 'sticky',
    top: 0,
  },
  categories: {
    flexGrow: 1,
    textAlign: 'center',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  pointer: {
    cursor: 'pointer',
  },
});

interface IProps extends Partial<WithStyles<typeof styles>> {

}

// @ts-ignore
const NavTop: ComponentType<IProps> = (props: IProps) => {
  const {classes}                 = props;
  const megaRef                   = useRef<HTMLElement>(null);
  const categoryRef               = useRef<HTMLElement>(null);
  const [menuIndex, setMenuIndex] = useState<number>(0);

  const menuIndexChange = (index: number) => {
    setMenuIndex(index);
  };

  return (
    <Fragment>
      <RootRef rootRef = {megaRef}>
        <AppBar position = 'static' elevation={1} className={classes.navTop}>
          <Toolbar onMouseLeave = {() => menuIndexChange(0)}>
            <Link href = '/'>
              <Typography variant = 'h6' color = 'inherit' className = {classes.pointer}>
                Blog
              </Typography>
            </Link>
            <div className = {classes.categories}>
              <Link href='https://blog.westay.vn/'>
                <Button
                  color = 'inherit'
                  name = 'home-page'
                  onMouseOver = {() => menuIndexChange(1)}>Trang chủ
                </Button>
              </Link>
              {/* <Button
                color = 'inherit'
                name = 'hot-deal'
                onMouseOver = {() => menuIndexChange(2)}>Khuyến mãi
              </Button> */}
              <Link href = 'https://westay.vn/'>
                <Button
                  color = 'inherit'
                  name = 'place'
                  onMouseOver = {() => menuIndexChange(3)}>Đặt phòng
                </Button>
              </Link>
              <Button
                color = 'inherit'
                name = 'categories'
                buttonRef = {categoryRef}
                onMouseOver = {() => menuIndexChange(4)}>Khám phá
              </Button>
              {/* <Button
                color = 'inherit'
                name = 'reviews'
                onMouseOver = {() => menuIndexChange(5)}>Review
              </Button> */}
            </div>
            <IconButton>
              <SearchIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </RootRef>
      <MenuPopper
        setIndex = {setMenuIndex}
        isOpen = {menuIndex === 1}
        bindRef = {megaRef}
      >
        {/*<PlaceToGo />*/}
      </MenuPopper>
      <MenuPopper
        setIndex = {setMenuIndex}
        isOpen = {menuIndex === 4}
        bindRef = {categoryRef}
      >
        <CategoryMenu />
      </MenuPopper>
    </Fragment>
  );
};

export default compose<IProps, any>(
  withStyles(styles),
)(NavTop);

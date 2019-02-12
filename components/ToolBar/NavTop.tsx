import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import React, {Fragment, useRef, ComponentType, useState, useEffect} from 'react';
import {compose} from 'recompose';
import {NextComponentType, NextFunctionComponent} from 'next';
import RootRef from '@material-ui/core/RootRef';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography/Typography';
import Button from '@material-ui/core/Button/Button';
import MegaMenu from '@/components/ToolBar/MegaMenu';

const styles: any = (theme: ThemeCustom) => createStyles({
  root: {
    flexGrow: 1,
  },
  categories: {
    flexGrow: 1,
    textAlign: 'center',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

interface IProps extends Partial<WithStyles<typeof styles>> {

}

// @ts-ignore
const NavTop: ComponentType<IProps> = (props: IProps) => {
  const {classes}                 = props;
  const megaRef                   = useRef<HTMLElement>(null);
  const [menuIndex, setMenuIndex] = useState<number>(0);

  const menuIndexChange = (index: number) => {
    setMenuIndex(index);
  };

  return (
    <Fragment>
      <RootRef rootRef = {megaRef}>
        <AppBar position = 'static'>
          <Toolbar onMouseLeave = {() => menuIndexChange(0)}>
            <Typography variant = 'h6' color = 'inherit'>
              Blog
            </Typography>
            <div className = {classes.categories}>
              <Button
                color = 'inherit'
                name = 'home-page'
                onMouseOver = {() => menuIndexChange(1)}>Trang chủ
              </Button>
              <Button
                color = 'inherit'
                name = 'hot-deal'
                onMouseOver = {() => menuIndexChange(2)}>Khuyến mãi
              </Button>
              <Button
                color = 'inherit'
                name = 'place'
                onMouseOver = {() => menuIndexChange(3)}>Điểm đến
              </Button>
              <Button
                color = 'inherit'
                name = 'categories'
                onMouseOver = {() => menuIndexChange(4)}>Danh mục
              </Button>
              <Button
                color = 'inherit'
                name = 'reviews'
                onMouseOver = {() => menuIndexChange(5)}>Review
              </Button>
            </div>
            <IconButton>
              <SearchIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </RootRef>
      <MegaMenu
        setIndex = {setMenuIndex}
        index = {menuIndex}
        bindRef = {megaRef.current}
      />
    </Fragment>
  );
};

export default compose<IProps, any>(
  withStyles(styles),
)(NavTop);

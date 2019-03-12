import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import React, {ComponentType, Fragment} from 'react';
import {compose} from 'recompose';
import Typography from '@material-ui/core/Typography/Typography';
import Gray from '@material-ui/core/colors/grey';
import CategoryListItem from '@/components/MenuContent/CategoryListItem';
import Link from 'next/link';
import Router from 'next/router'

const styles: any = (theme: Required<ThemeCustom>) => createStyles({
  root: {
    padding: 16,
    minWidth: 180,
  },

});

interface ICategoryMenuProps extends Partial<WithStyles<typeof styles>> {

}

// @ts-ignore
const CategoryMenu: ComponentType<ICategoryMenuProps> = (props: ICategoryMenuProps) => {
  const {classes} = props;

  return (
    <Fragment>
      <div className = {classes.root}>
        <CategoryListItem categoryUrl = {`https://blog.westay.vn/o-dau`} label = 'Ở đâu' />
        <CategoryListItem categoryUrl = {`https://blog.westay.vn/choi-gi`} label = 'Chơi gì' />
        <CategoryListItem categoryUrl = {`https://blog.westay.vn/an-gi`} label = 'Ăn gì' />
        <CategoryListItem categoryUrl = {`https://blog.westay.vn/cam-nang-du-lich`} label = 'Cẩm nang du lịch' />
        {/* <CategoryListItem label = 'Good to go' />
        <CategoryListItem label = 'Really long title for category' /> */}
      </div>
    </Fragment>
  );
};

export default compose<ICategoryMenuProps, any>(
  withStyles(styles),
)(CategoryMenu);

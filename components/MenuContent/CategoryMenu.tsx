import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import React, {ComponentType, Fragment} from 'react';
import {compose} from 'recompose';
import Typography from '@material-ui/core/Typography/Typography';
import Gray from '@material-ui/core/colors/grey';
import CategoryListItem from '@/components/MenuContent/CategoryListItem';
import Link from 'next/link';

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
        <Link href = '/o-dau'><CategoryListItem label = 'Ở đâu' /></Link>
        <Link href = '/choi-gi'><CategoryListItem label = 'Chơi gì' /></Link>
        <Link href = '/an-gi'><CategoryListItem label = 'Ăn gì' /></Link>
        <Link href = '/cam-nang-du-lich'><CategoryListItem label = 'Cẩm nang du lịch' /></Link>
        {/* <CategoryListItem label = 'Good to go' />
        <CategoryListItem label = 'Really long title for category' /> */}
      </div>
    </Fragment>
  );
};

export default compose<ICategoryMenuProps, any>(
  withStyles(styles),
)(CategoryMenu);

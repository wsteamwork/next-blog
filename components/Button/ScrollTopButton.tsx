import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import React, {ComponentType, Fragment} from 'react';
import {compose} from 'recompose';

const styles: any = (theme: ThemeCustom) => createStyles({});

interface IProps extends Partial<WithStyles<typeof styles>> {

}

// @ts-ignore
const ScrollTopButton: ComponentType<IProps> = (props: IProps) => {
  const {classes} = props;

  return (
    <Fragment>

    </Fragment>
  );
};

export default compose<IProps, any>(
  withStyles(styles),
)(ScrollTopButton);

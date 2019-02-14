import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import React, {ComponentType, Fragment} from 'react';
import {compose} from 'recompose';
import CategoryTitle from '@/components/Bars/CategoryTitle';
import Grid from '@material-ui/core/Grid/Grid';
import SocialMediaButton from '@/components/Button/SocialMediaButton';

const styles: any = (theme: ThemeCustom) => createStyles({});

interface IProps extends Partial<WithStyles<typeof styles>> {

}

// @ts-ignore
const SocialIndexBar: ComponentType<IProps> = (props: IProps) => {
  const {classes} = props;

  return (
    <Fragment>
      <Grid container>
        <CategoryTitle title = 'Mạng xã hội' scale = 'small' />
        <Grid container item xs = {12}>
          <SocialMediaButton />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default compose<IProps, any>(
  withStyles(styles),
)(SocialIndexBar);

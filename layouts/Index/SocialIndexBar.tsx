import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import React, {ComponentType, Fragment} from 'react';
import {compose} from 'recompose';
import CategoryTitle from '@/components/Bars/CategoryTitle';
import Grid from '@material-ui/core/Grid/Grid';
import SocialMediaButton from '@/components/Button/SocialMediaButton';
import IndexMainCard from '@/components/Cards/IndexMainCard';
import _ from 'lodash';
import {FACEBOOK_WESTAY_URL, INSTAGRAM_WESTAY_URL} from '@/store/constant/general';

const styles: any = (theme: ThemeCustom) => createStyles({
  trickOverlay: {
    bottom: 12,
    left: 12,
  },
  smallTitle: {
    fontSize: '1.025rem',
    fontWeight: 600,
  },
});

interface IProps extends Partial<WithStyles<typeof styles>> {

}

// @ts-ignore
const SocialIndexBar: ComponentType<IProps> = (props: IProps) => {
  const {classes} = props;

  return (
    <Fragment>
      <CategoryTitle title = 'Mạng xã hội' scale = 'small' />
      <Grid container spacing = {16}>
        <Grid container item xs = {12}>
          <SocialMediaButton socialName = 'facebook' text = 'Thích' href = {FACEBOOK_WESTAY_URL} />
        </Grid>
        <Grid container item xs = {12}>
          <SocialMediaButton socialName = 'instagram' text = 'Theo dõi' href = {INSTAGRAM_WESTAY_URL} />
        </Grid>
        <Grid container item xs = {12}>
          <SocialMediaButton socialName = 'youtube' text = 'Đăng ký kênh' />
        </Grid>
        <Grid container item xs = {12}>
          <SocialMediaButton socialName = 'twitter' text = 'Theo dõi' />
        </Grid>
      </Grid>
      <CategoryTitle title = 'Mẹo du lịch hay' scale = 'small' />
      <Grid container spacing = {16}>
        {_.map([0, 1, 2, 3, 4, 5], o => (
          <Grid item lg = {6} key = {o}>
            <IndexMainCard
              rootSpacing = {8}
              customClasses = {{
                overlayContainer: classes.trickOverlay,
                title: classes.smallTitle,
              }}
              chipText = 'Nghỉ'
              description = ''
              time = ''
              author = ''
            />
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};

export default compose<IProps, any>(
  withStyles(styles),
)(SocialIndexBar);

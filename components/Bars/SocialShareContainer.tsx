import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import React, {ComponentType, Fragment} from 'react';
import {compose} from 'recompose';
import SocialShare from '@/components/Button/SocialShare';
import {Facebook, Twitter, Google} from 'mdi-material-ui';
import {Grid} from '@material-ui/core';

const styles: any = (theme: Required<ThemeCustom>) => createStyles({
  iconColor: {
    color: '#505050',
  },
});

interface ISocialShareContainerProps extends Partial<WithStyles<typeof styles>> {

}

// @ts-ignore
const SocialShareContainer: ComponentType<ISocialShareContainerProps> = (props: ISocialShareContainerProps) => {
  const {classes} = props;

  return (
    <Fragment>
      <SocialShare customClasses = {{
        icon: classes.iconColor,
      }}>
        <Facebook />
      </SocialShare>
      <SocialShare customClasses = {{
        icon: classes.iconColor,
      }}>
        <Twitter />
      </SocialShare>
      <SocialShare customClasses = {{
        icon: classes.iconColor,
      }}>
        <Google />
      </SocialShare>
    </Fragment>
  );
};

export default compose<ISocialShareContainerProps, any>(
  withStyles(styles),
)(SocialShareContainer);

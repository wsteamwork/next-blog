import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import React, {ComponentType, Fragment} from 'react';
import {compose} from 'recompose';
import SocialShare from '@/components/Button/SocialShare';
import {Facebook, Twitter, Instagram,Youtube} from 'mdi-material-ui';

const styles: any = (theme: Required<ThemeCustom>) => createStyles({
  iconFB: {
    color: '#3B579D',
  },
  iconTW: {
    color: '#56D6FE',
  },
  iconIS: {
    color: '#D02E94',
  },
  iconYT: {
    color: '#ED1B24',
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
        icon: classes.iconFB,
      }}>
        <Facebook />
      </SocialShare>
      <SocialShare customClasses = {{
        icon: classes.iconTW,
      }}>
        <Twitter />
      </SocialShare>
      <SocialShare customClasses = {{
        icon: classes.iconIS,
      }}>
        <Instagram />
      </SocialShare>
      <SocialShare customClasses = {{
        icon: classes.iconYT,
      }}>
        <Youtube />
      </SocialShare>
    </Fragment>
  );
};

export default compose<ISocialShareContainerProps, any>(
  withStyles(styles),
)(SocialShareContainer);
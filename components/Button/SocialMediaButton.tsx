import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import React, {ComponentType, Fragment, useMemo} from 'react';
import {compose} from 'recompose';
import Paper from '@material-ui/core/Paper/Paper';
import Typography from '@material-ui/core/Typography/Typography';
import classNames from 'classnames';
import {Facebook, Instagram, Youtube, Twitter} from 'mdi-material-ui';
import Link from 'next/link';

const styles: any = (theme: ThemeCustom) => createStyles({
  root: {
    width: '100%',
    padding: 16,
    borderRadius: 12,
    transition: theme!.transitions!.create!(['all'], {
      duration: 200,
      easing: 'ease-in-out',
    }),
    cursor: 'pointer',
  },
  textMargin: {
    marginLeft: 8,
    transform: 'translate3d(0,1px,0)',
  },
  facebookColor: {
    background: '#3b5999',
    '&:hover': {
      background: '#34447d',
    },
  },
  instagramColor: {
    backgroundSize: 'auto 200%',
    background: 'linear-gradient(-45deg, #fcb045, #fd1d1d, #833ab4)',
    backgroundPosition: '0 70%',
    '&:hover': {
      backgroundPosition: '0 0%',
    },
  },
  youtubeColor: {
    background: '#cc181e',
    '&:hover': {
      background: '#be1619',
    },
  },
  twitterColor: {
    background: '#00aced',
    '&:hover': {
      background: '#0084b4',
    },
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.175rem',
  },
});

interface IProps extends Partial<WithStyles<typeof styles>> {
  socialName: 'facebook' | 'instagram' | 'youtube' | 'twitter'
  text: string
}

// @ts-ignore
const SocialMediaButton: ComponentType<IProps> = (props: IProps) => {
  const {classes, socialName, text} = props;

  const icon = useMemo(() => {
    switch (socialName) {
      case 'facebook':
        return <Facebook />;
      case 'instagram':
        return <Instagram />;
      case 'youtube':
        return <Youtube />;
      case 'twitter':
        return <Twitter />;
    }
  }, []);

  return (
    <Fragment>
      <Paper className = {classNames(
        classes.root,
        classes[`${socialName}Color`],
      )}>
        <Typography
          variant = 'subtitle2'
          component = 'span'
          color = 'primary'
          className = {classes.content}
        >
          {icon}
          <span className = {classes.textMargin}>{text}</span>
        </Typography>
      </Paper>
    </Fragment>
  );
};

export default compose<IProps, any>(
  withStyles(styles),
)(SocialMediaButton);

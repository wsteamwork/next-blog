import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import React, {ComponentType, Fragment} from 'react';
import {compose} from 'recompose';
import Paper from '@material-ui/core/Paper/Paper';
import Typography from '@material-ui/core/Typography/Typography';
import classNames from 'classnames';
import {Facebook, Instagram, Youtube} from 'mdi-material-ui';

const styles: any = (theme: ThemeCustom) => createStyles({
  root: {
    width: '100%',
    padding: 16,
    borderRadius: 12,
    transition: theme!.transitions!.create!(['color', 'background-color'], {
      duration: 200,
      easing: 'ease-in-out',
    }),
    cursor: 'pointer'
  },
  icon: {
    marginRight: 8,
  },
  facebookColor: {
    backgroundColor: '#3b5999',
    '&:hover': {
      backgroundColor: '#34447d'
    }
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.175rem',
  },
});

interface IProps extends Partial<WithStyles<typeof styles>> {

}

// @ts-ignore
const SocialMediaButton: ComponentType<IProps> = (props: IProps) => {
  const {classes} = props;

  return (
    <Fragment>
      <Paper className = {classNames(
        classes.root,
        classes.facebookColor,
      )}>
        <Typography variant = 'subtitle2' color = 'primary' className = {classes.content}>
          <Facebook className = {classes.icon} />
          Like
        </Typography>
      </Paper>
    </Fragment>
  );
};

export default compose<IProps, any>(
  withStyles(styles),
)(SocialMediaButton);

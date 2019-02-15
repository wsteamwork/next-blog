import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import React, {ComponentType, Fragment} from 'react';
import {compose} from 'recompose';

const styles: any = (theme: ThemeCustom) => createStyles({
  buttonSocial: {
    width: 45,
    height: 45,
    border: '1px solid #d8d5d5',
    transition: '.3s all ease-in-out',
    borderRadius: 8,
    margin: '0 .6em .5em 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      boxShadow: '0px 3px 6px 1px rgba(0,0,0,.09)',
    },
  }
});

interface IProps extends Partial<WithStyles<typeof styles>> {

}

// @ts-ignore
const SocialShare: ComponentType<IProps> = (props) => {
  const {classes} = props;

  return (
    <Fragment>
      <div className = {classes.buttonSocial}>
        {props.children}
      </div>
    </Fragment>
  );
};

export default compose<IProps, any>(
  withStyles(styles),
)(SocialShare);

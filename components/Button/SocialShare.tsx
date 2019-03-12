import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles, ClassNameMap} from '@material-ui/core/styles/withStyles';
import React, {ComponentType, Fragment} from 'react';
import {compose} from 'recompose';
import classNames from 'classnames';
import {grey} from '@material-ui/core/colors';
import {CustomClasses} from '@/types/Interfaces/CustomInterface';

const styles: any = (theme: Required<ThemeCustom>) => createStyles({
  buttonSocial: {
    width: 45,
    height: 45,
    cursor: 'pointer',
    boxShadow: '0px 3px 6px 1px rgba(0,0,0,.04)',
    transition: theme.transitions.create(['all'], {
      easing: 'ease-in-out',
      duration: 300,
    }),
    borderRadius: 8,
    margin: '0 .6em .5em 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      boxShadow: '0px 3px 6px 1px rgba(0,0,0,0.2)',
    },
  },
});

type SocialShareClasses = 'icon'

interface IProps extends Partial<WithStyles<typeof styles>>, CustomClasses<SocialShareClasses> {
  href?: string
}

// @ts-ignore
const SocialShare: ComponentType<IProps> = (props) => {
  const {classes, customClasses,href} = props;

  const openUrl = () => {
    if (href) {
      const win = window.open(href, '_blank');
      win.focus();
    }
  };

  return (
    <Fragment>
      <div className = {classes.buttonSocial} onClick={openUrl}>
        <span className = {classNames(
          customClasses.icon,
        )}>
        {props.children}
        </span>
      </div>
    </Fragment>
  );
};

SocialShare.defaultProps = {
  customClasses: {},
  href:'',
};

export default compose<IProps, any>(
  withStyles(styles),
)(SocialShare);

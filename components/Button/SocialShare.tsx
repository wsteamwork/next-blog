import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles, ClassNameMap} from '@material-ui/core/styles/withStyles';
import React, {ComponentType, Fragment} from 'react';
import {compose} from 'recompose';
import classNames from 'classnames';
import {grey} from '@material-ui/core/colors';

const styles: any = (theme: Required<ThemeCustom>) => createStyles({
  buttonSocial: {
    width: 45,
    height: 45,
    cursor: 'pointer',
    border: `1px solid ${grey[300]}`,
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
      boxShadow: '0px 3px 6px 1px rgba(0,0,0,.09)',
    },
  },
});

type SocialShareClasses = 'icon'

interface IProps extends Partial<WithStyles<typeof styles>> {
  customClasses?: Partial<ClassNameMap<SocialShareClasses>>
}

// @ts-ignore
const SocialShare: ComponentType<IProps> = (props) => {
  const {classes, customClasses} = props;

  return (
    <Fragment>
      <div className = {classes.buttonSocial}>
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
};

export default compose<IProps, any>(
  withStyles(styles),
)(SocialShare);

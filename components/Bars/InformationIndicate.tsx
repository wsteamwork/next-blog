import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles, ClassNameMap} from '@material-ui/core/styles/withStyles';
import React, {ComponentType, Fragment} from 'react';
import {compose} from 'recompose';
import moment, {MomentInput} from 'moment';
import Typography from '@material-ui/core/Typography/Typography';
import classNames from 'classnames';
import Hidden from '@material-ui/core/Hidden/Hidden';
import AccessTimeOutlined from '@material-ui/icons/AccessTimeRounded';
import AccountCircleRounded from '@material-ui/icons/AccountCircleRounded';
import {CustomClasses} from '@/types/Interfaces/CustomInterface';

const styles: any = (theme: ThemeCustom) => createStyles({
  root: {
    color: 'rgba(0,0,0,0.46)',
  },
  textElement: {
    paddingLeft: 8,
  },
  padR: {
    paddingRight: 12,
    alignItems: 'center',
  },
  icon: {
    verticalAlign: 'middle',
    fontSize: '1rem',
  },
  spanIcon: {
    paddingRight: 4,
  },
  fontAuthor: {
    fontSize: '0.6875rem',
  },
});

type InformationIndicateClasses = 'root'

interface IProps extends Partial<WithStyles<typeof styles>>, CustomClasses<InformationIndicateClasses> {
  userName?: string
  time?: MomentInput
}

// @ts-ignore
const InformationIndicate: ComponentType<IProps> = (props: IProps) => {
  const {classes, userName, customClasses, time} = props;

  return (
    <Fragment>
      <Typography
        component = 'div'
        variant = 'subtitle2'
        classes = {{
          root: classNames(
            classes.root, customClasses.root,
          ),
        }}>
        <Hidden xsUp = {!userName}>
        <span className = {classNames(
          classes.padR,
        )}>
          <span className = {classes.spanIcon}>
            <AccountCircleRounded className = {classes.icon} />
          </span>
          <span className = {classes.fontAuthor}>{userName}</span>
        </span>
        </Hidden>
        <Hidden xsUp = {!time}>
          &#8739;
          <span className = {classNames({
            [classes.textElement]: true,
            [classes.padR]: true,
          })}>

            <span className = {classes.spanIcon}>
              <AccessTimeOutlined className = {classes.icon} />
            </span>
            <span className = {classes.fontAuthor}>{moment(time).calendar()}</span>

          </span>
        </Hidden>
      </Typography>
    </Fragment>
  );
};

InformationIndicate.defaultProps = {
  userName: '',
  customClasses: {},
};

export default compose<IProps, any>(
  withStyles(styles),
)(InformationIndicate);

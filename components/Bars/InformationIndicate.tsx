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
import PersonRounded from '@material-ui/icons/PersonRounded';

const styles: any = (theme: ThemeCustom) => createStyles({
  root: {
    color: 'rgba(0,0,0,0.46)',
  },
  textElement: {
    borderLeft: '1px solid #fff',
    paddingLeft: 8,
    borderLeftStyle: 'inset',
  },
  padR: {
    paddingRight: 12,
    alignItems: 'center',
  },
  icon: {
    verticalAlign: 'middle',
    fontSize:'1rem',
  },
  spanIcon: {
    paddingRight: 4,
  },
  fontAuthor:{
    fontSize:'0.6875rem',
  }
});

type InformationIndicateClasses = 'root'

interface IProps extends Partial<WithStyles<typeof styles>> {
  userName?: string
  time?: MomentInput
  customClasses?: Partial<ClassNameMap<InformationIndicateClasses>>
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
            <PersonRounded className = {classes.icon} />
          </span>
          <span className={classes.fontAuthor}>{userName}</span>
        </span>
        </Hidden>
        <Hidden xsUp = {!time}>
          <span className = {classNames({
            [classes.textElement]: true,
            [classes.padR]: true,
          })}>
            <span className = {classes.spanIcon}>
              <AccessTimeOutlined className = {classes.icon} />
            </span>
            <span className={classes.fontAuthor}>{moment(time).calendar()}</span>

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

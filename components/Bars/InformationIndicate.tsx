import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles, ClassNameMap} from '@material-ui/core/styles/withStyles';
import React, {ComponentType, Fragment} from 'react';
import {compose} from 'recompose';
import moment, {MomentInput} from 'moment';
import Typography from '@material-ui/core/Typography/Typography';
import classNames from 'classnames';
import Hidden from '@material-ui/core/Hidden/Hidden';

const styles: any = (theme: ThemeCustom) => createStyles({
  root: {
    color: 'rgba(0,0,0,0.46)',
  },
  textElement: {
    borderLeft: '1px solid',
    paddingLeft: 8,
    borderLeftStyle: 'inset',
  },
  padR: {
    paddingRight: 8,
  },
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
      <Typography variant = 'subtitle2' classes = {{
        root: classNames(
          classes.root, customClasses.root,
        ),
      }}>
        <Hidden xsUp = {!userName}>
        <span className = {classNames(
          classes.padR,
        )}>
          {userName}
        </span>
        </Hidden>
        <Hidden xsUp = {!time}>
          <span className = {classNames({
            [classes.textElement]: true,
            [classes.padR]: true,
          })}>
          {moment(time).calendar()}
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

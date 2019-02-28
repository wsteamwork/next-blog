import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import React, {ComponentType, Fragment} from 'react';
import {compose} from 'recompose';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography/Typography';
import Gray from '@material-ui/core/colors/grey';
import Blue from '@material-ui/core/colors/blue';
import Hidden from '@material-ui/core/Hidden/Hidden';
import {ClassNameMap} from '@material-ui/styles/withStyles';
import {CustomClasses} from '@/types/Interfaces/CustomInterface';

const styles: any = (theme: ThemeCustom) => createStyles({
  chipTitle: {
    pointerEvents: 'auto',
    cursor: 'pointer',
    fontStyle: 'italic',
    display: 'inline-block',
    borderRadius: 24,
    backgroundColor: Gray[900],
    padding: '6px 12px 4px 9px',
    '&:hover': {
      textShadow: '1px 1px 6px rgba(0,0,0,0.66)',
      backgroundColor: Blue[900],
    },
  },
  transitionDuration: {
    transition: theme!.transitions!.create!(['color', 'background-color'], {
      duration: 200,
      easing: 'ease-in-out',
    }),
  },
});

type ChipCardClasses = 'root'

interface IProps extends Partial<WithStyles<typeof styles>>, CustomClasses<ChipCardClasses> {
  text: string
}

// @ts-ignore
const ChipCard: ComponentType<IProps> = (props: IProps) => {
  const {classes, text, customClasses} = props;

  return (
    <Fragment>
      <Hidden xsUp = {!text}>
        <div className = {classNames(
          classes.chipTitle,
          classes.transitionDuration,
          customClasses.root,
        )}>
          <span>
            <Typography
              variant = 'subtitle2'
              color = 'primary'
            >
              {text}
          </Typography>
          </span>
        </div>
      </Hidden>
    </Fragment>
  );
};

ChipCard.defaultProps = {
  text: 'chưa có nội dung',
  customClasses: {},
};

export default compose<IProps, any>(
  withStyles(styles),
)(ChipCard);

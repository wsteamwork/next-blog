import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import React, {ComponentType, Fragment} from 'react';
import {compose} from 'recompose';
import {TextField} from '@material-ui/core';

const styles: any = (theme: ThemeCustom) => createStyles({
  textField:{
    backgroundColor:'#fff',
    borderRadius: 8
  },
  textForm:{
    border:'none'
  },
});

interface IProps extends Partial<WithStyles<typeof styles>> {

}

// @ts-ignore
const InputNormal: ComponentType<IProps> = (props: IProps) => {
  const {classes} = props;

  return (
    <Fragment>
      <TextField
        className={classes.textField}
        variant='outlined'
        type='email'
        placeholder="Email"
        fullWidth
        // onChange={handleChange}
        InputProps={{
          classes: {
            notchedOutline: classes.textForm,
          },
        }}
      />
    </Fragment>
  );
};

export default compose<IProps, any>(
  withStyles(styles),
)(InputNormal);

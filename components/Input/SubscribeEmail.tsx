import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import React, {ComponentType, Fragment} from 'react';
import {compose} from 'recompose';
import {TextField} from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import SendRounded from '@material-ui/icons/SendRounded';

const styles: any = (theme: ThemeCustom) => createStyles({
  textField:{
    backgroundColor:'#fff',
  },
  textForm:{
    border:'none',
  }
});

interface IProps extends Partial<WithStyles<typeof styles>> {

}

// @ts-ignore
const SubscribeEmail: ComponentType<IProps> = (props: IProps) => {
  const {classes} = props;

  return (
    <Fragment>
      <TextField
        id="outlined-adornment-password"
        className={classes.textField}
        variant="outlined"
        type='email'
        label="Password"
        // onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="send">
                <SendRounded/>
              </IconButton>
            </InputAdornment>
          ),
        }}

      />
    </Fragment>
  );
};

export default compose<IProps, any>(
  withStyles(styles),
)(SubscribeEmail);

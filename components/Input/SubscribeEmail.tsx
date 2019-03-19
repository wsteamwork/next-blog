import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import React, {ComponentType, Fragment} from 'react';
import {compose} from 'recompose';
import {TextField} from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import SendRounded from '@material-ui/icons/SendRounded';
import Typography from '@material-ui/core/Typography';
import Grey from '@material-ui/core/colors/grey';

const styles: any = (theme: ThemeCustom) => createStyles({
  textField: {
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  textForm: {
    borderColor: `${Grey[300]} !important`,
    borderRadius: 8,
  },
  note: {
    padding: 10,
    color: '#707070',
    fontSize: '0.775rem',
    fontFamily: '"Mali",cursive',
  },
  input: {
    paddingLeft: 24,
    fontFamily: '"Mali",cursive',
  },
});

interface IProps extends Partial<WithStyles<typeof styles>> {

}

// @ts-ignore
const SubscribeEmail: ComponentType<IProps> = (props: IProps) => {
  const {classes} = props;

  return (
    <Fragment>
      <TextField
        className = {classes.textField}
        variant = 'outlined'
        type = 'email'
        placeholder = 'Email'
        fullWidth
        InputProps = {{
          classes: {
            notchedOutline: classes.textForm,
            input: classes.input,
          },
          endAdornment: (
            <InputAdornment position = 'end'>
              <IconButton aria-label = 'send'>
                <img src = '/static/mail.svg' alt = 'Register email' />
              </IconButton>
            </InputAdornment>
          ),
        }}

      />
      <Typography variant = 'subtitle2' className = {classes.note}>
        * Bạn sẽ nhận được email về tin tức và những bài viết mới từ chúng tôi.
      </Typography>
    </Fragment>
  );
};

export default compose<IProps, any>(
  withStyles(styles),
)(SubscribeEmail);

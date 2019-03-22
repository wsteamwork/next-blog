import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import React, { ComponentType, Fragment, MouseEvent, useState} from 'react';
import {compose} from 'recompose';
import {TextField} from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Grey from '@material-ui/core/colors/grey';
import {axios} from '@/store/utils/axiosBase';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

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
    padding: '13.5px 12px',
    fontFamily: '"Mali",cursive',
  },
});

interface IProps extends Partial<WithStyles<typeof styles>> {
  note: boolean
}

// @ts-ignore
const SubscribeEmail: ComponentType<IProps> = (props: IProps) => {
  const {classes} = props;
  const [email, setEmail] = useState('');
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [statusText, setStatusText] = useState('');
  // const {state, dispatch} = useContext<IBookingFormContext>(BookingFormContext);
  const setEmailValue = (event) => {
    setEmail(event.target.value);
  };

  const handleClose = () => {
    setOpenAlert(false);
    setStatusText('');
  };

  const subscribe = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    // console.log(email)
    axios.post('subscribes', {
      email: email
    }).then(res => {
      setStatusText('Đăng ký nhận tin thành công!');
      setOpenAlert(true);
    }).catch(err => {
      setStatusText('Email không hợp lệ, vui lòng kiểm tra lại');
      setOpenAlert(true);
    })
  };

  return (
    <Fragment>
      <TextField
        className={classes.textField}
        variant="outlined"
        type="email"
        placeholder="Email"
        fullWidth
        value={email}
        onChange={setEmailValue}
        InputProps={{
          classes: {
            notchedOutline: classes.textForm,
            input: classes.input
          },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="send" onClick={subscribe}>
                <img src="/static/mail.svg" alt="Register email" />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
      {props.note ? (
        <Typography variant="subtitle2" className={classes.note}>
          * Bạn sẽ nhận được email về tin tức và những bài viết mới từ chúng
          tôi.
        </Typography>
      ) : (
        ''
      )}

      <Dialog
        open={openAlert}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {statusText}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color={'secondary'}>
            Đóng
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default compose<IProps, any>(
  withStyles(styles),
)(SubscribeEmail);

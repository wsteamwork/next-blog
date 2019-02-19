import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import React, {ComponentType, Fragment} from 'react';
import {compose} from 'recompose';
import {Typography, Grid, TextField, Fab} from '@material-ui/core';

const styles: any = (theme: ThemeCustom) => createStyles({
  boxComment:{
    marginTop: 50,
    padding: 30,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  textField:{
    backgroundColor:'#fff',
    borderRadius: 8
  },
  textForm:{
    border:'none'
  },
  title:{
    marginBottom:20,
    fontWeight:600,
  },
  fab:{
    backgroundColor: '#505050',
    color: '#fff',
    lineHeight: '44px',
    padding: '0 30px',
    border: 'none',
    fontWeight: 700,
    fontSize: 11,
    transition: '.3s all ease-in-out',
    boxShadow:'none',
    '&:hover':{
      backgroundColor: '#444',
      boxShadow: '3px 3px 4px 0px rgba(0,0,0,0.2)',
    }
  },
  note:{
    textAlign: 'right',
    display:' inline-block',
    float: 'right',
    color: '#8d8d8d',
    fontSize: 13,
  }
});

interface IProps extends Partial<WithStyles<typeof styles>> {

}

// @ts-ignore
const FormComment: ComponentType<IProps> = (props: IProps) => {
  const {classes} = props;

  return (
    <Fragment>
      <div className = {classes.boxComment}>
        <Typography variant='h5' className={classes.title} >
          Leave a Reply
        </Typography>
        <Grid container spacing={16}>
          <Grid item xs={6}>
            <TextField className={classes.textField} variant='outlined' placeholder="Họ Tên *" fullWidth required
              // onChange={handleChange}
              InputProps={{
                classes: {
                  notchedOutline: classes.textForm,
                },
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              className={classes.textField} variant='outlined' type='email' placeholder="Email *" fullWidth required
              // onChange={handleChange}
              InputProps={{
                classes: {
                  notchedOutline: classes.textForm,
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField className={classes.textField} variant='outlined' placeholder="Bình luận của bạn... *" fullWidth
                       multiline rows={5} rowsMax={7} required
              // onChange={handleChange}
              InputProps={{
                classes: {
                  notchedOutline: classes.textForm,
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Fab variant="extended" aria-label="Post" className={classes.fab}>
              Post Comment
            </Fab>
            <Typography variant='subtitle2' className={classes.note}>
              * Là trường bắt buộc
            </Typography>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};

export default compose<IProps, any>(
  withStyles(styles),
)(FormComment);

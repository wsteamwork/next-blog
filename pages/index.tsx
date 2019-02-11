import React, {Fragment} from 'react';
import {createStyles, WithStyles, withStyles} from '@material-ui/core/styles';
import {NextComponentType} from 'next';
import {compose} from 'recompose';
import NavTop from '@/components/ToolBar/NavTop';

const styles = createStyles({});

interface IProps extends WithStyles<typeof styles> {

}

const Index: NextComponentType<IProps> = (props: IProps) => {
  const {classes} = props;

  return (
    <Fragment>
      <NavTop />
    </Fragment>
  );
};

export default compose<IProps, any>(
  withStyles(styles),
)(Index);

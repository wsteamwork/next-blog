import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import React, {ComponentType, Fragment} from 'react';
import {compose} from 'recompose';
import classNames from 'classnames';
import ReactPaginate from 'react-paginate';
import {red, grey} from '@material-ui/core/colors';
import {IPaginateBar} from '@/types/Interfaces/Components/PaginateBar';

const styles: any = (theme: Required<ThemeCustom>) => createStyles({
  ulPaginateContainer: {
    listStyleType: 'none',
    overflow: 'hidden',
    marginBlockStart: 0,
    paddingInlineStart: 0,
  },
  f: {
    transition: theme.transitions.create(['background', 'color', 'display'], {
      duration: 200,
      easing: 'ease-in-out',
    }),
    willChange: 'background, color',
    cursor: 'pointer',
    float: 'left',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    margin: '0px 4px 0 4px',
    fontWeight: 500,
    fontFamily: 'Open Sans, sans-serif',
    '&:hover': {
      color: red[600],
    },
  },
  nonActivePage: {},
  prevAndNext: {
    width: 'auto',
    borderRadius: 24,
    padding: 12,
    border: `1px solid ${grey[300]}`,
  },
  disablePage: {
    display: 'none',
  },
  activePage: {
    color: grey[100],
    background: red[600],
    '&:hover': {
      color: grey[100],
    },
  },
  linkPage: {
    padding: 20,
    margin: -20,
    outline: 'none',
  },
});

interface IPaginateBarProps extends Partial<WithStyles<typeof styles>>, IPaginateBar {

}

// @ts-ignore
const PaginateBar: ComponentType<IPaginateBarProps> = (props) => {
  const {
          classes,
          nextLabel,
          prevLabel,
          customClasses,
        } = props;

  return (
    <Fragment>
      <ReactPaginate
        nextLabel = {nextLabel}
        previousLabel = {prevLabel}
        pageCount = {100}
        pageRangeDisplayed = {5}
        marginPagesDisplayed = {2}
        forcePage = {9}
        containerClassName = {classes.ulPaginateContainer}
        pageLinkClassName = {classNames(
          classes.linkPage,
        )}
        nextLinkClassName = {classNames(
          classes.linkPage,
        )}
        previousLinkClassName = {classNames(
          classes.linkPage,
        )}
        pageClassName = {classNames(
          classes.f,
        )}
        previousClassName = {classNames(
          classes.f, classes.prevAndNext,
        )}
        nextClassName = {classNames(
          classes.f, classes.prevAndNext,
        )}
        breakClassName = {classNames(
          classes.f,
        )}
        disabledClassName = {classes.disablePage}
        activeClassName = {classNames(
          classes.f, classes.activePage,
        )}
      />
    </Fragment>
  );
};

PaginateBar.defaultProps = {
  prevLabel: 'Trang trước',
  nextLabel: 'Trang kế',
};

export default compose<IPaginateBarProps, any>(
  withStyles(styles),
)(PaginateBar);

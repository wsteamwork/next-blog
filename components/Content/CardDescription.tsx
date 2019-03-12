import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import React, {ComponentType, Fragment, ReactNode} from 'react';
import {compose} from 'recompose';
import _ from 'lodash';
import Typography from '@material-ui/core/Typography/Typography';
import {grey} from '@material-ui/core/colors';
import {ClassNameMap} from '@material-ui/styles/withStyles';
import classNames from 'classnames';
import {CustomClasses} from '@/types/Interfaces/CustomInterface';

const styles: any = (theme: Required<ThemeCustom>) => createStyles({
  description: {
    color: grey[700],
  },
});

type CardDescriptionClasses = 'root'

interface ICardDescriptionProps extends Partial<WithStyles<typeof styles>>, CustomClasses<CardDescriptionClasses> {
  text: string
  length?: number
}

// @ts-ignore
const CardDescription: ComponentType<ICardDescriptionProps> = (props) => {
  const {classes, text, length, customClasses} = props;

  return (
    <Fragment>
      <Typography variant = 'body2' classes = {{
        root: classNames(
          classes.description,
          customClasses.root,
        ),
      }}>
        {_.truncate(text, {
          length: length,
        })}
      </Typography>
    </Fragment>
  );
};

CardDescription.defaultProps = {
  length: 200,
  customClasses: {},
  text: 'Divided, sweet pudding is best rinsed with melted hollandaise sauce. Roast five white breads, tofu, and garlic in a large bucket over medium heat, roast for four minutes and blend with some pork butt. Sausages can be marinateed with warm quinoa, also try mash uping the tart with beer. To the springy rice add leek, chickpeas, mint sauce and cold onion?. Mash caviar roughly, then mix with white wine and serve carefully iced in bottle.',
};

export default compose<ICardDescriptionProps, any>(
  withStyles(styles),
)(CardDescription);

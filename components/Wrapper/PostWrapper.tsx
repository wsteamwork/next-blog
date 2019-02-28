import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import React, {ComponentType, Fragment} from 'react';
import {compose} from 'recompose';
import Link from 'next/link';
import {BlogIndexRes} from '@/types/Requests/Blog/BlogRespones';

const styles: any = (theme: Required<ThemeCustom>) => createStyles({});

interface IPostWrapperProps extends Partial<WithStyles<typeof styles>> {
  post: BlogIndexRes
}

// @ts-ignore
const PostWrapper: ComponentType<IPostWrapperProps> = (props) => {
  const {classes, post, children} = props;

  return (
    <Link prefetch as = {`/${post.category_id}/${post.slug}-${post.id}`} href = {`/post?id=${post.id}`}>
      <div>
        {children}
      </div>
    </Link>
  );
};

export default compose<IPostWrapperProps, any>(
  withStyles(styles),
)(PostWrapper);

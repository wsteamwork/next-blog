import React from 'react';
import {compose} from 'recompose';
import {withRouter, WithRouterProps} from 'next/router';
import {NextComponentType} from 'next';

interface IPostPage extends WithRouterProps {

}

const PostPage: NextComponentType<IPostPage> = (props) => {
  return (
    <div>
      <h1>Post</h1>
    </div>
  );
};

export default compose(
  withRouter,
)(PostPage);

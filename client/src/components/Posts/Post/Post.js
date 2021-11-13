/* eslint-disable func-names */
import React from 'react';
import useStyles from './styles';

const Post = function () {
  const classes = useStyles();
  return (
    <h1 className={classes.Post}>POST</h1>
  );
};

export default Post;

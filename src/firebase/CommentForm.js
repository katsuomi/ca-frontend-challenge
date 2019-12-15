import React, { useState,useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import moment from 'moment';
import { db } from './firebase';

const CommentForm = (props) => {
  const [comment, setComment] = useState('');
  const commentsRef = db.ref(`/comments/${props.id}/${props.index}`);
  const now = moment().year()+'-'+moment().month()+'-'+moment().date()+'/'+moment().hour()+':'+moment().minutes()
  const postComment = e => {
    e.preventDefault();
    const data = {
      id: props.id,
      index: props.index,
      content: comment,
      createdAt: now
    }
    commentsRef.push(data);
    setComment('');
  };
  const unCreatable = comment === '';

  return(
    <>
    <form className='commentStyle'>
      <TextField 
        id='outlined-basic' 
        label='コメントを入力' 
        variant='filled' 
        className='commentStyle2' 
        value={comment} 
        onChange={e => setComment(e.target.value)}
      />
      <Button className='' color='secondary' disabled={unCreatable} onClick={postComment}>
        <i className='material-icons commentStyle3'>
          comment
        </i>
      </Button>    
    </form>
    </>
  );
}

export default CommentForm;

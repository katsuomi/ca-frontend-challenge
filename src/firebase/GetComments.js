import React, { Component } from 'react';
import { db } from './firebase';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';


class GetComments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      isOpen: false
    }
  }
  componentDidMount(){
    const commentsRef = db.ref(`/comments/${this.props.id}/${this.props.index}`);
    commentsRef.on('child_added', (snapshot) => {
      const m = snapshot.val()
      let msgs = this.state.comments
      msgs.push({
        'id' : m.id,
        'index' : m.index,
        'content' : m.content,
        'createdAt' : m.createdAt,
      })

      this.setState({
        comments : msgs
      });
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.index !== prevProps.index) {
      this.setState({
        comments : []
      });
      const commentsRef = db.ref(`/comments/${this.props.id}/${this.props.index}`);
      const msgs = [];
      commentsRef.on('child_added', (snapshot) => {
        const m = snapshot.val();
        msgs.push({
          'id' : m.id,
          'index' : m.index,
          'content' : m.content,
          'createdAt' : m.createdAt,
        })
      })
      this.setState({
        comments : msgs
      });
    }
  }

  render(){
    const handleClickOpen = () => {
      this.state.isOpen ?  this.setState({isOpen: false}) : this.setState({isOpen: true})
    };
    const handleClose = () => {
      this.setState({isOpen: false})
    };
    const comments = this.state.comments.slice(0).reverse()
    return (
      <>
        <div className='displayCommentStyle'>
          <Button variant='contained' color='primary' className='displayCommentStyle2' onClick={handleClickOpen}>
            コメントを表示
          </Button>
        </div>
        <Dialog onClose={handleClose} aria-labelledby='customized-dialog-title' open={this.state.isOpen} className='DoalogStyle'>
          <DialogContent dividers>
            {comments.map((comment,i) => (
              <Typography gutterBottom key={i}>
                <i className='material-icons fontSize40px'>
                  account_circle
                </i>
                <span className='fontSize20px commnetContentStyle'>{comment.content}</span>
                <p className='commnetContentStyle2'>{comment.createdAt}</p>
                <hr/>
              </Typography>
            ))}
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose} color='primary'>
              閉じる
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

export default GetComments;

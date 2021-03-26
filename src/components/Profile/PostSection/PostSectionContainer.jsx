import { addComment } from './../../../redux/profileReducer';
import { connect } from 'react-redux';
import PostSection from './PostSection';

const mapStateToProps = (state) => {
  return {
    commentData: state.profilePage.commentData,
    currentCommentInput: state.profilePage.currentCommentInput
  }
}

export default connect(mapStateToProps, { addComment })(PostSection);
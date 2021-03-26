import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import FormControl from '../../common/FormControls/FormControls';
import Comment from './Comment/Comment';
import styles from "./PostSection.module.css"

const PostSection = (props) => {
  const comments = props.commentData
    .map(c => {
      return <Comment avatar={c.avatar} text={c.text} nickname={c.nickname} likeCount={c.likeCount} />
    });

  const onSendComment = (values) => {
    props.addComment(values.comment);
  }

  return (
    <div className={styles.wrapper}>
      <CommentForm onSubmit={onSendComment} />
      {comments}
      
    </div>
  );
}

const maxLengthValidator = maxLengthCreator(15);

const CommentForm = reduxForm({ form: "profileCommentForm" })(props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field placeholder="Оставьте Ваш комментарий:" name="comment" component={FormControl}
        validate={[required, maxLengthValidator]} elementType="textarea" class="post-section__comment-form"/>
      <button>Отправить</button>
    </form>
  )
});

export default PostSection;
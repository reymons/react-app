import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { addMessage } from '../../redux/messagesReducer';
import Messages from './Messages';

const mapStateToProps = (state) => {
  return {
    contactData: state.messagesPage.contactData,
    dialogData: state.messagesPage.dialogData,
  }
}

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, { addMessage })
)(Messages)
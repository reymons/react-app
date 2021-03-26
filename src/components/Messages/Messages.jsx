import "./Messages.scss";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { NavLink } from "react-router-dom";
import FormControl from "../common/FormControls/FormControls";

const Messages = (props) => {
  const contactComponents = props.contactData
    .map(с => <Contact contactName={с.name} id={с.id} />);

  const dialogComponents = props.dialogData
    .map(d => <Dialog avatar={d.avatar} message={d.message} />);

  const onSendMessageClick = (values) => {
      props.addMessage(values.message);
  }

  return (
    <div class="messages-page">
      <div class="messages-page__contacts">
        {contactComponents}
      </div>
      <div class="messages-page__dialogs">
        {dialogComponents}
        <div class="messages-page__message-form">
          <div class="messages-page__message-input"><MessageInput onSubmit={onSendMessageClick}/></div>
        </div>
      </div>
    </div>
  );
}

const maxLengthValidator = maxLengthCreator(15);

let MessageInput = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field cols="100" rows="10" placeholder="Введите Ваше сообщениие" name="message" component={FormControl}
        validate={[required, maxLengthValidator]} class="messages-page__textarea" elementType="textarea" />
      <button>Отправить</button>
    </form>
  );
}

MessageInput = reduxForm({
  form: "messageInputForm",
})(MessageInput);

const Dialog = (props) => {
  return (
    <div class="messages-page__dialog dialog">
      <img src={props.avatar} alt="" class="dialog__avatar"/>
      <p class="dialog__message">{props.message}</p>
    </div>
  );
}

const Contact = (props) => {
  return (
    <div class="contacts__contact">
      <NavLink to={`/messages/${props.id}`} activeClassName="contacts__contact_active">{props.contactName}</NavLink>
      <button type="button">Удалить контакт</button>
    </div>
  );
}

export default Messages;
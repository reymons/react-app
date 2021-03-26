import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form"
import { login } from "../../redux/authReducer";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import FormControl from "../common/FormControls/FormControls";
import React from "react";
import { Redirect } from "react-router";

class LoginContainer extends React.Component {
  onSubmit = (formData) => {
    this.props.login(formData.email, formData.password, formData.rememberMe);
  }

  render() {
    if (this.props.isAuth) {
      return <Redirect to={`/profile/${this.props.userId}`} />
    }
    return <Login onSubmit={this.onSubmit} />
  }
}

const Login = (props) => {
  return (
    <div>
      <h1>Вход</h1>
      <LoginForm onSubmit={props.onSubmit} />
    </div>
  )
}

const maxLengthValidator = maxLengthCreator(50);

const LoginForm = reduxForm({
  form: "loginForm"
})(props => {
  return (
    <form onSubmit={props.handleSubmit}>
      { props.error && <p>{props.error}</p> }
      <Field type="text" placeholder="Введите почту" name="email" component={FormControl} elementType="input" 
      validate={[required, maxLengthValidator]}/><br />
      <Field type="password" placeholder="Введите пароль" name="password" component={FormControl} elementType="input" 
      validate={[required, maxLengthValidator]}/><br />
      <Field type="checkbox" name="rememberMe" component={FormControl} elementType="input" 
      validate={[maxLengthValidator]}/>Запомнить меня<br />
      <button>Войти</button>
    </form>
  )
});

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    userId: state.auth.userId
  }
}

export default connect(mapStateToProps, { login })(LoginContainer);
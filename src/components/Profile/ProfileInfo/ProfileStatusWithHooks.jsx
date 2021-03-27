import React, { useState } from 'react';

const ProfileStatusWithHooks = (props) => {

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  }

  const onInputChange = (e) => {
    setStatus(e.currentTarget.value);
  }

  return (
    <>
      {
        !editMode
          ? <span onDoubleClick={activateEditMode} ><b>Статус:</b> {props.status}</span>
          : <input type="text" value={status} autoFocus="true" onChange={onInputChange} onBlur={deactivateEditMode} />
      }
    </>
  )
} 

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }
  
  activateEditMode = () => {
    this.setState({
      editMode: true
    });
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  }

  onInputChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      });
    }
  }

  render() {
    return (
      <>
        {
          !this.state.editMode
            ? <span onDoubleClick={this.activateEditMode}><b>Статус:</b> {this.state.status}</span>
            : <input type="text" value={this.state.status} onBlur={this.deactivateEditMode} autoFocus="true" onChange={this.onInputChange}/>
        }
      </>
    )
  }
}

export default ProfileStatusWithHooks;
import store from "./../redux/reduxStore";

const withConnect = (mapStateToProps, mapDispatchToProps) => {
  const propsFromMaps = { ...mapStateToProps(store.getState()), ...mapDispatchToProps(store.dispatch) }

  return (ComponentToConnect) => {
    const ConnectedComponent = (props) => <ComponentToConnect { ...propsFromMaps } { ...props } />
    return ConnectedComponent;
  }
}

export default withConnect;

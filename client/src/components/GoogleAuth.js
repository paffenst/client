import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';


 class GoogleAuth extends React.Component {
    componentDidMount(){
    window.gapi.load('client:auth2', () => {
    window.gapi.client.init({
    //clientID : '1015608791166-aqo06m8llq3nuvb092k08e75g8in79ge.apps.googleusercontent.com', 
    //clientID : '797401886567-9cumct9mrt3v2va409rasa7fa6fq02hh.apps.googleusercontent.com',
         clientId : '468032584914-e26gbvoct28j25tjufk3h5jsqm0o7lk6.apps.googleusercontent.com',
         scope: 'email',
         plugin_name: 'Streamy',
         }).then(()=> {
            this.auth = window.gapi.auth2.getAuthInstance();
          //  this.setState({ isSignedIn: this.auth.isSignedIn.get()})
            this.onAuthChange(this.auth.isSignedIn.get());
            this.auth.isSignedIn.listen(this.onAuthChange);
         });   
         });
     }

     onAuthChange = isSignedIn => {
        if (isSignedIn) {
          this.props.signIn(this.auth.currentUser.get().getId());
        } else {
          this.props.signOut();
        }
      };
    

      onSignInClick = () => {
        this.auth.signIn();
      };
    
      onSignOutClick = () => {
        this.auth.signOut();
      };
    
      renderAuthButton() {
        if (this.props.isSignedIn === null) {
          return null;
        } else if (this.props.isSignedIn) {
          return (
            <button onClick={this.onSignOutClick} className="ui red google button">
              <i className="google icon" />
              Sign Out
            </button>
          );
        } else {
          return (
            <button onClick={this.onSignInClick} className="ui red google button">
              <i className="google icon" />
              Sign In with Google
            </button>
          );
        }
      }
    
      render() {
        return <div>{this.renderAuthButton()}</div>;
      }
    }
    
    const mapStateToProps = state => {
      return { isSignedIn: state.auth.isSignedIn };
    };
    
    export default connect(
      mapStateToProps,
      { signIn, signOut }
    )(GoogleAuth);
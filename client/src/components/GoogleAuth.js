import React from 'react';

class GoogleAuth extends React.Component {
    state = {isSignedIn: null}

    componentDidMount(){
    window.gapi.load('client:auth2', () => {
     window.gapi.client.init({
        clientID : '1015608791166-aqo06m8llq3nuvb092k08e75g8in79ge.apps.googleusercontent.com', 
       // clientID : '797401886567-9cumct9mrt3v2va409rasa7fa6fq02hh.apps.googleusercontent.com',
        scope: 'email',
        plugin_name: 'Streamy'
        }).then(()=> {
           this.auth = window.gapi.auth2.getAuthInstance();
           this.setState({ isSignedIn: this.auth.isSignedIn.get()})
       //  this.onAuthChange();
           this.auth.isSignedIn.listen(this.onAuthChange);
        });   
        });
    }

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get()});
    }
    onSignIn = () => {
        this.auth.signIn();
    }
    onSignOut = () => {
        this.auth.signOut();
    }
    renderAuthButton(){
        if (this.state.isSignedIn === null) {
            return null;
        } else if (this.state.isSignedIn) {
            return (
                <button onClick={ this.onSignOut} className="ui red google button">
                    <i className="google icon"/>Sign Out
                </button>
            );
        } else {
            return (
                <button onClick={ this.onSignIn} className="ui red google button">
                    <i className="google icon"/>Sign In with Google
                </button>
            );
        }
        }
    

    render() {
        return <div>{this.renderAuthButton()} </div>
    }
}

export default GoogleAuth;

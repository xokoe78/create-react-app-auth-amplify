import React, { Component } from 'react';

import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';

import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";
import MainContent from "./MainContent";



Amplify.configure(aws_exports);


class App extends Component {


  render() {


    return (

      <div>
        <Header/>
        <Menu/>
        <MainContent/>
        <Footer/>
      </div>
  )

  }

}


export default withAuthenticator(App, false);

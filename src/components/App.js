import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


// Components 
import Header from './Header';
import Footer from  './Footer';


// containers 
import Home from '../containers/Home';
import News from '../containers/News';
import GalleryItems from '../containers/GalleryItem';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <Header/>
          <Switch> 
            <Route path='/gallery/:id' component={GalleryItems}/>
            <Route path='/news/:id' component={News}/>
            <Route exact path='/' component={Home}></Route>
          </Switch>
        <Footer/>  
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

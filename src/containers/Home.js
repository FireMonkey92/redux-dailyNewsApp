import React, { Component } from 'react';
import {connect } from 'react-redux';
import {lattestNews} from '../actions';
import {bindActionCreators} from 'redux';

// components 
import LattestNews from '../components/Home/LattestNews'

class Home extends Component {

    componentDidMount(){
        this.props.lattestNews();
    }

    render() {
        return (
            <div>
                <LattestNews/>
            </div>
        )
    }
} 
function mapStateToProps(state){
    console.log(state);
    
    return {
        articles : state.articals
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({lattestNews},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
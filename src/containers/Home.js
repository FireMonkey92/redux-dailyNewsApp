import React, { Component } from 'react';
import {connect } from 'react-redux';
import {lattestNews,othersNews,getGallery} from '../actions';
import {bindActionCreators} from 'redux';

// components 
import LattestNews from '../components/Home/LattestNews';
import OtherNews from '../components/Home/OtherNews';
import Gallery  from '../components/Home/Gallery';

class Home extends Component {

    componentDidMount(){
        this.props.lattestNews();
        this.props.othersNews();
        this.props.getGallery();
    }
    render() {
        return (
            <div className='main'>
                <LattestNews lattest={this.props.articles.lattest}/>
                <OtherNews   others={this.props.articles.others}/>
                <Gallery   gallery={this.props.articles.gallery} />
            </div>
        )
    }
} 
function mapStateToProps(state){
    return {
        articles : state.articals,
        others: state.others,
        gallery : state.gallery
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({lattestNews,othersNews,getGallery},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
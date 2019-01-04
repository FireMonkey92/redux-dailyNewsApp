import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSelectedNews, clearNews } from '../actions/';

class News extends Component {

    componentDidMount() {
        this.props.getSelectedNews(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.clearNews();
    }

    renderNews = ({ selected }) => {
        if (selected) {
            return selected.map((item) => {
                return (
                    <div key={item.id}>
                        <div className='tags'>
                            <span><i className='fa fa-eye'></i>{item.views}</span>
                            <span><i className='fa fa-thumbs-up'></i>{item.likes[0]}</span>
                            <span><i className='fa fa-thumbs-down'></i>{item.likes[1]}</span>
                        </div>
                        <div className='top'>
                            <h2>{item.title}</h2>
                            <span> Articel By : <strong> {item.author}</strong>  </span>
                        </div>
                        <div className='Body_news'>
                            <img src={`/images/articles/${item.img}`} alt={item.author}></img>
                            <p>{item.body}</p>
                        </div>
                        <div className='bottom'>
                        </div>
                    </div>
                )
            })
        }
    }

    render() {
        return (
            <div className='news_component'>
                {this.renderNews(this.props.artical)}
            </div>
        );
    }
}

function mapStateToProps(state) {
    // console.log(state)
    return {
        artical: state.articals
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getSelectedNews, clearNews }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(News);
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleLikes } from '../actions';


class LikesCounter extends Component {

    doLikes = (action) => {
        const props = this.props;
        const newLikes = action === 'ADD' ? [props.likes + 1, props.disLikes] : [props.likes, props.disLikes + 1];
        console.log(newLikes)
        this.props.handleLikes(newLikes, props.id, props.section, props.type);

    }
    render() {
        return (
            <div className='addLikeDislike_wrapper'>
                <h3>How do you feel about this?</h3>
                <div className='addLikeDislike_container'>
                    <div className='btn like' onClick={() => this.doLikes('ADD')}>
                        <div className='hits'>{this.props.likes}</div>
                        <div className='icon'><i className='fa fa-thumbs-up'></i></div>
                    </div>
                    <div className='btn dislike' onClick={() => this.doLikes('REMOVE')}  >
                        <div className='hits'>{this.props.disLikes}</div>
                        <div className='icon'><i className='fa fa-thumbs-down'></i></div>
                    </div>
                </div>
            </div>
        );
    }
}

// function mapStateToProps(state) {
//     return {
//         likes: state.likes
//     }
// }
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ handleLikes }, dispatch)
}

export default connect(null, mapDispatchToProps)(LikesCounter);
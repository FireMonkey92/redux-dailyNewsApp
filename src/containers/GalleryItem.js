import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSelectedGallery, clearSelectedGallery } from '../actions';
import { bindActionCreators } from 'redux';


class GalleryItem extends Component {

    componentDidMount() {
        this.props.getSelectedGallery(this.props.match.params.id);
    }
    componentWillUnmount() {
        this.props.clearSelectedGallery();
    }

    // Render Slider
    renderSlider = ({selectedGallery}) => {
        
        if(selectedGallery){
            console.log(selectedGallery)
            return selectedGallery.map((item)=>{
                return (
                    <div key={item.id}>
                       {item.id}
                    </div>
                )
            })
        }
    }

    render() {
        return (
            <div className='slide-wrap-container'>
                {this.renderSlider(this.props.selectedGallery)}
            </div>
        );
    }
}
function mapStateToProps(state) {

    return {
        selectedGallery: state.gallery
    }
}
function mapDispatchToProps(dispatch) {

    return bindActionCreators({ getSelectedGallery, clearSelectedGallery }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(GalleryItem);

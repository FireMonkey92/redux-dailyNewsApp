import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSelectedGallery, clearSelectedGallery } from '../actions';
import { bindActionCreators } from 'redux';

import Slider from 'react-slick';

import Counter from './LikesCounter';

const settings = {
   dots: true,
   infinite: true,
   arrows: false,
   speed: 500,
   slidesToShow: 1,
   slidesToScroll: 1
}
class GalleryItem extends Component {

   componentDidMount() {
      this.props.getSelectedGallery(this.props.match.params.id);
   }
   componentWillUnmount() {
      this.props.clearSelectedGallery();
   }

   // Render Slider
   renderSlider = ({ selectedGallery }) => {
      if (selectedGallery) {
         const gallery = selectedGallery[0];
         if (typeof gallery !== 'undefined') {
            return (
               <div>
                  <h3>Best of {gallery.artist}</h3>
                  <Slider {...settings}>
                     {
                        gallery.images.map((item, index) => {
                           return (
                              <div className='slider-images' key={index}>
                                 <div style={{
                                    background: `url(/images/galleries/${item.img}) no-repeat`

                                 }} className='image'>
                                 </div>
                                 <div className='description'>
                                    <span>{item.desc}</span>
                                 </div>
                              </div>
                           )
                        })
                     }
                  </Slider>
                  <div className='bottom'>
                     <Counter
                        id={gallery.id}
                        likes={gallery.likes[0]}
                        disLikes={gallery.likes[1]}
                        section='galleries'
                        type='HANDLE_LIKE_GALLERIES'
                     />
                  </div>
               </div>
            )
         }

      }
   }

   render() {
      const Slidedata = this.props.selectedGallery;
      return (
         <div className='slider-container'>
            {this.renderSlider(Slidedata)}
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

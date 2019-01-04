import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    // speed: 5000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1
}

const ShowGallery = ({ gallery }) => {
    //console.log(gallery)
    if (gallery) {
        return gallery.map((item) => {
            return (
                <Link to={`/gallery/${item.id}`} key={item.id}>
                    <div className='slide_items'>
                        <div className='image' style={{
                            background: `url(/images/galleries/${item.images[0].img})`
                        }}>
                            <h3>{item.artist}</h3>
                        </div>
                    </div>
                </Link>
            )
        })
    }

}
const Gallery = (props) => {
   // console.log(props);

    return (
        <div className='gallery_container'>
            <h2>Artist Gallery</h2>
            <div className='slider_block'>
                <Slider {...settings}>
                    {ShowGallery(props)}
                </Slider>
            </div>
        </div>
    )
}

export default Gallery;
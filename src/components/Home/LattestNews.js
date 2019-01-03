import React from 'react';
import { Link } from 'react-router-dom';


const ShowLattestList = ({ lattest }) => {
    if (lattest) {
        return lattest.map((item) => {
            return (
                <Link to={`/news/${item.id}`} key={item.id} className='item'>
                    <div className='news_cover'
                        style={{
                            background: `url(/images/articles/${item.img})`
                        }}>
                        <div className='description'>
                            <span>{item.category}</span>
                            <div>{item.title}</div>
                        </div>
                    </div>
                </Link>
            )
        })
    }
}
const LattestNews = (props) => {
    //console.log(props);
    return (
        <div className='lattest_affairs'>
            {ShowLattestList(props)}
        </div>
    )
}
export default LattestNews;

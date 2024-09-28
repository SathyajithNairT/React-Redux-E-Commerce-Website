import { useEffect, useState } from 'react'
import breadcrumbs from '../base/images/breadcrumb-bg.jpg'
import { bloglist } from '../base/JS/blog-list'
import calendericon from '../base/images/icon/calendar.png'


export function Blog() {

    const [blogItems, setBlogItems] = useState([])

    useEffect(() => {
        setBlogItems(bloglist)
    }, [])

    return (
        <div className="blog-main-wrap">
            <div className="breadcrumbs-wrap">
                <img src={breadcrumbs} alt="" />
                <div className='blog-heading'>
                    Our Blog
                </div>
            </div>
            <div className='blog-contents-wrap'>
                <div className='blog-contents-container'>
                    {blogItems.map((blog, index) => (
                        <div className="blog-card" key={index} style={{ marginBottom: '10rem' }}>
                            <img src={blog.blogImg} alt="" className="blogImg" />
                            <div className="blog-card-contents">
                                <div className="blog-date">
                                    <img src={calendericon} alt="" style={{ marginRight: '0.6rem' }} />{blog.blogDate}
                                </div>
                                <div className="blog-title">
                                    {blog.blogTitle}
                                </div>
                                <div className="blog-read-more-btn">
                                    READ MORE
                                    <div className="blog-read-more-btn-border-bottom"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
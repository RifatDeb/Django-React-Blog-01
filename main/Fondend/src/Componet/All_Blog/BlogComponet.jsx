import React from 'react'
import './blog.scss'
import { Link,  useNavigate } from 'react-router-dom'




const BlogComponet = ({data}) => {

  const history = useNavigate()

  const SingelBlog = ()=>{
 history(`/singelblog/${data?.id}`)

  }
  return (
    <>
  
            <div className='card-body' onClick={SingelBlog} > 
                <div className="image_section">
                    <img className='blog-image' src={data?.image} alt="" />
                </div>
                <div className="descrition">
                 
                    {/* <p>{data?.date}</p> */}
                    <h3>{(data?.titel).substring(0,40)} </h3> 
                    <p>{(data?.discription).substring(0,140)}  <Link className='btn btn-primary'>  More ..</Link> </p>

                    
                    
                </div>
            </div>
    </>
  )

}

export default BlogComponet

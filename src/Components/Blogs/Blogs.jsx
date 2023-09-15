/* eslint-disable react/jsx-key */
import { useState } from "react";
import { useEffect } from "react";
import Cart from '../Cart/Cart';
import Swal from 'sweetalert2'


const Blogs = () => {
const [allBlogs, setAllBlogs] =useState([]);
const [selectBlogs, setSelectBlogs] = useState([]);
const [totalCredit, setTotalCredit] = useState(0);
const [remaining, setRemaining] = useState(20);
const [totalPrice, setTotalPrice] = useState(0);

    useEffect(()=>{
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setAllBlogs(data))
    },[])

    const handleBlogBtnClick = (blogs) =>{
        const findBlog = selectBlogs.find(item => item.id === blogs.id);
        let total = blogs.price;
        let count = blogs.credit;
        if(findBlog){
           return Swal.fire('You have already select this course.');
        }else{
            selectBlogs.forEach(item => {
                count = count + item.credit;
            })
        }
        const totalRemaining = 20 - count;
        if(count > 20){
            return Swal.fire('Your credit hours limit is over.')
        }

        selectBlogs.forEach(item => {
            total = total + item.price;
        })
        setTotalPrice(total);
        setTotalCredit(count);
        setRemaining(totalRemaining);
        setSelectBlogs([...selectBlogs, blogs])
    }

    return (
        <div className="container mx-auto mt-8">
            <div className="blog-container flex">
                <div className="all-cards flex flex-wrap w-9/12 gap-5">
                    {
                        allBlogs.map(blogs => (
                                    <div key={blogs.id} className=" w-80 bg-white p-5 rounded-xl">
                                    <div className="card-img">
                                        <img className="photo" src={blogs.img} alt="" />
                                    </div>
                                    <h2 className="text-xl font-bold pt-3 pb-2">{blogs.course_name}</h2>
                                    <p className="loading-3">{blogs.details}</p>
                                    <div className="info flex pt-3 pb-5 font-semibold text-gray-500">
                                        <span className="mr-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 1V23" stroke="#1C1B1B"/>
                                        <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="#1C1B1B"/>
                                        </svg></span>
                                        <p>Price: {blogs.price}</p>

                                        <span className="ml-4 mr-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 6.042C10.3516 4.56336 8.2144 3.74694 6 3.75C4.948 3.75 3.938 3.93 3 4.262V18.512C3.96362 18.172 4.97816 17.9989 6 18C8.305 18 10.408 18.867 12 20.292M12 6.042C13.6483 4.56328 15.7856 3.74685 18 3.75C19.052 3.75 20.062 3.93 21 4.262V18.512C20.0364 18.172 19.0218 17.9989 18 18C15.7856 17.9969 13.6484 18.8134 12 20.292M12 6.042V20.292" stroke="#1C1B1B"/>
                                        </svg></span>
                                        <p>Credit: {blogs.credit}hr</p>
                                    </div>
                                    <button onClick={() => handleBlogBtnClick(blogs)} className='bg-blue-500 text-white font-semibold px-[118px] py-1 rounded-md text-lg'>Select</button>
                                </div>
                        ))
                    }
                </div>

{/* cart added area is start */}

                <div>
                    <Cart selectBlogs= {selectBlogs} totalCredit= {totalCredit} remaining={remaining} totalPrice= {totalPrice}></Cart>
                </div>
            </div>
            
        </div>
    );
};

export default Blogs;
import { useEffect } from "react";
import { useState } from "react";
import { AddToCart, GetCart, GetCourses, GetCourses1 } from "../common/courses";
import { NavigationMenu } from "./shared/navigation";
import { Link } from "react-router-dom";

export const Home = () => {
    const [courses, setCourses] = useState([]);
    const [courses1, setCourses1] = useState([]);
    const [cart, setCart] = useState();
    const [carts, setCarts] = useState([]);


    useEffect(() => {
        setCourses(GetCourses().slice(0, 3));
        setCourses1(GetCourses1().slice(0, 3));
        setCarts(GetCart());
    }, []);

    useEffect(() => {
        if (cart) {
            AddToCart(cart);
            setCarts([...carts, cart])
        }
    }, [cart]);

    return (
        <>
            <NavigationMenu />

            <div className="container mt-5">
                <h1>Welcome to the Online Course Store</h1>
                <p>Discover a wide range of courses to enhance your skills and knowledge.</p>

                <div className="row mt-5">
                    <h2>Popular Courses</h2>
                    {courses.map((x, xi) => <div key={`course_${xi}`} className="col-md-4">
                        <div className="card">
                            <img src={x.image} className="card-img-top" alt="Course 1" />
                            <div className="card-body">
                                <h5 className="card-title">{x.title}</h5>
                                <span><i className="fa fa-calendar"></i> {x.duration}</span>
                                <span><i className="fa fa-calendar"></i> Rs. {x.price}</span>
                                <p className="card-text">{x.description}</p>
                                {carts.length == 0 || carts.filter(y => y.id == x.id).length == 0 ? <button className="btn btn-primary" onClick={() => setCart(x)}>Enroll Now</button> : <span className="badge" style={{ color: '#000' }}>Added to Cart</span>}
                            </div>
                        </div>
                    </div>)}
                    <div className="col-md-12" style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                        <Link className="btn btn-primary" to={"/courses/1"}>Show All Popular Courses</Link>
                    </div>
                </div>
                <div className="row mt-5">
                    <h2>Data Science Courses</h2>
                    {courses1.map((x, xi) => <div key={`course1_${xi}`} className="col-md-4">
                        <div className="card">
                            <img src={x.image} className="card-img-top" alt="Course 1" />
                            <div className="card-body">
                                <h5 className="card-title">{x.title}</h5>
                                <span><i className="fa fa-calendar"></i> {x.duration}</span>
                                <span><i className="fa fa-calendar"></i> Rs. {x.price}</span>
                                <p className="card-text">{x.description}</p>
                                {carts.length == 0 || carts.filter(y => y.id == x.id).length == 0 ? <button className="btn btn-primary" onClick={() => setCart(x)}>Enroll Now</button> : <span className="badge" style={{ color: '#000' }}>Added to Cart</span>}
                            </div>
                        </div>
                    </div>)}
                    <div className="col-md-12" style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                        <Link className="btn btn-primary" to={"/courses/2"}>Show All Data Science Courses</Link>
                    </div>
                </div>
            </div></>
    )
}
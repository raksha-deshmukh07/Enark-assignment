import { useEffect, useState } from "react";
import { NavigationMenu } from "./shared/navigation"
import { useParams } from "react-router-dom";
import { GetCourses, GetCourses1 } from "../common/courses";

export const Courses = () => {

    const [courses, setCourses] = useState([]);
    const id = useParams().id;

    useEffect(() => {
        setCourses(id == 1 ? GetCourses() : GetCourses1());
    }, [id]);

    return (
        <>
            <NavigationMenu />
            <div className="container">
                <h1>{id == 1 ? 'Popular Courses' : 'Data Science Courses'}</h1>
                <div className="row">
                    {courses.map((x, xi) => <div key={`course_${xi}`} className="col-md-4">
                        <div className="card mt-5">
                            <img src={x.image} className="card-img-top" alt="Course 1" />
                            <div className="card-body">
                                <h5 className="card-title">{x.title}</h5>
                                <span><i className="fa fa-calendar"></i> {x.duration}</span>
                                <span><i className="fa fa-calendar"></i> Rs. {x.price}</span>
                                <p className="card-text">{x.description}</p>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </>
    )
}
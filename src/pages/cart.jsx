import { useEffect, useState } from "react"
import { GetCart } from "../common/courses";
import { NavigationMenu } from "./shared/navigation";

export const Cart = () => {

    const [carts, setCarts] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {

        setCarts(GetCart());
    }, []);

    useEffect(() => {
        let total = 0;
        carts.forEach(x => total += x.price);
        setTotal(total);
    }, [carts]);

    const remove = (course) => {
        let cart = carts.filter(x => x.id !== course.id);
        localStorage.setItem('cart', JSON.stringify(cart));
        setCarts(cart);
    }

    return (
        <div>
            <NavigationMenu />
            <div className="container mt-5">

                {carts.length > 0 ?

                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Course</th>
                                <th>Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {carts.map((x, xi) => <tr key={`cart_${xi}`}>
                                <td>{x.title}</td>
                                <td>Rs. {x.price}</td>
                                <td><button className="btn btn-danger" onClick={() => remove(x)}>Remove</button></td>
                            </tr>)}
                            <tr>
                                <td>Total</td>
                                <td>Rs. {total}</td>
                            </tr>
                        </tbody>
                    </table> : <h1>Cart is empty</h1>}
            </div>
        </div>
    )
}
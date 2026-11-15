// import React from "react";
// import {Link} from "react-router-dom";

// const Orders=() =>{
//     return(
//         <div className="orders">
//             <div className="no-orders">
//                 <p>You haven't placed any orders today</p>
//                 <Link to={"/"} className="btn">
//                 Get started
//                 </Link>
//             </div>
//         </div>
//     );
// };
// export default Orders;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        axios.get("https://zerodha-clone-5b2m.onrender.com/allOrders")
            .then((res) => {
                setAllOrders(res.data);
            })
            .catch((err) => {
                console.log("ERROR:", err);
            });
    }, []);

    return (
        <div className="orders">
            {allOrders.length === 0 ? (
                <div className="no-orders">
                    <p>You haven't placed any orders today</p>
                    <Link to={"/"} className="btn">
                        Get started
                    </Link>
                </div>
            ) : (
                <div className="order-table">
                    <h3>Orders ({allOrders.length})</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Stock</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Mode</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allOrders.map((order) => (
                                <tr key={order._id}>
                                    <td>{order.name}</td>
                                    <td>{order.qty}</td>
                                    <td>{order.price}</td>
                                    <td className={order.mode === "BUY" ? "profit" : "loss"}>
                                        {order.mode}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Orders;

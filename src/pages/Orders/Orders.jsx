import React, { useEffect, useState } from "react";

import "./Orders.css";

import { db } from "../../firebase/config";
import { useStateValue } from "../../utils/StateProvider";
import BookedItems from "../../components/BookedItems/BookedItems";

function Orders() {
  const [orders, setOrders] = useState([]);
  // eslint-disable-next-line
  const [{ basket, user }, dispatch] = useStateValue();

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders?.map(order => (
          <BookedItems key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;

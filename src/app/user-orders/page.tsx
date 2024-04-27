"use client"
import { useState, useEffect } from "react";
import Post from "../ui/order-list"; // Update import path

interface Order {
  id: string;
  title: string;
  content: string;
  authorName: string;
}

export default function Page() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await fetch("/api/orders"); // Adjust the API endpoint as per your backend setup
        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }
        const data = await response.json();
        setOrders(data.orders);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setError("Failed to fetch orders. Please try again later.");
        setLoading(false);
      }
    }

    fetchOrders();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto mt-8 px-4 sm:px-0 text-gray-600">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Your Orders</h1>
      {orders.length === 0 ? (
        <div>No orders found.</div>
      ) : (
        <div className="flex flex-wrap">
          {orders.map((order) => (
            <Post
              key={order.id}
              id={order.id}
              title={order.title}
              content={order.content}
              authorName={order.authorName || "Unknown"}
            />
          ))}
        </div>
      )}
    </div>
  );
}

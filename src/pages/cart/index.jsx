import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // added
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { useCart } from "../../context/CartContext";

export default function CartPage() {
  const { cart, setQty, removeItem, clear } = useCart();
  const [placedOrderRef, setPlacedOrderRef] = useState(null);
  const navigate = useNavigate(); // added

  const total = (cart.items || []).reduce((s, i) => s + (i.price || 0) * i.qty, 0);

  // create a pending order locally and route user to the contact page
  function goToContact() {
    const order = {
      id: `ORD-${Date.now()}`,
      createdAt: new Date().toISOString(),
      items: cart.items,
      total,
    };

    try {
      // save a pending order so contact page can display it
      localStorage.setItem("pendingOrder", JSON.stringify(order));
    } catch {}

    // navigate to /contact and pass the order id in location.state
    navigate("/contact", { state: { orderRef: order.id } });
  }

  function orderText() {
    return JSON.stringify({ id: placedOrderRef, items: cart.items, total }, null, 2);
  }

  return (
    <>
      <Navbar />
      <main className="max-w-screen-xl mx-auto px-8 py-12">
        <h1 className="text-2xl font-bold mb-6 text-[#3943F7]">Your Cart</h1>

        {(!cart.items || cart.items.length === 0) ? (
          <p className="text-gray-700">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-4">
              {cart.items.map(item => (
                <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded shadow">
                  <div className="flex items-center gap-4">
                    <img src={item.imageUrl} alt={item.title} className="w-20 h-20 object-cover rounded" />
                    <div>
                      <div className="font-semibold text-[#3943F7]">{item.title}</div>
                      <div className="text-sm text-gray-600">₦{item.price} × {item.qty} = ₦{(item.price * item.qty)}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min="1"
                      value={item.qty}
                      onChange={e => setQty(item.id, Math.max(1, Number(e.target.value)))}
                      className="w-20 border rounded px-2 py-1"
                    />
                    <button onClick={() => removeItem(item.id)} className="text-red-600">Remove</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="text-lg font-bold">Total: ₦{total}</div>

              <div className="flex items-center gap-3">
                <button onClick={goToContact} className="bg-[#3943F7] text-white px-4 py-2 rounded">
                  Contact to place order
                </button>
              </div>
            </div>
          </>
        )}

        {placedOrderRef && (
          <div className="mt-6 bg-green-50 p-4 rounded">
            <div className="font-semibold">Order placed — reference: {placedOrderRef}</div>
            <div className="mt-2 flex gap-2">
              <button
                onClick={() => navigator.clipboard?.writeText(placedOrderRef)}
                className="px-3 py-1 bg-gray-200 rounded"
              >
                Copy reference
              </button>
              <a
                className="px-3 py-1 bg-gray-200 rounded"
                href={`mailto:?subject=Order%20${encodeURIComponent(placedOrderRef)}&body=${encodeURIComponent(orderText())}`}
              >
                Email order
              </a>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
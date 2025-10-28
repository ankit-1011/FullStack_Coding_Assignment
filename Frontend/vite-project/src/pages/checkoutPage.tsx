import { useState } from "react";

const CheckoutPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [receipt, setReceipt] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("http://localhost:5000/api/checkout", {
      method: "POST",
    });
    const data = await res.json();

    setReceipt(data.receipt);
    setLoading(false);
  };

  const handleCloseModal = () => {
    setReceipt(null);
    window.location.href = "/";
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 border rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-5">Checkout</h1>

      {/* Checkout Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-2 rounded"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full border p-2 rounded"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-2 rounded disabled:opacity-50"
        >
          {loading ? "Processing..." : "Place Order"}
        </button>
      </form>

      {/* Receipt Modal */}
      {receipt && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-md">
            <h2 className="text-xl font-bold mb-3">Order Successful ✅</h2>
            <p className="text-sm text-gray-600 mb-4">Order ID: {receipt.id}</p>

            <div className="max-h-40 overflow-y-auto space-y-2 mb-4">
              {receipt.items.map((item: any) => (
                <div key={item.productId} className="flex justify-between">
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <span>₹{item.subtotal}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-between font-semibold mb-4">
              <span>Total</span>
              <span>₹{receipt.total}</span>
            </div>

            <button
              onClick={handleCloseModal}
              className="w-full bg-black text-white py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;

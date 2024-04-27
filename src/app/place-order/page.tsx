"use client"
import { useState } from "react";

export default function Page() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Set the submitting state to true
      setSubmitting(true);

      // Simulate a fetch request
      setTimeout(() => {
        // Reset the form fields
        setTitle("");
        setContent("");
        // Reset the submitting state to false after the fetch completes
        setSubmitting(false);
        // Show a success message (you can implement this part as needed)
        alert("Order submitted successfully!");
      }, 2000); // Simulating a 2-second delay for the fetch request
    } catch (error) {
      console.error(error);
      // Reset the submitting state to false if there's an error
      setSubmitting(false);
      // Show an error message (you can implement this part as needed)
      alert("Error submitting order. Please try again.");
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">
        Place Order
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto text-gray-800 bg-gray-200 p-8 rounded shadow-md"
      >
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-800 text-sm font-medium mb-2"
          >
            Store from which you want to order:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-white"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="content"
            className="block text-gray-800 text-sm font-medium mb-2"
          >
            Describe your order as accurately as possible:
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-white"
            required
          />
        </div>
        <div className="flex items-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none hover:bg-blue-600"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Order"}
          </button>
        </div>
      </form>
    </div>
  );
}

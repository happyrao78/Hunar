import React, { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const validateForm = (formData) => {
    const email = formData.get("email");
    const name = formData.get("name");
    const message = formData.get("message");

    // Basic validation
    if (!name || !email || !message) {
      return "All fields are required";
    }

    // Email validation (simple regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }

    return null;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setResult("");
    setErrorMessage("");

    const formData = new FormData(event.target);
    formData.append("access_key", "dca63c08-8567-4d70-a8c2-5d1eb5cfe98f");

    // Client-side validation
    const validationError = validateForm(formData);
    if (validationError) {
      setIsLoading(false);
      setErrorMessage(validationError);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        setResult("Error: " + data.message);
      }
    } catch (error) {
      setResult("An unexpected error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md dark:bg-gray-800 bg-white rounded-lg shadow-lg p-8 dark:transition ease-in-out duration-500">
        <h1 className="text-3xl font-bold mb-6 text-center dark:text-white">
          Contact Us
        </h1>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-medium text-gray-700 dark:text-gray-100"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              aria-required="true"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700 dark:text-gray-100"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-lg font-medium text-gray-700 dark:text-gray-100"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              aria-required="true"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>
          {errorMessage && (
            <p className="text-red-500 text-center">{errorMessage}</p>
          )}
          <div className="flex justify-center">
            <button
              type="submit"
              className={`w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Submit Form"}
            </button>
          </div>
        </form>
        {result && (
          <span
            className={`block mt-4 text-center text-lg font-medium ${
              result.includes("Success") ? "text-green-500" : "text-red-500"
            }`}
          >
            {result}
          </span>
        )}
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-base-200 text-center px-4">
      {/* 😢 ইমোজি */}
      <div className="text-6xl mb-4">😢</div>

      {/* হেডলাইন */}
      <h1 className="text-4xl font-bold text-error mb-2">
        404 - Page Not Found
      </h1>

      {/* বিবরণ */}
      <p className="text-lg text-base-content mb-6">
        The page you are looking for doesn't exist or has been moved.
      </p>

      {/* হোমে ফেরার বাটন */}
      <Link to="/" className="btn btn-primary">
        🔙 Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;

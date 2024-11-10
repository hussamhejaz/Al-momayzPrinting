import React from 'react';
import '../style/LoadingPage.css'; // Import the styles for loading animation

function LoadingPage() {
  return (
    <div className="loading-page flex items-center justify-center h-screen">
      <div className="text-center">
        {/* Creative animation: flipping squares */}
        <div className="creative-loader flex space-x-4">
          <div className="square animate-flip bg-custom-blue"></div>
          <div className="square animate-flip bg-custom-light-blue delay-200"></div>
          <div className="square animate-flip bg-custom-dark-blue delay-400"></div>
        </div>
        {/* Loading Text with Animation */}
        <h2 className="text-white text-xl mt-4 animate-pulse">
          Preparing Your Printing Experience....
        </h2>
      </div>
    </div>
  );
}

export default LoadingPage;

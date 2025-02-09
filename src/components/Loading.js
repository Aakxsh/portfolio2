import React from "react";

const Loading = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <div className="loading-spinner">
          <span>Loading...</span>
        </div>
      )}
    </>
  );
};

export default Loading;

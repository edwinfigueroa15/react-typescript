import React from "react";
import "./loading.css";

const Loading: React.FC<{}> = () => {
  return (
    <div className="flex justify-center mx-4 my-6 container_loader">
      <div className="loader"></div>
    </div>
  );
};

export default Loading;

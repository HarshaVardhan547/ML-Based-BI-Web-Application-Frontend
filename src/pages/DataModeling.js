import React from "react";

function DataModeling() {
  return (
    <div className="aspect-w-16 aspect-h-16">
      <iframe
        src="https://ml-bi-webapp.herokuapp.com/Individual"
        onLoad={() => {
          window.scrollTo(0, 0);
        }}
      ></iframe>
    </div>
  );
}

export default DataModeling;

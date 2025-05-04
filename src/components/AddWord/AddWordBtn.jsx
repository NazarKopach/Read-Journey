import React from "react";

const AddWordBtn = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-green-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-700 transition-all"
    >
      + Add Word
    </button>
  );
};

export default AddWordBtn;

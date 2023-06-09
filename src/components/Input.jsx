import React from 'react';

const Input = ({ task, handleSubmit, handleChange, darkMode }) => {
  return (
    <form onSubmit={handleSubmit} className="relative z-50">
      <div
        className={`${
          darkMode ? 'bg-darkTheme-400' : 'bg-lightTheme-50'
        } relative mt-9 md:mt-4 lg:mt-6 rounded flex items-center gap-2 md:gap-4 p-4 xl:mt-10`}
      >
        <button
          className={`rounded-full border p-2 ${
            darkMode ? 'border-darkTheme-200' : 'border-lightTheme-200'
          }`}
        ></button>
        <input
          type="text"
          value={task}
          placeholder="Create a new todo..."
          onChange={handleChange}
          className={`w-full bg-transparent focus:outline-none text-sm md:text-base ${
            darkMode
              ? 'text-darkTheme-50 placeholder:text-darkTheme-100'
              : 'text-lightTheme-400 placeholder:text-lightTheme-300'
          }`}
        />
      </div>
    </form>
  );
};

export default Input;

import React from "react";

function TodoItems(todolist) {
    
  return (
    <>
    {
      todolist.todolist.map((todoitem) => {
          return (
            <li>
            <span className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg hover:bg-gray-100 group bg-gray-50 hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
              <div class="flex items-center h-5">
                <input
                  type="checkbox"
                  className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                />
              </div>
              <span className="flex-1 ml-3 whitespace-nowrap">{todoitem.todo}</span>
              <button className="inline-flex items-center justify-center px-2 py-1 ml-3 text-lg font-medium text-white-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400 ">
                Delete
              </button>
            </span>
          </li>
          )
      })
    }
    </>
  );
}

export default TodoItems;

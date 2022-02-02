import React from 'react';
import TodoItems from './TodoItems';


function Todos(props) {
  
  return (
      <>
      <div className='flex'>
          <div className='p-4  bg-white rounded-lg border shadow-md sm:p-6 dark:bg-gray-800 dark:border-gray-700  lg:ml-[25rem] lg:w-[70rem] sm:ml-[8rem] sm:w-[50rem]'>
              <h3 className='text-left font-semibold text-gray-900 lg:text-xl dark:text-white mb-3'>
                Todos 
              </h3>
              <ul className='my-4 space-y-3'>
              <TodoItems todolist={props.todos}/>
              </ul>
          </div>
        </div>
      </>
  );
}

export default Todos;

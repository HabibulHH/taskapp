import { useState, useEffect } from 'react';

function useAddItem(friendID) {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
   console.log('Task has been added');
   setTaskList(...taskList,'new task');
  });

  return setTaskList;
}

export default useAddItem;
  
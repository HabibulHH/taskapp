import { useEffect, useState } from "react";

function useTodoItemList(initialTaskList) {
  const [TaskList, setTaskList] = useState(initialTaskList);
  useEffect(() => {
    console.log("hira hasan");
  }, [TaskList]);
  return {
    TaskList,
    addItem: (task) => {
      setTaskList([
        ...TaskList,
        {
          id: TaskList.length + 1,
          name: task.name,
          status: task.status,
          date: new Date(),
        },
      ]);
    },
    removeItem: (itemId) => {
      const items = TaskList.filter((item) => item.id !== itemId);
      setTaskList(items);
    },
  };
}

export default useTodoItemList;

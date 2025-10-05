let tasks = [
  { id: 1, title: "Изучить Express", done: false },
  { id: 2, title: "Сделать ToDo-приложение", done: true },
];

export const getAll = () => tasks;

export const addTask = (title) => {
  const newTask = { id: Date.now(), title, done: false };
  tasks.push(newTask);
};

export const toggleTask = (id) => {
  tasks = tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t));
};

export const deleteTask = (id) => {
  tasks = tasks.filter((t) => t.id !== id);
};

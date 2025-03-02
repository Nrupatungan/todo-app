import { create } from 'zustand';

type State = {
  title: string;
  description: string;

  taskModalState: boolean;
  todoModalState: boolean;

  todoEditModalState: boolean;
  taskEditModalState: boolean;
};

type Action = {
  updateTitle: (title: State['title']) => void;
  updateDescription: (description: State['description']) => void;
  
  openTaskModal: () => void;
  closeTaskModal: () => void;
  
  openTaskEditModal: () => void;
  closeTaskEditModal: () => void;

  openTodoModal: () => void;
  closeTodoModal: () => void;
  
  openTodoEditModal: () => void;
  closeTodoEditModal: () => void;
};

const useModalStore = create<State & Action>((set) => ({
  // initial states
  title: '',
  description: '',

  taskModalState: false,
  todoModalState: false,
  
  todoEditModalState: false,
  taskEditModalState: false,

  // functions
  updateTitle: (title) => set(() => ({ title: title })),
  updateDescription: (description) => set(() => ({ description: description })),

  openTaskModal: () => set(() => ({ taskModalState: true })),
  closeTaskModal: () => set(() => ({ taskModalState: false })),

  openTaskEditModal: () => set(() => ({ taskEditModalState: true })),
  closeTaskEditModal: () => set(() => ({ taskEditModalState: false })),
  
  openTodoModal: () => set(() => ({ todoModalState: true })),
  closeTodoModal: () => set(() => ({ todoModalState: false })),
  
  openTodoEditModal: () => set(() => ({ todoEditModalState: true })),
  closeTodoEditModal: () => set(() => ({ todoEditModalState: false })),
}));

export default useModalStore;
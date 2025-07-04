const rootElement = document.getElementById("root");
import TodoInput from "./header/TodoInput.js";
import TodoList from "./body/TodoList.js";
import ClearCompleted from "./footer/ClearCompleted.js";
import createElement from "./createElement.js";
let initialState = [
  {
    id: Math.random().toString(36),
    text: "Learn JavaScript",
    isCompleted: false,
  },
  {
    id: Math.random().toString(36),
    text: "Learn Css",
    isCompleted: false,
  },
];

function createApp() {
  const { container: inputContainer } = TodoInput((value) => {
    initialState = [
      ...initialState,
      {
        id: Math.random().toString(36),
        text: value,
        isCompleted: false,
      },
    ];
    render();
  });
  const { container: listContainer } = TodoList(
    initialState,
    (id) => {
      initialState = initialState.filter((item) => item.id !== id);
      render();
    },
    (id) => {
      initialState = initialState.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isCompleted: !item.isCompleted,  
          };
        }
        return item;
      });

      render();
    }
  );
  const { container: clearContainer } = ClearCompleted(initialState,()=>{
    initialState = initialState.filter(item=> !item.isCompleted)
    render()
  });
  const mainContainer = createElement("div");
  mainContainer.append(inputContainer, listContainer, clearContainer);
  return mainContainer;
}

function render() {
  root.innerHTML = "";
  let appContainer = createApp();
  rootElement.appendChild(appContainer);
}
render();

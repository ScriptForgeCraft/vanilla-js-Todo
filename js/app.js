const rootElement = document.getElementById("root");
import TodoInput from "./header/TodoInput.js";
import TodoList from "./body/TodoList.js";
import ClearCompleted from "./footer/ClearCompleted.js";

function createApp() {
  const { container: inputContainer } = TodoInput();
  const { container: listContainer } = TodoList();
  const { container: clearContainer } = ClearCompleted();
  const mainContainer = document.createElement("div");
  mainContainer.append(inputContainer, listContainer, clearContainer);
  return mainContainer;
}

const appContainer = createApp();
rootElement.appendChild(appContainer);

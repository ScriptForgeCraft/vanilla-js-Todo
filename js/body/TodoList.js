import createElement from "../createElement.js";

export default function TodoList(initialState, deleteTask, isChecked) {
  const [container, ul] = createElement(["div", "ul"]);

  initialState.forEach((item) => {
    const li = createElement("li");
    li.innerHTML = `
    <label>
  <input type='checkbox' data-id="${item.id}" ${
      item.isCompleted ? "checked" : ""
    } />

    ${item.text}
    </label>
      <button>X</button>
    `;
    const button = li.querySelector("button");
    button.addEventListener("click", () => {
      deleteTask(item.id);
    });

    ul.appendChild(li);
  });
  container.addEventListener("change", (evt) => {
    if (evt.target.tagName === "INPUT" && evt.target.type === "checkbox") {
      const id = evt.target.dataset.id;
      isChecked(id);
    }
  });

  container.appendChild(ul);
  return { container };
}

import createElement from "../createElement.js";

export default function TodoList(initialState) {
  const [container, ul] = createElement(["div", "ul"]);

  initialState.forEach((item) => {
    const li = createElement("li");
    li.innerHTML = `
    <label>
    <input type='checkbox' />
    ${item.text}
    </label>
      <button>X</button>
    `;
    ul.appendChild(li);
  });

  container.appendChild(ul);
  return { container };
}

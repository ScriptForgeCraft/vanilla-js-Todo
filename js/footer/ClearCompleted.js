import createElement from "../createElement.js";

export default function ClearCompleted(initialState, ClearCompleted) {
  const completedLength = initialState.filter((value) => value.isCompleted).length;
  const [container, button, span] = createElement(["div", "button", "span"]);
  span.textContent = ` ${completedLength}/${initialState.length}  `;
  button.textContent = "Clear Completed";
  button.addEventListener("click", () => {
    ClearCompleted();
  });

  container.append(span, button);
  return { container };
}

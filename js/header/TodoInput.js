import createElement from "../createElement.js";

export default function TodoInput(Add) {
  const [container, form, input, subbmit] = createElement([
    "div",
    "form",
    "input",
    "input",
  ]);
  const state = "";
  subbmit.type = "submit";
  subbmit.value = "Add";
  form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    if (input.value) {
      Add(input.value);
    }
    input.value = "";
  });
  form.append(input, subbmit);
  container.appendChild(form);
  return { container, state };
}

export default function TodoInput() {
  const container = document.createElement("div");
  const form = document.createElement("form");
  const input = document.createElement("input");
  const subbmit = document.createElement("input");
  const state = "";
  subbmit.type = "submit";
  subbmit.value = "Add";
  form.append(input, subbmit);
  container.appendChild(form);
  return { container, state };
}

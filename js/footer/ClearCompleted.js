export default function ClearCompleted() {
  const container = document.createElement("div");
  const state = "";
  const input = document.createElement("input");
  const span = document.createElement("span");
  span.textContent = "0/?";

  input.value = "Clear Completed";
  input.type = "submit";
  container.append(span, input);
  return { container, state };
}

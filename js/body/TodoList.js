export default function TodoList() {
  const container = document.createElement("div");
  const state = "";
  const ul = document.createElement('ul');
  const li = document.createElement('li')
  li.textContent = 'Example';
  ul.appendChild(li);   
  container.appendChild(ul);
  return { container, state };
}

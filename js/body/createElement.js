export default function createElement(tagName) {
  if (Array.isArray(tagName)) {
    return tagName.map((tag) => {
      return document.createElement(tag);
    });
  } else {
    return document.createElement(tagName);
  }
}

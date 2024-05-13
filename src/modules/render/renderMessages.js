export const renderMessage = (className, text, parentElem) => {
  const messageItem = document.createElement('li');
  messageItem.className = className;
  messageItem.textContent = text;

  parentElem.append(messageItem);
};

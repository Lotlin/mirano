export const renderMessage = (className, text) => {
  const messageItem = document.createElement('li');
  messageItem.className = className;
  messageItem.textContent = text;

  return messageItem;
};

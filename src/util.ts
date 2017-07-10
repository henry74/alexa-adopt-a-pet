export function validateText(text) {
  text = text.replace(/[^\w\s@/<>.,-="']/gi, '');
  return text;
}

export function sayDate(date) {
  return `<say-as interpret-as="date">????${date.slice(-5).replace('-', '')}</say-as>`;
}

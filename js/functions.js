const validateForm = (string, lengthMax) => (string.length <= lengthMax);
validateForm ('проверяемая строка', 21);

const palindrom = (string) => {
  string = string.replaceAll(' ', '').toLowerCase();
  let reversed = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }
  return string === reversed;
}
palindrom('tEn eT');

const emailAddress = document.getElementById('email');
const fullName = document.getElementById('userName');
const textMessage = document.getElementById('textMessage');
const templateForm = document.getElementById('form');
templateForm.addEventListener('input', () => {
  const localStorageObject = {
    name: fullName.value,
    email: emailAddress.value,
    message: textMessage.value,
  };
  localStorage.setItem('templateFormData', JSON.stringify(localStorageObject));
});
const getData = JSON.parse(localStorage.getItem('templateFormData'));
function preloaded() {
  if (getData) {
    fullName.value = getData.name;
    emailAddress.value = getData.email;
    textMessage.value = getData.message;
    return getData;
  }
  return '';
}
preloaded();

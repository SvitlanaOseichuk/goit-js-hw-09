const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector("input");
const messageTextarea = form.querySelector("textarea");

populateTextarea()  //отримуємо дані ЗІ сховища які були внесені до того

form.addEventListener("input", onFormInput);
form.addEventListener("submit", onFormSubmit);


function onFormSubmit(event){
    event.preventDefault();
    
    if (emailInput.value.trim() !== "" && messageTextarea.value.trim() !== "") {
    const formData = {
      email: emailInput.value,
      message: messageTextarea.value
    };
    console.log(formData);

    localStorage.removeItem(STORAGE_KEY);
    event.currentTarget.reset();
  }
}


function onFormInput() {
  const formState = {
    email: emailInput.value,
    message: messageTextarea.value
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formState));
}

function populateTextarea(){
  const savedMessage = localStorage.getItem(STORAGE_KEY)

  if(savedMessage){
    const { email, message } = JSON.parse(savedMessage);
    emailInput.value = email;
    messageTextarea.value = message;
  };
}



























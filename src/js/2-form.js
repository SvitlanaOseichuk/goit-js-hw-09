const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector("input");
const messageTextarea = form.querySelector("textarea");


form.addEventListener("input", onFormInput);
form.addEventListener("submit", onFormSubmit);


function onFormSubmit(event){
    event.preventDefault();
    
    if (emailInput.value !== "" && messageTextarea.value !== "") {
    const formData = {
      email: emailInput.value,
      message: messageTextarea.value
    };
    console.log(formData);

    localStorage.removeItem(STORAGE_KEY);
    event.currentTarget.reset();
  } else {
    alert("All fields must be filled \n (Усі поля повинні бути заповнені)");
  }
}


function onFormInput() {
  const formState = {
    email: emailInput.value.trim(),
    message: messageTextarea.value.trim()
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formState));
}


function populateFormFields(){
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if(savedMessage){
    const { email, message } = JSON.parse(savedMessage);
    emailInput.value = email;
    messageTextarea.value = message;
  };
}

populateFormFields();
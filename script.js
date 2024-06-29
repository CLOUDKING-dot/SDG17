document.addEventListener("DOMContentLoaded", function(){
const serviceForm = document.getElementById('SERVICESFORM');
const contactForm = document.getElementById('CONTACTFORM');
function validateForm(form){
    let valid = true;
    const inputs = form.querySelectorAll('input,textarea');
    inputs.forEach(input => {
        if(!input.value.trim()){
            valid = false;
            input.style.borderColor='red';
        } else{
            input.style.borderColor='green';
        }
    });
    return valid;
        }
        function handleFormSubmit(event){
            event.preventDefault();
            const form = event.target;
            if(validateForm(form)){
                const formData=new FormData(form);
                fetch(form.action, {
                    method: 'POST',
                    body: formData
                })
                .then(response=>response.text())
                .then(data=>{
                    form.querySelector('.FormRespose').innerText ='Form sumitted successfully!';
                    form.reset();
                })
                .catch(error=>{
                    form.querySelector('.FormRespose').innerText = 'Error submitting form. Please try again!';
                });
                } else{
                    form.querySelector('.FormRespose').innerText ='Please fill in all fields';
                }
        }
        if(serviceForm){
            serviceForm.addEventListener('submit',handleFormSubmit);
        }
        if(contactForm){
            contactForm.addEventListener('submit',handleFormSubmit);
        }
    });
        
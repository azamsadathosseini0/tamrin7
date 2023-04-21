const form = document.querySelector('form');
form.addEventListener('submit' , validate);

function validate(event){
    const user = document.getElementById('user');
    const pass = document.getElementById('pass');
    const usererror = document.getElementById('usererror');
    const passerror = document.getElementById('passerror');
    const email = document.getElementById('email');
    const emailerror = document.getElementById('emailerror');
    const simpleEmail = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    emailerror.textContent = '';
    const year = document.getElementById('year');
    const yearerror = document.getElementById('yearerror');
    yearerror.textContent = '';

    if(!Number.isInteger(Number(year.value))){
        yearerror.textContent = 'سال تولد باید یک عدد صحیح باشد';
        event.preventDefault();
    }else if(year.value < 1300 || year.value > 1400){
        yearerror.textContent = 'سال تولد باید بین 1300 تا 1400 باشد';
        event.preventDefault();
    }

    if(!simpleEmail.test(email.value)) {
        emailerror.textContent = 'لطفاً یک ایمیل معتبر وارد کنید';
        event.preventDefault();
        usererror.textContent = '';
        passerror.textContent = '';
    }

    if(user.value.length < 5 || user.value.length > 15){
        usererror.textContent = 'نام کاربری باید 5 تا 15 کاراکتر باشد';
        event.preventDefault();
    }
    if(pass.value.length < 6 || pass.value.length > 20){
        passerror.textContent ='کلمه‌ی عبور باید 6 تا 20 کاراکتر باشد';
        event.preventDefault();
    }
}

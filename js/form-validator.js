
window.addEventListener("load", (i) => {
    const form = document.querySelector(".form");
    const fullName = document.getElementById("name");
    const cellPhone = document.getElementById("cellphone");
    const email = document.getElementById("email");
    const textarea = document.getElementById("textarea");

    form.addEventListener("submit", (reload) => {
        reload.preventDefault();
        validateInputs();
    });

    const validateInputs = () => {
        const nameValue = fullName.value.trim();
        const cellPhoneValue = cellPhone.value.trim();
        const emailValue = email.value.trim();
        const textareaValue = textarea.value.trim();
    
        if (nameValue === "") {
            validaFail(fullName, "Campo obligatorio");
            console.log("fallo");
        } else {
            validateOk(fullName);
            console.log("ok");
        };

        if (cellPhoneValue === "") {
            validaFail(cellPhone, "Campo obligatorio");
        // } else if (!validateCellphone(cellPhoneValue)) {
        //     validaFail(cellPhone, "Por favor ingrese un numero valido");
        } else {
            validateOk(cellPhone);
        };

        if (emailValue === "") {
            validaFail(email, "Campo obligatorio");
        } else if (!validateEmail(emailValue)) {
            validaFail(email, "El email no es valido");
        } else {
            validateOk(email);
        };

        if (textareaValue === "") {
            validaFail(textarea, "Campo obligatorio, por favor escriba su consulta");
        } else {
            validateOk(textarea);
        }


    };

    const validaFail = (input, message) => {
        const form = input.parentElement;
        const notice = form.querySelector("p");
        notice.innerText = message;

        form.className = "form__container fail";
    };

    const validateOk = (input) => {
        const form = input.parentElement;
        form.className = "form__container ok"
    }

    //Regular expression for number phone
    // const validateCellphone = () => {
    //     return /^[09][0-9]{1,7}$/.test(cellPhone);
    // };

    //Regular expression for email account
    const validateEmail = (email) => {
        return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(email);
    };
});

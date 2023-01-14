const $form = document.querySelector(".form");

$form.addEventListener("submit" , handleSubmit);

async function handleSubmit(event) {
    const form = new FormData(this);
    const response = await fetch(this.action, {
        method: this.method,
        body: form, 
        headers: {
            'Accept': 'application/json'
        }
    });

    if (response.ok) {
        this.reset();
        alert("Consulta recibida, le responderemos los antes posible");
    };
};
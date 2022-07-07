const inputs = document.querySelectorAll('.inputs-field input');
const textConfig = document.getElementById('text-config');


const showOrHiddenPassword = (event) => {
    const button = event.currentTarget;
    const input = button.parentNode.querySelector('.input-password');
    const span = button.querySelector('span');

    if (input.type === "password") {
        input.type = "text";
        span.innerHTML = "Ocultar";
    } else {
        input.type = "password";
        span.innerHTML = "Mostrar";
    }

}

textConfig.addEventListener('click', showOrHiddenPassword)

const textShowOrHidden = (input, event) => {
    if (input.classList.contains('input-password')) {
        const showHidden = input.parentNode.querySelector('.show-hidden');
        showHidden.classList[event]('show');
    }
}

const onChangeInput = (event) => {
    const input = event.currentTarget;
    const legend = input.parentNode.querySelector('legend');

    if (input.value !== "") {
        legend.classList.add('change');
        input.classList.add('change');
        textShowOrHidden(input, "add");
    } else {
        legend.classList.remove('change');
        input.classList.remove('change');
        textShowOrHidden(input, "remove");
    }
}

for (const input of inputs) {
    input.addEventListener('input', onChangeInput);
}
const form = document.querySelector('.form-contato');
const mascaraForm = document.querySelector('.mascara-form');    

function AtivarForm() {
    form.style.left = '50%';
    mascaraForm.style.visibility = 'visible';

}

function DesativarForm() {
    form.style.left = '-120px';
    mascaraForm.style.visibility = 'hidden';
}
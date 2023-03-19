// const title = document.getElementById('titleNota');
const text = document.getElementById('textNota')

const noteForm = document.querySelector('.form-note');

noteForm.addEventListener('submit', e => {
    e.preventDefault();

    let txtText = text.value;


    appendNote(txtText)
    text.value = ""
})
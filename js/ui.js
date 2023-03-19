const notesList = document.querySelector("#notes");
savedId = ""
const noteUI = (note) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class=" mt-2 no-seleccionable card card-body rounded-0 animate__animated animate__fadeInUp mb-2">
         <p class="text-justify">${note}</p>
     </div>
    `;
    return div;
};


const appendNote = (note) => {
    notesList.append(noteUI(note));
};
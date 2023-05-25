const toDo = document.querySelector('#to-do');
const listNotes = toDo.querySelector('#list-notes');

toDo.addEventListener('submit',renderNote);
listNotes.addEventListener('click', removeNote);

function renderNote(e){
   e.preventDefault();

   let inputValue = toDo.querySelector('#new-note-input');
   
   const newNote = `<li class="list-notes__item">
   <p class="list-notes__value">${inputValue.value}</p>
   <button class="delete-btn" data-action='delete'>Delete</button>
   </li>`
   
   inputValue.value = '';

   listNotes.insertAdjacentHTML('beforeend', newNote);
}

function removeNote(e){
   if(e.target.dataset.action == 'delete'){

      if( confirm('Delete this note?')){
         e.target.parentNode.remove();
      }

   }
}
  
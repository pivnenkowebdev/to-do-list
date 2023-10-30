
   const toDo = document.querySelector('#to-do');
   const listNotes = toDo.querySelector('#list-notes');
   const inputSearch = toDo.querySelector('#search');
   const inputValue = toDo.querySelector('#new-note-input');

   toDo.addEventListener('submit',renderNewNote);
      listNotes.addEventListener('click', removeNoteFromRender);
      inputSearch.addEventListener('keyup', filterNotes);
      toDo.addEventListener('input',()=>{
         if(inputValue.value.length > 0 ){
            inputValue.style.border = '2px solid transparent';
         }
      })
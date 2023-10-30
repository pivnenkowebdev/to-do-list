
// render all notes
function renderAllNotes(){
   allNotes.forEach((note) => {
      const newNote = `<li class="list-notes__item">
        <p class="list-notes__value">${note}</p>
        <button class="delete-btn" data-action='delete'>Delete</button>
      </li>`;
      listNotes.insertAdjacentHTML('beforeend', newNote);
    });
}

// render the new note
function renderNewNote(e){
   e.preventDefault();

   if(inputValue.value.length > 0){

      const newNote = `<li class="list-notes__item">
      <p class="list-notes__value">${inputValue.value}</p>
      <button class="delete-btn" data-action='delete'>Delete</button>
      </li>`

      addItemInListNotes();

      inputValue.value = '';
      listNotes.insertAdjacentHTML('beforeend', newNote);
      
   }else{
      inputValue.style.border = '2px solid red';
   }

}

// remove the note
function removeNoteFromRender(e){
   if(e.target.dataset.action == 'delete'){
      removeNoteFromList(e);
      e.target.parentNode.remove();
   }
}

// filter notes
function filterNotes(e){
   let searchValue = e.target.value.toLowerCase();
   const noteItem = listNotes.querySelectorAll('.list-notes__value');

   noteItem.forEach(function(item){
      const itemValue = item.textContent.toLowerCase();
      if(itemValue.indexOf(searchValue) != -1 ){
         item.closest('.list-notes__item').style.display = 'flex';
      }else{
         item.closest('.list-notes__item').style.display = 'none';
      }
   })
}

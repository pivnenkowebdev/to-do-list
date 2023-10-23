document.addEventListener("DOMContentLoaded", function() {

   // vars
   const toDo = document.querySelector('#to-do');
   const listNotes = toDo.querySelector('#list-notes');
   const inputSearch = toDo.querySelector('#search');
   const inputValue = toDo.querySelector('#new-note-input');

   const allNotes = JSON.parse(localStorage.getItem('listNotes')) || [];

   if(allNotes.length > 0){
      renderAllNotes();
   }

   // functions

   // add note in list of notes
   function addItemInListNotes(){
      
      if(allNotes){
         allNotes.push(inputValue.value);
         localStorage.setItem('listNotes',JSON.stringify(allNotes));
      }
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

   // render all notes from localStorage
   function renderAllNotes(){
      allNotes.forEach((note) => {
         const newNote = `<li class="list-notes__item">
           <p class="list-notes__value">${note}</p>
           <button class="delete-btn" data-action='delete'>Delete</button>
         </li>`;
         listNotes.insertAdjacentHTML('beforeend', newNote);
       });
   }

   // remove the note
   function removeNoteFromRender(e){
      if(e.target.dataset.action == 'delete'){
         removeNoteFromList(e);
         e.target.parentNode.remove();
      }
   }

   // removeNoteFromList
   function removeNoteFromList(e){
      allNotes.splice(allNotes.indexOf(e.target.previousElementSibling.textContent),1)
      localStorage.setItem('listNotes',JSON.stringify(allNotes));
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

   // events
   toDo.addEventListener('submit',renderNewNote);
   listNotes.addEventListener('click', removeNoteFromRender);
   inputSearch.addEventListener('keyup', filterNotes);
   toDo.addEventListener('input',()=>{
      if(inputValue.value.length > 0 ){
         inputValue.style.border = '2px solid transparent';
      }
   })
});

const toDo = document.querySelector('#to-do');
const listNotes = toDo.querySelector('#list-notes');
const inputSearch = toDo.querySelector('#search');

toDo.addEventListener('submit',renderNote);
listNotes.addEventListener('click', removeNote);
inputSearch.addEventListener('keyup', filterNotes);

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

         e.target.parentNode.remove();

   }
}

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
import Model from './model.js';
import View from './view.js';

const model = new Model();
const view = new View(model.allNotes);

// render and if\else for show alert around the input
view.elementsControll.form.addEventListener('submit', function(e){
   e.preventDefault();

   if(view.elementsControll.inputValue.value.length > 0 ){
      
      const note = model.addNote(view.elementsControll.inputValue.value);
      view.renderNotes(note);
      view.clearInput();

   }else{
      view.alertInput();
   }
});

// remove alert around the input
view.elementsControll.inputValue.addEventListener('input',()=>{
   if(view.elementsControll.inputValue.style.border === '2px solid red'){
      view.acessInput();
   }
})

// find notes
view.elementsControll.inputSearch.addEventListener('input',(e)=>{
   let searchValue = e.target.value.toLowerCase();
   const noteItem = view.elementsControll.listNotes.querySelectorAll('.list-notes__value');
   view.findNotes(noteItem, searchValue);
});

// remove the note
view.elementsControll.listNotes.addEventListener('click',(e)=>{
   if(e.target.dataset.action == 'delete'){
      model.removeNoteFromList(e.target.previousElementSibling.textContent);
   }
   view.deleteCurrentNote(e.target.closest('.list-notes__item'));
})


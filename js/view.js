export default class View{

   constructor(allNotes){
      allNotes.forEach(note => {
         this.renderNotes(note);
      });
   }

   elementsControll = {
      form: document.querySelector('#to-do'),
      listNotes: document.querySelector('#list-notes'),
      inputSearch: document.querySelector('#search'),
      inputValue: document.querySelector('#newNoteInput'),
   }

   renderNotes(note){

      const newNote = `
      <li class="list-notes__item">
      <p class="list-notes__value">${note}</p>
      <button class="delete-btn" data-action='delete'>Delete</button>
      </li>
      `;

      this.elementsControll.listNotes.insertAdjacentHTML('beforeend', newNote);

   }

   clearInput(){
      this.elementsControll.inputValue.value = '';
   }

   alertInput(){
      this.elementsControll.inputValue.style.border = '2px solid red';
   }
   
   acessInput(){
      this.elementsControll.inputValue.style.border = '2px solid transparent';
   }
   
   findNotes(noteItem, searchValue){
      noteItem.forEach(function(item){
         const itemValue = item.textContent.toLowerCase();
         if(itemValue.indexOf(searchValue) != -1 ){
            item.closest('.list-notes__item').style.display = 'flex';
         }else{
            item.closest('.list-notes__item').style.display = 'none';
         }
      })
   }

   deleteCurrentNote(element){
      element.remove();
   }
}


const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
let items = JSON.parse(localStorage.getItem('items')) || [];
const checkBtn = document.querySelector('.check');
const uncheckBtn = document.querySelector('.uncheck');
const deleteBtn = document.querySelector('.delete');

function addItem(e){
  e.preventDefault();
  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text,
    done: false
  }
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

function populateList(plates = [], plateList){
  plateList.innerHTML = plates.map((plate, i) => {
    return `
    <li>
      <input type="checkbox" data-index="${i}" id="item${i}" ${plate.done ? 'checked':''}/>
      <label for="item${i}">${plate.text}</label>
    </li>
    `;
  }).join('');
}

function toggleDone(e){
  if (!e.target.matches('input')) return; //skip this unless it's an input
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

function checkAll(){
  items.forEach(element => {
    element.done = true;
  });
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

function uncheckAll(){
  items.forEach(element => {
    element.done = false;
  });
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

function deleteAll(){
  items = [];
  itemsList.innerHTML = '';
  localStorage.removeItem('items');
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
checkBtn.addEventListener('click', checkAll);
uncheckBtn.addEventListener('click', uncheckAll);
deleteBtn.addEventListener('click', deleteAll);

populateList(items, itemsList);

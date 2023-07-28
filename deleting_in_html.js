/*var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

//add item
var form=document.getElementById('addForm');
var itemlist=document.getElementById('items');

//form submit event
form.addEventListener('submit', addItem);

//add item
function addItem(e){
    e.preventDefault();

    //console.log(1);
    //get input value
    var newitem=document.getElementById('item').value;

    //create new li element
    var li=document.createElement('li');
    //add class
    li.className='list-group-item';
    console.log(li);
    
}*/
/*
//add item
var form = document.getElementById('addForm');
var itemlist = document.getElementById('items');
var filter=document.getElementById('filter');


//form submit event
form.addEventListener('submit', addItem);

//delete event
itemlist.addEventListener('click', removeItem)

//filter event
filter.addEventListener('keyup', filterItems);

//add item
function addItem(e) {
    e.preventDefault();

    //get input value
    var newitem = document.getElementById('item').value;//adding .value makessure to add the value in the input instead of the [objectHTMLinput]

    //create new li element
    var li = document.createElement('li');

    //add class
    li.className = 'list-group-item';
   // console.log(li);
   //add text node with input value
   li.appendChild(document.createTextNode(newitem));
   //but upto now there wont be any delete buttons for the newly added input items

   //create delete button element
   var deletebtn=document.createElement('button');
   //add classes to del button
   deletebtn.className='btn btn-danger btn-sm float-right delete';
   //append text node
   deletebtn.appendChild(document.createTextNode('X'));
   li.appendChild(deletebtn);

    // create edit button element
    var editbtn = document.createElement('button');
    editbtn.className = 'btn btn-primary btn-sm float-right edit';
    editbtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editbtn);


   //append li to list
   itemlist.appendChild(li);
}

//remove item
function removeItem(e){
  //console.log(1)//right now the item could be rmeoved even when u tap the item name also but we have to makesure that it happens inly when 'X' mark is clicked
  if(e.target.classList.contains('delete')){
   // console.log(1);//now the item can be deleted only when "X" button is clicked
   if(confirm('Are u sure?')){
    var li=e.target.parentElement;//child element(li=item 1) is removed when parentelement(X) is clicked 
    itemlist.removeChild(li);
   }
  }
}
*/



  var form = document.getElementById('addForm');
  var itemlist = document.getElementById('items');
  var filter = document.getElementById('filter');

  // form submit event
  form.addEventListener('submit', addItem);

  // delete event
  itemlist.addEventListener('click', removeItem);

  // filter event
  filter.addEventListener('keyup', filterItems);

  // add item
  function addItem(e) {
    e.preventDefault();

    // get input value
    var newitem = document.getElementById('item').value;

    // create new li element
    var li = document.createElement('li');

    // add class
    li.className = 'list-group-item';

    // add text node with input value
    li.appendChild(document.createTextNode(newitem));

    // create delete button element
    var deletebtn = document.createElement('button');
    deletebtn.className = 'btn btn-danger btn-sm float-right delete';
    deletebtn.appendChild(document.createTextNode('X'));
    li.appendChild(deletebtn);

    // create edit button element
    var editbtn = document.createElement('button');
    editbtn.className = 'btn btn-primary btn-sm float-right mr-2 edit';
    editbtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editbtn);
    

    // append li to list
    itemlist.appendChild(li);
  }

  // remove item
  function removeItem(e) {
    if (e.target.classList.contains('delete')) {
      if (confirm('Are you sure you want to delete this item?')) {
        var li = e.target.parentElement;
        itemlist.removeChild(li);
      }
    }
  }

  //filter items
function filterItems(e){
  //convert text to lowercase
  var text=e.target.value.toLowerCase();
  //console.log(text);//any letters added in the field of item listener are filtered to be lower case
  //get list of li elements
  var items=itemlist.getElementByTagName('li');
  //console.log(items);
  Array.from(items).forEach(function(item){
    var itemName=item.firstChild.textConten;
    console.log(itemName);
  });
}
















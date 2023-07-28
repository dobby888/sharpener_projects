//examine the documents objects

//console.dir(document);

/*console.log(document.domain);

console.log(document.URL);

console.log(document.title);
//document.title=123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
//document.all[10].textContent='Hello';
console.log(document.forms);
console.log(document.links);
//array:[] is different from HTML collection []
console.log(document.forms[0]);
console.log(document.images);*/
    


//GET ELEMENTS BY ID
//console.log(document.getElementById('header-title'));
//var headertitle=document.getElementById('header-title');
//var header=document.getElementById('main-header');
//console.log(headertitle);
//headertitle.textContent='hello';
//headertitle.innerText='good bye';
//console.log(headertitle.textContent);
//console.log(headertitle.innerText);//innertext pays attention to the style whereas textcontent ignores the style attribute
//headertitle.innerHTML='<h3>Hello</h3>';//this doesnt change h1 to h3 instead it pushes h3 inside the h1//
//headertitle.style.borderBottom='solid 3px black'
//header.style.borderBottom='solid 3px black'


//GET ELEMENTS BY CLASS NAME

//var items=document.getElementsByClassName(('list-group-item'));
/*console.log(items);
console.log(items[1]);
items[1].textContent='hello 2'
items[1].style.fontWeight='bold';
items[1].style.backgroundColor='yellow';//we can change the property of a single attribute like this but to change the property of the total html collection we would need to use loops 

//items.style.backgroundColor='#4f4f4f';

for(var i=0;i<items.length;i++){
    items[i].style.backgroundColor='#4f4f4f'
}

*/

/*for(var i=0;i<items.length;i++){
    items[i].style.color='green';
}


var items1=document.getElementsByClassName(('title'));
for(var i=0;i<items1.length;i++){
    items1[i].style.color='green';
}*/

//GET ELEMENTS BY TAG NAME


/*var li=document.getElementsByTagName(('li'));
console.log(li);
console.log(li[1]);
li[1].textContent='hello 2'
li[1].style.fontWeight='bold';
li[1].style.backgroundColor='yellow';//we can change the property of a single attribute like this but to change the property of the total html collection we would need to use loops 

//items.style.backgroundColor='#4f4f4f';
//li:item 5 is working even it doent have a class of list group items bcz it works by the tag not the class
for(var i=0;i<items.length;i++){
    li[i].style.backgroundColor='#4f4f4f'
}
var items=document.getElementsByClassName(('list-group-item'));
    console.log(items);
    console.log(items[1]);
    items[0].textContent='hello 2'
    items[1].style.fontWeight='bold';
    for(var i=0;i<items.length;i=i+2){
        items[i].style.backgroundColor='#4f4f4f'
    }
    items[2].style.color='transparent'
    var li=document.getElementsByTagName(('li'));
    console.log(li);
    console.log(li[1]);
    li[2].textContent='hello 5'
    li[1].style.fontWeight='bold'; 
    for(var i=1;i<li.length;i=i+2){
        li[i].style.backgroundColor='skyblue'
    }
    var items1=document.querySelectorAll('.list-group-item');
    items1[1].style.color='green';
    for(var i=0;i<items1.length;i=i+2){
      items[i].style.backgroundColor='green';
    }
    //header.style.borderBottom='solid 4px #ff0000';



//QUERY SELECTOR
//query selector usually selects the first item in the list by default
var header=document.querySelector('#header-title');
header.style.borderBottom='solid 4px #ff0000';

var input=document.querySelector('input');
input.value='hello world';//adds the input to the input field

var submit=document.querySelector('input[type="submit"]');
submit.value="SEND"//changes the submit button to change i.e., even if query selector selects teh first item on the list by default we can still change the selected item by mentioning the required item type

var item=document.querySelector('.list-group-item');
item.style.color='red';

var lastitem=document.querySelector('li:last-child');
lastitem.style.color='blue';

var seconditem=document.querySelector('li:nth-child(2)');
seconditem.style.color='coral';



//QUERY SELECTOR ALL
var title=document.querySelectorAll('.title');
console.log(title)
title[0].textContent='hello';

var odd=document.querySelectorAll('li:nth-child(odd)');
var even=document.querySelectorAll('li:nth-child(even)');
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='#f4f4f4';
    even[i].style.backgroundColor='#ccc';
}*/


//TRAVERSING THE DOM
//h2 is a child of div(main) and form is a sibling of h2 bcz both of them are on the same level
//var itemlist=document.querySelector('#items');
//parentNode
//console.log(itemlist.parentNode);//div
/*itemlist.parentNode.style.backgroundColor='blue';
/*console.log(itemlist.parentNode.parentNode);//container
console.log(itemlist.parentNode.parentNode.parentNode);//body
*/

//parentElement
//console.log(itemlist.parentElement);
/*itemlist.parentElement.style.backgroundColor='red';
console.log(itemlist.parentElement.parentElement);
console.log(itemlist.parentElement.parentElement.parentElement);
*/

//childNodes
//console.log(itemlist.childNodes);//includes the line breaks  and its a node list
//console.log(itemlist.children)//do not include the line breaks and its a html collection
//console.log(itemlist.children[1]);
//itemlist.children[1].style.backgroundColor='yellow';
/*

//firstChild
console.log(itemlist.firstChild);//includes the line break
//firstElementChild
console.log(itemlist.firstElementChild);//doenot include the line breaks
itemlist.firstElementChild.textContent='first element child';
*/

//lastChild
//console.log(itemlist.lastChild);//includes the line break
//lastElementChild
//console.log(itemlist.lastElementChild);//doenot include the line breaks
//itemlist.lastElementChild.textContent='last element child';

//nextSibling
//console.log(itemlist.nextSibling);//textnode
//nextElementsibling
//console.log(itemlist.nextElementSibling);


//previousSibling
//console.log(itemlist.previousSibling)
//previousElementSibling
//console.log(itemlist.previousElementSibling)
//itemlist.previousElementSibling.style.color='red'



//createElement
//create a div
//var newdiv=document.createElement('div');
//add class
//newdiv.className='hello';
//add id
//newdiv.id='hello1';
//add attribute
//newdiv.setAttribute('title','hello div');
//create text node
//var newdivtext=document.createTextNode('hello world');
//add text to div
//newdiv.appendChild(newdivtext);//inside the element div
//adding into the dom
//var container=document.querySelector('header .container');//make sure to leave space after the word header
//var h1=document.querySelector('header h1');

//console.log(newdiv)
//newdiv.style.fontsize='30px'

//container.insertBefore(newdiv,h1);


/*



itemlist.parentElement.style.backgroundColor='red'
itemlist.lastElementChild.textContent='last element child';
itemlist.lastChild.textContent='lastchild';
itemlist.firstElementChild.textContent='firstElementChild';
itemlist.firstChild.textContent='firstchild'
itemlist.nextSibling.textContent='nextsibling';
itemlist.nextElementSibling.textContent='nextelementsibling';
itemlist.previousSibling.textContent='previoussibling';
itemlist.previousElementSibling.textContent='previouselementsibling';
itemlist.previousElementSibling.style.color='red'
var newdiv=document.createElement('div');
newdiv.className='hello';
newdiv.id='hello1';
newdiv.setAttribute('title','hello div');
var newdivtext=document.createTextNode('hello world');
newdiv.appendChild(newdivtext);
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
newdiv.style.fontsize='30px'
container.insertBefore(newdiv,h1);

*/

console.log(document)







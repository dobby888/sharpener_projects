var header=document.getElementById('main-header');
header.style.borderBottom='solid 3px black'
var items=document.getElementsByClassName(('list-group-item'));
for(var i=0;i<items.length;i++){
    items[i].style.color='green';
}
var items1=document.getElementsByClassName(('title'));
for(var i=0;i<items1.length;i++){
    items1[i].style.color='green';
}
var tag=document.getElementsByTagName(('h2'));
tag[0].style.fontWeight='bold';







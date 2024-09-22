
let btn = document.querySelector('.addTask');
let input = document.querySelector('input');
let ul = document.querySelector('ul');

btn.addEventListener("click", function () {

    let delbtn = document.createElement('button');
    delbtn.innerText = "delete";
    delbtn.classList.add("delete")


    let item = document.createElement('li');
    item.innerText = input.value;

    console.log(item);

    item.appendChild(delbtn);
    ul.appendChild(item);

    input.value = "";


});


 
ul.addEventListener("click", function (event) {

    if(event.target.nodeName == 'BUTTON'){

        let parent = event.target.parentElement;
         parent.remove();
        console.dir(parent);
       
    }
    


    


});



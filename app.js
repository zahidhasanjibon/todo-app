
let newTask = document.querySelector('#new-task')
let form = document.querySelector('#form')
let todoUl = document.querySelector('#items')
let completeUl = document.querySelector('.complete-list ul')
let addTaskBtn = document.querySelector('#addTaskBtn')




    // fnctions

        // for create listitem

    let createTask =  function (task) {

        let listItem = document.createElement('li')
        let checkbox = document.createElement('input')
        let label = document.createElement('label')
        checkbox.type = 'checkbox'
        label.innerText = task

        listItem.appendChild(checkbox)
        listItem.appendChild(label)

        return listItem
    }

        // calling to create add task function

    let addtask = function (event) {
        event.preventDefault();

        if(newTask.value){
            let listItem = createTask(newTask.value);
            todoUl.appendChild(listItem);
            newTask.value = '';
   
               // bind the new listitem to the incom task\
           bindInCompleteItems (listItem,completeTask)
        } else {
            alert('Task Name not given')
        }
    }

            // function what happens after select checkbox

    let completeTask = function () {
        let listItem = this.parentNode;
        let deletebtn = document.createElement('button');
        deletebtn.innerText = 'Delete';
        deletebtn.className = 'btn';
        listItem.appendChild(deletebtn)
        
        let checkbox = listItem.querySelector('input[type="checkbox"]')
        // e.target.remove()
        checkbox.remove()

        completeUl.appendChild(listItem)

            // bind delete button fnctionality

        bindCompleteItems(listItem,deleteTask)
    }

    let deleteTask  = function () {
        let listItem = this.parentNode;
        let ul = listItem.parentNode;
        ul.removeChild(listItem); 

    }


            // for checkbox input action

    let bindInCompleteItems = function (taskItem,checkBoxClick) {
        let checkBox =  taskItem.querySelector('input[type="checkbox"]');
        checkBox.addEventListener('change',checkBoxClick)

    }


            // for delete btton action 
    
    let bindCompleteItems = function (taskItem,deleteBttonClick) {
        let deleteButton = taskItem.querySelector('.btn')
        deleteButton.addEventListener('click',deleteBttonClick)

    }



    for(let i = 0; i < todoUl.children.length; i++) {
        bindInCompleteItems(todoUl.children[i],completeTask)
    }
    for(let j = 0; j < completeUl.children.length; j++) {
        bindCompleteItems(completeUl.children[j],deleteTask)
    }


    form.addEventListener('submit',addtask)


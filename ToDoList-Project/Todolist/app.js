// variables 
const addTaskButton=document.getElementById('add-task')
const taskContainer=document.getElementById('task-container')
const inputTask=document.getElementById('input-task')
// EventListener For Addbutton
addTaskButton.addEventListener('click',()=>{
    let task=document.createElement('div')
    task.classList.add('task')
    let listitem=document.createElement('li')
    listitem.innerText=`${inputTask.value}`
    task.appendChild(listitem)
    let checkButton=document.createElement('button')
    checkButton.innerHTML='<i class="fa-solid fa-check"></i>'
    checkButton.classList.add('checkTask')
    task.appendChild(checkButton)
    let DeleteButton=document.createElement('button')
    DeleteButton.innerHTML='<i class="fa-solid fa-trash-can"></i>'
    DeleteButton.classList.add('DeleteTask')
    task.appendChild(DeleteButton)
    if(inputTask.value=="")
    {
        alert('please enter a task')
    }
    else
    {
        taskContainer.appendChild(task)
    }
    inputTask.value=''
    checkButton.addEventListener('click',()=>{
        checkButton.parentElement.style.textDecoration='line-through'
    })
    DeleteButton.addEventListener('click',(e)=>{
        let target=e.target
        target.parentElement.parentElement.remove();

    })
})

(function(){
    //создаем и возвращаем заголовок приложения
    function createAppTitle(title){
        let appTitle=document.createElement('h2');
        appTitle.innerHTML=title;
        return appTitle;
    }
    //создаём и возвращаем форму для создания дела
    function createTodoItemForm(){
        let form=document.createElement('form');
        let input=document.createElement('input');
        let buttonWrapper=document.createElement('div');
        let button=document.createElement('button');

        form.classList.add('input-group', 'mb-3');
        input.classList.add('form-control');
        input.placeholder='Введите название нового дела';
        buttonWrapper.classList.add('input-group-append');
        button.classList.add('btn', 'btn-primary');
        button.textContent='Добавить дело';

        button.disabled = true

        buttonWrapper.append(button);
        form.append(input);
        form.append(buttonWrapper);

        input.addEventListener('input', function(e) {
            e.preventDefault();
            if (input.value.length > 0){
                button.disabled = false
            }
        })

        return{
            form,
            input,
            button,
        };
    }
    //создаем и возвращаем список элементов
    function createTodoList() {
        let list=document.createElement('ul');
        list.classList.add('list-group');
        return list;
    }

    function createTodoItem(toDo,toDoList,listName){
        let item=document.createElement('li');
        //кнопки помещаем в элемент который красиво покажет их в одной группе
        let buttonGroup=document.createElement('div');
        let doneButton=document.createElement('button');
        let deleteButton=document.createElement('button');

        //устанавливаем стили для элемента списка, а также для размещения кнопок
        //в его правой части с помощью flex
        item.classList.add('list-group-item','d-flex','justify-content-between','align-items-center');
        item.textContent=toDo.name;

        buttonGroup.classList.add('btn-group','btn-group-sm');
        doneButton.classList.add('btn', 'btn-success');
        doneButton.textContent='Готово';
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.textContent='Удалить';

        if (toDo.done)
            item.classList.add('list-group-item-success')

        doneButton.addEventListener('click', function(){
            item.classList.toggle('list-group-item-success');
            toDoList = toDoList.map(el => {
                if (el.id == toDo.id)
                    el.done = !el.done
                return el
            } )
            console.log(toDoList)
            SetData(listName, toDoList)
        });
        deleteButton.addEventListener('click',function(){
            if (confirm('Вы уверены?')){
                item.remove();
                toDoList = toDoList.filter(e=> e.id !== toDo.id)
                SetData(listName, toDoList)
            }
        })

        //вкладываем кнопки в отдельный элемент, чтобы они объединились в один блок
        buttonGroup.append(doneButton);
        buttonGroup.append(deleteButton);
        item.append(buttonGroup);

        //приложению нужен доступ к самому элементу и кнопкам, чтобы отрабатывать события нажатия
        return item
    }

    const GetId = arr =>{
        len = arr.length
        return len==0 ? 1 : arr[len-1].id+1
    }

    const SetData = (key, data) => localStorage.setItem(key,JSON.stringify(data))

    const GetData = key => JSON.parse(localStorage.getItem(key))
    
    function createTodoApp(container,title='Список дел', listName) {
        let todoAppTitle=createAppTitle(title);
        let todoItemForm=createTodoItemForm();
        let todoList=createTodoList();

        container.append(todoAppTitle);
        container.append(todoItemForm.form);
        container.append(todoList);

        let toDoList =[]

        if (GetData(listName)){
            toDoList = GetData(listName)
            toDoList.forEach(el => {
                let todoItem = createTodoItem(el,toDoList,listName)
                todoList.append(todoItem)
            })
        }

        //браузер создает событие submit на форме по нажатию на Enter или на кнопку создания дела
        todoItemForm.form.addEventListener('submit', function(e){
            //данная строчка необходима, чтобы предотвратить стандартное действие браузера
            //в данном случае мы не хотим, чтобы страница перезагружалась при отправке формы
            e.preventDefault();

            //игнорируем создание элемента, если пользователь нечего не ввел в поле
           
            if (!todoItemForm.input.value){
                return ;
            }

            const toDo = {
                name: todoItemForm.input.value,
                done: false, 
                id:GetId(toDoList)}

            let todoItem=createTodoItem(toDo,toDoList,listName)       
            toDoList.push(toDo)
            SetData(listName, toDoList)
            
            //создаем и добавляем в список новое дело с навзванием поля для ввода
            todoList.append(todoItem);
            //обнуляем значение в поле
            todoItemForm.input.value='';
        })
    }

    window.createTodoApp=createTodoApp;
})();
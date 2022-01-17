window.addEventListener('load', function () { // ждем загрузки всей HTML структуры

class TaskList {
    #tasks = [];

    inputTask(){
        let divInput = document.querySelector('.container_input');
        let input = divInput.querySelector('input[name="task"]');
        input.addEventListener('keyup', function (event) { // отпускание клавиши
            if (event.keyCode === 13){
                timetable.setTasks();
                event.target.value = '';
            }
        });
    }

    setTasks(task = []){
        let divInput = document.querySelector('.container_input');
        let input = divInput.querySelector('input[name="task"]');
        task.push(false); // пока не используется (задел на будущее)
        task.push(input.value);
        this.#tasks.push(task);
        this.#displayTasks();
    }

    #displayTasks(){
        let task_num = this.#tasks.length;
        let divTask = document.querySelector('.container_task');

        if(this.#tasks){
            let div_singleTask = document.createElement('div'); // создал вложенный div
            div_singleTask.classList.add('single_task_container'); // добавил класс
            divTask.appendChild(div_singleTask); // вставил вложенный div

            let div_checkBox = document.createElement('div'); // создал вложенный div
            div_checkBox.classList.add('task_checkbox_container'); // добавил класс
            div_singleTask.appendChild(div_checkBox); // вставил вложенный div

            let checkBox = document.createElement('input'); // создал элемент input
            checkBox.classList.add('checkbox'); // добавил класс
            checkBox.setAttribute('type', 'checkbox'); // добавил атрибут type
            checkBox.setAttribute('name', 'task_checkbox'); // добавил атрибут name
            checkBox.setAttribute('id', 'checkbox' + task_num); // добавил атрибут id
            div_checkBox.appendChild(checkBox); // вставил input

            let div_checkName = document.createElement('div'); // создал вложенный div
            div_checkName.classList.add('task_name_container'); // добавил класс
            div_singleTask.appendChild(div_checkName); // вставил вложенный div

            let taskName = document.createElement('p'); // создал элемент p
            taskName.innerHTML = this.#tasks[task_num - 1][1]; // присвоил имя задаче
            taskName.setAttribute('id', 'task' + task_num); // добавил id
            div_checkName.appendChild(taskName); // вставил название задачи

            this.completedTask();
        }
    }

    completedTask() {
        let checkBox = document.querySelectorAll('input[name="task_checkbox"]');
        for (let i = 0; i < checkBox.length; i++) {
            let taskName = document.querySelector('#task' + (i + 1));
            checkBox[i].addEventListener('click', function () {
                if (checkBox[i].checked) {
                    taskName.classList.add('completed');
                } else {
                    if (taskName.classList.contains('completed')) {
                        taskName.classList.remove('completed');
                    }
                }

            });
        }

    };
}

let timetable = new TaskList ();
timetable.inputTask();

});

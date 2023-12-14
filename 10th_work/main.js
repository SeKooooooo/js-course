(function(){
    let studentList=[]
    const createField = (info)=>{
        let field = document.createElement('li')
        field.textContent = info
        return field
    }

    const createStudent = (info)=>{
        const student = document.createElement('ul')
        student.classList.add('table-row')
        for (let key in info){
            switch (key){
                case 'name':
                {
                    student.append(createField(info[key]))
                    break
                }      
                case 'faculty':
                {
                    student.append(createField(info[key]))
                    break
                }   
                case 'birthday':
                {   
                    const dr = info[key].split('-')
                    const now = new Date()
                    const today = new Date(now.getFullYear(), dr[1], dr[2])
                    const drnow = new Date(now.getFullYear(), dr[1], dr[2])
                    const year = today.getFullYear() - dr[0]
                    let field = document.createElement('li')
                    field.textContent = `${dr[2]}.${dr[1]}.${dr[0]} (${drnow > today? year -1 : year})`
                    student.append(field)
                    break
                }
                case 'yearsOfEducation':
                {
                    const now = new Date()
                    let kurs =  now.getFullYear()-info[key]
                    kurs = now.getMonth() >= 8 ? kurs+=1 : kurs
                    let field = document.createElement('li')
                    field.textContent = info[key] + '-' + (info[key]+4) + `(${kurs<5? kurs: 'Закончил'})`
                    student.append(field)
                }
            }
        }
        student.dataset.id = info.id
        const close = document.createElement('li')
        close.classList.add('close')
        student.append(close)
        return student
    }

    const chechValues = (newStud) =>{
        const now = new Date()
        const drArr = newStud.birthday.split('-')
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDay())
        const last = new Date(1900,0,0)
        const dr = new Date(drArr[0], drArr[1]-1, drArr[2])
        for(let key in newStud){
            if (newStud[key]== 0)
                return false
        }
        const nameArr = newStud.name.split(' ').filter(Boolean);
        if (nameArr.length < 3 || nameArr.length>3)
            return false
        if (newStud.yearsOfEducation > now.getFullYear() ||  newStud.yearsOfEducation< 2000)
            return false
        if (dr > today | dr < last)
            return false
        return true
    }

    const createId= () => {
        curId = studentList.map(el => {
            return el.id
        })
        let newId = Math.round(Math.random()*1000+1)
        while (curId.includes(newId)){
            newId = Math.round(Math.random()*1000+1)
        }
        return newId
    }

    const deleteStudent = (el) =>{
        const row = el.parentNode
        const id = Number(row.dataset.id)
        fetch(`http://localhost:3000/students/${id}`,{
            method: 'delete'
        })
        studentList = studentList.filter(el => el.id !== id)
        updateList(studentList)
    }

    const addStudent=  (add, btnAdd)=>{
        const name = document.querySelector('.name-input')
        const faculty = document.querySelector('.faculty-input')
        const birthday = document.querySelector('.birthday-input')
        const year = document.querySelector('.year-input')
        const btnInput = document.querySelector('.btn-submit')
        btnInput.onclick= async() => {
            const newStud={
                id: createId(),
                name: name.value,
                faculty:faculty.value,
                birthday: birthday.value,
                yearsOfEducation: Number(year.value)
            }
            if (chechValues(newStud)) {
                studentList.push(newStud)
                await fetch('http://localhost:3000/students',{
                    method: 'post',
                    headers:{'Accept': 'application/json',
                            'Content-Type': 'application/json'},
                    body: JSON.stringify(newStud)
                })
                updateList(studentList)
                if (!add.classList.contains('none')) add.classList.add('none')
                btnAdd.classList.remove('none')
                name.value = ""
                faculty.value = ""
                birthday.value = ""
                year.value = ""
            }
        }
    }


    const updateList = (list)=>{
        const table = document.querySelector('.table')
        const tableStud = table.querySelectorAll('.table-row')
        tableStud.forEach(el => el.remove())
        list.forEach(el => {
            const student = createStudent(el)
            table.append(student)
        })}

    const filter = (name, callback) =>{
        let studentListFilters=studentList.slice(0)
        const item = document.querySelector(`.filter-${name}-input`)
        if (item === 0) return
        const list = studentListFilters.filter(el=>callback(el, item))
        updateList(list)
    }

    const createTable = async() => {
 
        const sortings = [{elem: document.querySelector('.name'), sorting: (a, b) => a.name > b.name ? 1 : -1},
            {elem: document.querySelector('.faculty'), sorting: (a, b) => a.faculty > b.faculty ? 1 : -1},
            {elem: document.querySelector('.age'), sorting: (a, b) => a.birthday - b.birthday > 0 ? 1 : -1},
            {elem: document.querySelector('.years-of-education'), sorting: (a, b) => a.yearsOfEducation - b.yearsOfEducation > 0 ? 1 : -1}
        ]

        const response = await fetch('http://localhost:3000/students')
        studentList = [...await response.json()]
        updateList(studentList)
        const btnFilterName = document.querySelector('.filter-btn-name')
        btnFilterName.onclick = () => filter('name',(el, item) => el.name.includes(item.value))

        const btnFilterFaculty = document.querySelector('.filter-btn-faculty')
        btnFilterFaculty.onclick = () => filter('faculty',(el,item) => el.faculty.includes(item.value))

        const btnFilterFYear = document.querySelector('.filter-btn-fyear')
        btnFilterFYear.onclick = () => filter('fyear',(el,item) =>item.value!=="" ? el.yearsOfEducation === Number(item.value):true)

        const btnFilterLYear = document.querySelector('.filter-btn-lyear')
        btnFilterLYear.onclick = () => filter('lyear',(el,item) =>item.value!=="" ? el.yearsOfEducation === Number(item.value)-4:true)

        const btnAdd = document.querySelector('.add-student')
        btnAdd.addEventListener('click', function(){
            btnAdd.classList.add('none')
            const add = document.getElementById('add')
            if (add.classList.contains('none')) add.classList.remove('none')
            addStudent(add,btnAdd)
        })

        const btnDelete = document.querySelectorAll('.close')
        console.log(btnDelete)
        btnDelete.forEach(el => el.addEventListener('click',() => {deleteStudent(el)}))

        sortings.forEach(el => el.elem.addEventListener('click', () => {
            studentList.sort(el.sorting)
            updateList(studentList)
        }))
    }
    document.addEventListener('DOMContentLoaded', function(){
        createTable(document.getElementById('tabl'))
    })
})()
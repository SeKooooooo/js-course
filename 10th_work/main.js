(function(){
    let studentList=[]
    const stud1 = {
        name: 'Аочнев Сергей Валерьевич',
        faculty: 'Радио-технический',
        birthday: '2004-10-16',
        yearsOfEducation: 2022
    }
    const stud2= {
        name: 'Кочнева Елена Валерьевич',
        faculty: 'Физико-технический',
        birthday: '2003-10-16',
        yearsOfEducation: 2021
    }
    studentList.push(stud2)
    studentList.push(stud1)
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

    const addStudent= (add, btnAdd)=>{
        const name = document.querySelector('.name-input')
        const faculty = document.querySelector('.faculty-input')
        const birthday = document.querySelector('.birthday-input')
        const year = document.querySelector('.year-input')
        const btnInput = document.querySelector('.btn-submit')
        btnInput.onclick=function(){
            const newStud={
                name: name.value,
                faculty:faculty.value,
                birthday: birthday.value,
                yearsOfEducation: Number(year.value)
            }
            if (chechValues(newStud)) {
                studentList.push(newStud)
                updateList(studentList)
                if (!add.classList.contains('none')) add.classList.add('none')
                btnAdd.classList.remove('none')
                name.value = ""
                faculty.value = ""
                birthday.value = ""
                year.value = ""
            }
            else{
                
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
        
    const filterName = () =>{
        let studentListFilters=studentList.slice(0)
        const name = document.querySelector('.filter-name-input')
        if (name === 0) {
            updateList(studentList)
        }
        const list = studentListFilters.map(el=> {
            if (el.name.includes(name.value))
                return el
        })
        updateList(list)
    }

    const filterFaculty = () =>{
        let studentListFilters=studentList.slice(0)
        const faculty = document.querySelector('.filter-faculty-input')
        if (faculty === 0) {
            updateList(studentList)
        }
        const list = studentListFilters.map(el=> {
            if (el.faculty.includes(faculty.value))
                return el
        }) 
        updateList(list)
    }

    const filterFYear = () =>{
        let studentListFilters=studentList.slice(0)
        const year = document.querySelector('.filter-fyear-input')
        if (year === 0) {
            updateList(studentList)
        }
        const list = studentListFilters.map(el=> {
            if (el.yearsOfEducation === Number(year.value))
                return el
        }) 
        updateList(list)
    }

    const filterLYear = () =>{
        let studentListFilters=studentList.slice(0)
        const year = document.querySelector('.filter-lyear-input')
        if (year === 0) {
            updateList(studentList)
        }
        const list = studentListFilters.map(el=> {
            if (el.yearsOfEducation === Number(year.value)-4)
                return el
        }) 
        updateList(list)
    }

    const createTable = () => {
        updateList(studentList)
        const btnFilterName = document.querySelector('.filter-btn-name')
        btnFilterName.onclick = function(){
            filterName()
        }
        const btnFilterFaculty = document.querySelector('.filter-btn-faculty')
        btnFilterFaculty.onclick = function(){
            filterFaculty()
        }
        const btnFilterFYear = document.querySelector('.filter-btn-fyear')
        btnFilterFYear.onclick = function(){
            filterFYear()
        }
        const btnFilterLYear = document.querySelector('.filter-btn-lyear')
        btnFilterLYear.onclick = function(){
            filterLYear()
        }
        const btnAdd = document.querySelector('.add-student')
        btnAdd.addEventListener('click', function(){
            btnAdd.classList.add('none')
            const add = document.getElementById('add')
            if (add.classList.contains('none')) add.classList.remove('none')
            addStudent(add,btnAdd)
        })
        const btnName = document.querySelector('.name')
        btnName.addEventListener('click', function(){
            studentList.sort((a, b) => a.name > b.name ? 1 : -1)
            updateList(studentList)
        })
        const btnFaculty = document.querySelector('.faculty')
        btnFaculty.addEventListener('click', function(){
            studentList.sort((a, b) => a.faculty > b.faculty ? 1 : -1)
            updateList(studentList)
        })
        const btnAge = document.querySelector('.age')
        btnAge.addEventListener('click', function(){
            studentList.sort((a, b) => a.birthday - b.birthday > 0 ? 1 : -1)
            updateList(studentList)
        })
        const btnYear = document.querySelector('.years-of-education')
        btnYear.addEventListener('click', function(){
            studentList.sort((a, b) => a.yearsOfEducation - b.yearsOfEducation > 0 ? 1 : -1)
            updateList(studentList)
        })
    }
    document.addEventListener('DOMContentLoaded', function(){
        createTable(document.getElementById('tabl'))
    })
})()
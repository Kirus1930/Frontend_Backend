const password = '12345'
let parol = prompt('Введите пароль:')
parol = parol.toString()

if(parol != null)
    if(parol == password)
        alert(`Доступ разрешен`)
    else
        alert(`Доступ запрещен`)
else
    alert(`Введен пустой пароль`)
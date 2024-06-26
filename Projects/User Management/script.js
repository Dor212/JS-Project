

const users = [];
const table = document.querySelector('table');
const form = document.getElementById('register');
const fromLog = document.getElementById('formLogin')
const emailLogin = document.getElementById('emailLogin');
const passwordLogin = document.getElementById('passwordLogin');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
const obj = {
    fName: e.target['fName'].value,
    lName: e.target['lName'].value,
    email: e.target['email'].value,
    password: e.target['password'].value
}
users.push(obj);

const tbody = document.querySelector('tbody');
const fName = obj.fName;
const lName = obj.lName;
const email = obj.email;
const password = obj.password;
tbody.innerHTML+= `
<tr id = "row">
<td>${fName}</td>
<td>${lName}</td>
<td>${email}</td>
<td>${password}</td>
<td>
<button id = "deleteBtn" onclick="deleteRow()">הסר</button>
</td>
<td>
<button id = "loginBtn" onclick = "logOut()">מחובר</button>
</td>
<td>
<button id = "edit" onclick="editUser()">ערוך משתמש</button>
</td>
</tr>
`;
})
fromLog.addEventListener('submit', ()=>{
class Login {
    email;
    password;
    login;

    constructor(email, password){
        this.email = email;
        this.password = password;
    };
    if () {
        
    }

}


    if(Login === email && passwordLogin === password){
    isLogin = true;
    if(isLogin = true){
        const loginBtn = document.getElementById('loginBtn');
        loginBtn.style.backgroundColor = 'green';
        loginBtn.innerHTML = 'מחובר';
    } else {
        const loginBtn = document.getElementById('loginBtn');
        loginBtn.style.backgroundColor = 'red';
        loginBtn.innerHTML = 'לא מחובר';
    }
};
})

function deleteRow() {
    document.getElementById('row').remove();
}
function logOut() {
    const loginBtn = document.getElementById('loginBtn');
    loginBtn.style.backgroundColor = 'red';
    loginBtn.innerHTML = 'לא מחובר'
    return loginBtn = false ;
}
function editUser (){
    
}





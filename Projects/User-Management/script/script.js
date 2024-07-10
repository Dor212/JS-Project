function renderUserTable() {
    const tableBody = document.getElementById('myTable');
    tableBody.innerHTML = '';

    users.forEach((user, index) => {
        const row = tableBody.insertRow();
        row.innerHTML += `
            <tr id = 'row'>
            <td>${user.fName}</td>
            <td>${user.lName}</td>
            <td>${user.email}</td>
            <td>${user.password}</td>
            <td><button onclick="deleteRow(${index})">הסר</button></td>
            <td><button id="loginBtn${index}" style="background-color: ${user.logged ? '#2A629A' : 'red'};">${user.logged ? 'מחובר' : 'לא מחובר'}</button></td>
            <td><button onclick="editUser(${index})" ${user.logged ? '' : 'disabled'}>ערוך משתמש</button></td>
            </tr>
        `;
    });
}

const users = [];
const table = document.querySelector('table');
const form = document.getElementById('register');
const fromLog = document.getElementById('formLogin')
form.addEventListener('submit', (e)=>{
    e.preventDefault();
const obj = {
    fName: e.target['fName'].value,
    lName: e.target['lName'].value,
    email: e.target['email'].value,
    password: e.target['password'].value,
    logged: false
}
users.push(obj);
renderUserTable();
e.target.reset();
})

function login(user) {
    const loginBtnT = document.getElementById(`loginBtn${users.indexOf(user)}`);
    loginBtnT.style.backgroundColor = 'blue';
    loginBtnT.innerHTML = 'מחובר'; 
    user.logged = true;
    renderUserTable();
}

function checkLogin() {
    const emailLogin = document.getElementById('emailLogin').value;
    const passwordLogin = document.getElementById('passwordLogin').value;

    const matchingUser = users.find(user => user.email === emailLogin && user.password === passwordLogin);

    if (matchingUser) {
        login(matchingUser);
    } else {
        alert('Invalid email or password');
    }
}

function deleteRow() {
    document.getElementById('row').remove();
}
document.getElementById('btnLogin').addEventListener('click', function(e) {
    e.preventDefault(); 
    checkLogin();
});


function editUser(index) {
    const user = users[index];
    const editForm = document.getElementById('editForm');

    document.getElementById('editIndex').value = index;
    document.getElementById('editFName').value = user.fName;
    document.getElementById('editLName').value = user.lName;
    document.getElementById('editEmail').value = user.email;
    document.getElementById('editPassword').value = user.password;

    editForm.style.display = 'block';
    const tableRow = document.getElementById('userTable').rows[index + 1]; 
    tableRow.style.display = 'none';
}

function cancelEdit() {
    document.getElementById('editForm').style.display = 'none';
    renderUserTable(); 
}

document.getElementById('editForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const index = parseInt(document.getElementById('editIndex').value, 10);
    users[index].fName = document.getElementById('editFName').value;
    users[index].lName = document.getElementById('editLName').value;
    users[index].email = document.getElementById('editEmail').value;
    users[index].password = document.getElementById('editPassword').value;

    document.getElementById('editForm').style.display = 'none';
    renderUserTable();
});
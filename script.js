const doctors = {
    "doctor1": "pass123",
    "doctor2": "pass456"
};

function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    if (doctors[username] && doctors[username] === password) {
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'form.html';
    } else {
        document.getElementById('login-error').innerText = "Invalid credentials!";
    }
}

function submitDetails() {
    const college = document.getElementById('college').value;
    const batch = document.getElementById('batch').value;
    const name = document.getElementById('name').value.trim();

    if (college && batch && name) {
        localStorage.setItem('college', college);
        localStorage.setItem('batch', batch);
        localStorage.setItem('name', name);
        window.location.href = 'dashboard.html';
    } else {
        alert("Please fill all fields!");
    }
}

function loadDashboard() {
    const batch = localStorage.getItem('batch');
    const name = localStorage.getItem('name');
    if (batch && name) {
        document.getElementById('availability').innerHTML = `<h3>${batch}</h3><p>Doctor: ${name}</p>`;
    } else {
        window.location.href = 'form.html';
    }
}

if (document.getElementById('availability')) {
    loadDashboard();
}

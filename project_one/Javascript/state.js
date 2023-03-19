import data from './data.js';
const state = document.getElementById("state");
const user = document.getElementById("user_name");
user.addEventListener("change", (event) => {
    let state_list = document.getElementById("state_list");
    if (checkName(event.target.value, "user_name_list") == false) {
        event.target.value = "";
        state_list.innerHTML = "";
        state.value = "";
        alert("Enter Valid User Name");
        return;
    }
})

state.addEventListener("change", (event) => {
    if (checkName(event.target.value, "state_list") == false) {
        state.value = "";
        alert("Enter Valid State");
        return;
    }
})

function print_state_home(e_id) {
    var x = document.getElementById(e_id);
    if (x == null) return;
    for (var i = 0; i < data.length; i++) {
        var opt = document.createElement('option');
        opt.value = data[i].state;
        x.insertAdjacentElement("beforeend", opt);
    }
}
print_state_home("state_list");

const checkName = (name, id_name) => {
    let rec = document.getElementById(id_name);
    let opt = rec.getElementsByTagName("option");
    let flag = 0;
    for (let i = 0; i < opt.length; i++) {
        if (opt[i].value == name) flag = 1;
    }
    return flag == 1;
}

// const scrollElement = document.getElementById("htm");
let uids = ["user_id", "user_name", "state"];
const rows = document.querySelectorAll('.test');
rows.forEach(row => {
    row.addEventListener('click', (event) => {
        // let del_state;
        const tds = row.querySelectorAll('td');
        let i = 0;
        tds.forEach(td => {
            if (i == 3) {
                return;
            }
            document.getElementById(uids[i]).value = td.innerText;
            i++;
        });
        if (event.target.classList.contains('btn-danger')) {
            delete_that_boi(event);
            return;
        }
        if (event.target.childElementCount == 1) {
            return;
        }
    });
});


const delete_that_boi = (event) => {
    if (confirm("Are you sure you want to delete this record?") == false) return;
    const formData = new FormData(document.getElementById("form"));
    var xhr = new XMLHttpRequest();
    xhr.open('POST', './delete.php', true);
    xhr.onload = () => {
        if (xhr.status === 200) {
            console.log(xhr.responseText);
            alert("Record Deleted Successfully");
            window.location.href = "http://localhost/my/khata-book/project_one/index.php?master=state";
        }
    };
    xhr.send(formData);
}
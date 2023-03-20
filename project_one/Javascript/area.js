import data from './data.js';

const user = document.getElementById("user_name");
const state = document.getElementById("state");
const state_list = document.getElementById("state_list");
const city = document.getElementById("city");
const city_list = document.getElementById("city_list");
const area = document.getElementById("area");
const area_list = document.getElementById("area_list");

user.addEventListener("change", (event) => {
    state_list.innerHTML = "";
    state.value = "";
    area_list.innerHTML = '';
    area.value = '';
    city.value = "";
    city_list.innerHTML = '';
    if (checkName(event.target.value, "user_name_list") == false) {
        event.target.value = "";
        alert("Enter Valid User Name");
        return;
    }
    document.getElementById("page").value = "city";
    const formData = new FormData(document.getElementById("form"));
    var xhr = new XMLHttpRequest();
    xhr.open('POST', './server.php', true);
    xhr.onload = () => {
        if (xhr.status === 200) {
            var stateByUser = xhr.responseText.split(",");
            for (let i = 1; i < stateByUser.length; i++) {
                var opt = document.createElement('option');
                opt.value = stateByUser[i];
                state_list.insertAdjacentElement("beforeend", opt);
            }
            // body.classList.toggle("loading");s
        }
    };
    xhr.send(formData);
})

let st_pos, i, ct_pos;
state.addEventListener("change", (event) => {
    city_list.innerHTML = "";
    city.value = "";
    area_list.innerHTML = '';
    area.value = '';
    if (checkName(event.target.value, "state_list") == false) {
        event.target.value = "";
        alert("Enter Valid User Name");
        return;
    }
    document.getElementById("page").value = "area";
    const formData = new FormData(document.getElementById("form"));
    var xhr = new XMLHttpRequest();
    xhr.open('POST', './server.php', true);
    xhr.onload = () => {
        if (xhr.status === 200) {
            var stateByUser = xhr.responseText.split(",");
            console.log(stateByUser);
            for (let i = 1; i < stateByUser.length; i++) {
                var opt = document.createElement('option');
                opt.value = stateByUser[i];
                city_list.insertAdjacentElement("beforeend", opt);
            }
            // body.classList.toggle("loading");s
        }
    };
    xhr.send(formData);
})


city.addEventListener("change", (event) => {
    area_list.innerHTML = '';
    area.value = '';
    if (checkName(event.target.value, "city_list") == false) {
        event.target.value = "";
        alert("Enter Valid City Name");
        return;
    }
    for (i = 0; i < data.length; i++) {
        if (data[i].state == state.value) {
            st_pos = i;
            break;
        }
    }
    for (i = 0; i < data[st_pos].cities.length; i++) {
        if (data[st_pos].cities[i].name == event.target.value) {
            ct_pos = i;
            break;
        }
    }
    for (i = 0; i < data[st_pos].cities[ct_pos].areas.length; i++) {

        var opt = document.createElement('option');
        opt.value = data[st_pos].cities[ct_pos].areas[i];
        area_list.insertAdjacentElement("beforeend", opt);

    }
})

area.addEventListener("change", (event) => {
    if (checkName(event.target.value, "area_list") == false) {
        event.target.value = "";
        alert("Enter Valid Area Name");
        return;
    }
})
const checkName = (name, id_name) => {
    let rec = document.getElementById(id_name);
    let opt = rec.getElementsByTagName("option");
    let flag = 0;
    for (let i = 0; i < opt.length; i++) {
        if (opt[i].value == name) flag = 1;
    }
    return flag == 1;
}



let uids = ["user_id", "user_name", "state", "city", "area"];
const rows = document.querySelectorAll('.test');
rows.forEach(row => {
    row.addEventListener('click', (event) => {
        const tds = row.querySelectorAll('td');
        let i = 0;
        tds.forEach(td => {
            if (i == 5) {
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
            alert("Record Deleted Successfully");
            location.reload();
        }
    };
    xhr.send(formData);
}
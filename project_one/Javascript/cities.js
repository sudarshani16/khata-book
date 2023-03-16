import data from './data.js';

function print_state(e_id) {
    var x = document.getElementById(e_id);
    if (x == null) return;
    for (var i = 0; i < data.length; i++) {
        var opt = document.createElement('option');
        opt.value = data[i].state;
        x.insertAdjacentElement("beforeend", opt);
    }
}
print_state("states");
var i, st_pos, ct_pos;
// Code for City input after State being selected
const state = document.getElementById("state");
state.addEventListener("change", (e) => {
    document.getElementById("cities").innerHTML = '';
    var option_str = document.getElementById("cities");
    var st_name = e.target.value;
    for (i = 0; i < data.length; i++) {
        if (data[i].state == st_name) {
            st_pos = i;
            break;
        }
    }

    document.getElementById('city').value = '';
    document.getElementById('area').value = '';
    document.getElementById('areas').innerHTML = "";
    if (i == data.length) {
        alert("Enter Valid State");
        e.target.value = "";
        return;
    }
    for (i = 0; i < data[st_pos].cities.length; i++) {
        var opt = document.createElement('option');
        opt.value = data[st_pos].cities[i].name;
        option_str.insertAdjacentElement("beforeend", opt);
    }
});

// Code for area input after City being selected

const city = document.getElementById("city");
city.addEventListener("change", (e) => {
    if (document.getElementById('state').value == "") {
        alert("Select State First  ");
        e.target.value = "";
        return;
    }
    var option_str = document.getElementById("areas");
    var ct_name = e.target.value;
    for (i = 0; i < data[st_pos].cities.length; i++) {
        if (data[st_pos].cities[i].name == ct_name) {
            ct_pos = i;
            break;
        }
    }
    document.getElementById('area').value = '';
    document.getElementById('areas').innerHTML = "";
    if (data[st_pos].cities.length == i) {
        alert("Enter Valid City");
        e.target.value = "";
        return;
    }
    for (i = 0; i < data[st_pos].cities[ct_pos].areas.length; i++) {
        var opt = document.createElement('option');
        opt.value = data[st_pos].cities[ct_pos].areas[i];
        option_str.insertAdjacentElement("beforeend", opt);
    }
});
const recheck = document.getElementById('form');
recheck.addEventListener("submit", (e) => {
    e.preventDefault();
    var st = document.getElementById('state').value;
    var ct = document.getElementById('city').value;
    var ar = document.getElementById('area').value;
    var st_found = data.find(obj => obj.state === st);
    if (st_found) {
        var ct_found = st_found.cities.find(obj => obj.name === ct);
        if (ct_found) {
            var ar_found = ct_found.areas.indexOf(ar);
            if (ar_found == -1) {
                alert("Enter Valid Area");
                e.preventDefault();
            }
        } else {
            alert("Input Valid City ");
            e.preventDefault();
        }
    } else {
        alert("Input Valid State ");
        e.preventDefault();
    }
});




// City Js -----------

// let city_ = document.getElementById("city_");
// city_.addEventListener("change", (event) => {
//     let val = event.target.value;
//     console.log("Hello");
//     const formData = new FormData(document.getElementById("city_form"));
//     var xhr = new XMLHttpRequest();
//     xhr.open('POST', './server.php', true);
//     xhr.onload = () => {
//         if (xhr.status === 200) {
//             alert(xhr.responseText);
//         }
//     };
//     xhr.send(formData);
// });





// City Js -----------

const city_ = document.getElementById("cityie");
city_.addEventListener("change", (event) => {
    //     // let val = event.target.value;
    // console.log("Hello");
    const formData = new FormData(document.getElementById("city_form"));
    var xhr = new XMLHttpRequest();
    xhr.open('POST', './server.php', true);
    xhr.onload = () => {
        if (xhr.status === 200) {
            alert(xhr.responseText);
        }
    };
    xhr.send(formData);
});

// const fun = () => {
//     console.log("Hellllo");
// }
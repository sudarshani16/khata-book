import data from './data.js';
// Only for Home Page 
try {
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
    var i, st_pos, ct_pos, j;
    // Code for City input after State being selected
    const state = document.getElementById("state");
    state.addEventListener("change", (e) => {
        var option_str = document.getElementById("city_list");;
        option_str.innerHTML = '';
        var st_name = e.target.value;
        for (i = 0; i < data.length; i++) {
            if (data[i].state == st_name) {
                st_pos = i;
                break;
            }
        }

        document.getElementById('city').value = '';
        document.getElementById('area').value = '';
        document.getElementById('area_list').innerHTML = "";

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
        var option_str = document.getElementById("area_list");
        var ct_name = e.target.value;
        for (i = 0; i < data[st_pos].cities.length; i++) {
            if (data[st_pos].cities[i].name == ct_name) {
                ct_pos = i;
                break;
            }
        }

        document.getElementById('area').value = '';
        document.getElementById('area_list').innerHTML = "";

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

    //After Area get selected

    const area = document.getElementById("area");
    area.addEventListener("change", (event) => {
        let name = event.target.value;
        let rec = document.getElementById("area_list");
        let opt = rec.getElementsByTagName("option");
        let flag = 0;
        for (let i = 0; i < opt.length; i++) {
            if (opt[i].value == name) flag = 1;
        }
        if (flag != 1) {
            alert("Enter Valid Area");
            event.target.value = "";
        };
    })

} catch (error) {
    console.log(error);
}

// Home Page Script Ends Here
const scrollElement = document.getElementById("htm");
const rows = document.querySelectorAll('.test');
let uids = ["user_id", "user_name", "user_address", "state", "city", "area", "user_mobi", "user_balance", "user_type"];
rows.forEach(row => {
    row.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-danger')) {
            delete_that_boi(event);
            return;
        }
        if (event.target.childElementCount == 1) {
            return;
        }
        scrollElement.scrollTop = 0;
        const tds = row.querySelectorAll('td');
        let i = 0;
        tds.forEach(td => {
            if (i == 9) {
                return;
            }
            document.getElementById(uids[i]).value = td.innerText;
            i++;
        });
    });
});

const input = document.querySelectorAll("input");
input.forEach((data) => {
    data.setAttribute("autocomplete", "off");
})

const search = document.getElementById("search");
search.addEventListener("click", (data) => {
    let str = document.getElementById("search_name").value;
    if (checkName(str, "user_name_list") == false) {
        document.getElementById("search_name").value = "";
        document.getElementById("record").classList.add("show-hide");
        alert("Enter Valid User Name");
        return;
    }
    let id = "";
    let i = 0;
    while (str[i] != '.') {
        id += str[i];
        i++;
    }
    const user_rec = document.getElementById("searched_user")
    user_rec.innerHTML = document.getElementsByName(id)[0].innerHTML;
    user_rec.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-danger')) {
            delete_that_boi(event);
            return;
        }
        if (event.target.childElementCount == 1) {
            return;
        }
        scrollElement.scrollTop = 0;
        const tds = user_rec.querySelectorAll('td');
        let i = 0;
        tds.forEach(td => {
            if (i == 9) {
                return;
            }
            document.getElementById(uids[i]).value = td.innerText;
            i++;
        });
    });
    document.getElementById("record").classList.remove("show-hide");
})


const delete_that_boi = (event) => {
    console.log("Deleting in Progress " + event.target.id);
    if (confirm("Are you sure you want to delete this record?") == false) return;
    document.getElementById("user_id").value = event.target.id;
    const formData = new FormData(document.getElementById("form"));
    var xhr = new XMLHttpRequest();
    xhr.open('POST', './delete.php', true);
    xhr.onload = () => {
        if (xhr.status === 200) {
            alert("Record Deleted Successfully");
            window.location.href = "http://localhost/my/khata-book/project_one/index.php";
        }
    };
    xhr.send(formData);
}

const clear = document.getElementById("clear");
clear.addEventListener("click", (event) => {
    document.getElementById("search_name").value = "";
    document.getElementById("record").classList.add("show-hide");
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
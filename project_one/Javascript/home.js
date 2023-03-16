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
    print_state_home("states_home");
    print_state_home("states_state");
    var i, st_pos, ct_pos;
    // Code for City input after State being selected
    const state = document.getElementById("state_home");
    state.addEventListener("change", (e) => {
        document.getElementById("cities_home").innerHTML = '';
        var option_str = document.getElementById("cities_home");
        var st_name = e.target.value;
        for (i = 0; i < data.length; i++) {
            if (data[i].state == st_name) {
                st_pos = i;
                break;
            }
        }

        document.getElementById('city_home').value = '';
        document.getElementById('area_home').value = '';
        document.getElementById('areas_home').innerHTML = "";

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

    const city = document.getElementById("city_home");
    city.addEventListener("change", (e) => {
        if (document.getElementById('state_home').value == "") {
            alert("Select State First  ");
            e.target.value = "";
            return;
        }
        var option_str = document.getElementById("areas_home");
        var ct_name = e.target.value;
        for (i = 0; i < data[st_pos].cities.length; i++) {
            if (data[st_pos].cities[i].name == ct_name) {
                ct_pos = i;
                break;
            }
        }

        document.getElementById('area_home').value = '';
        document.getElementById('areas_home').innerHTML = "";

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

    const area = document.getElementById("area_home");
    area.addEventListener("change", (event) => {
        let name = event.target.value;
        let rec = document.getElementById("areas_home");
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

// City Page Script Begins Here

const state_city_page = document.getElementById("state");
state_city_page.addEventListener("change", (e) => {
    var option_str = document.getElementById("cities");
    option_str.innerHTML = '';
    var st_name = e.target.value;
    for (i = 0; i < data.length; i++) {
        if (data[i].state == st_name) {
            st_pos = i;
            break;
        }
    }
    document.getElementById("city").value = "";
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
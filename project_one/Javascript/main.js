const checkName = (name, id_name) => {
    let rec = document.getElementById(id_name);
    let opt = rec.getElementsByTagName("option");
    let flag = 0;
    for (let i = 0; i < opt.length; i++) {
        if (opt[i].value == name) flag = 1;
    }
    return flag == 1;
}

const filler = (name) => {
    if (checkName(name, "user_name_01") == false) {
        alert("Enter Valid User Name");
        document.getElementById("user_name_state").value = "";
    }
}

const chkState = (name) => {
    if (checkName(name, "states_state") == false) {
        alert("Enter Valid State Name");
        document.getElementById("state_state").value = "";
    }
}


const user_name = document.getElementById("user_name");
user_name.addEventListener("change", (event) => {
    let state = document.getElementById("states");
    let st = document.getElementById("state");
    if (checkName(event.target.value, "user_name_01") == false) {
        event.target.value = "";
        state.innerHTML = "";
        st.value = "";
        alert("Enter Valid User Name");
        return;
    }
    // let body = document.getElementById("body");
    // body.classList.toggle("loading");
    st.value = "";
    const formData = new FormData(document.getElementById("form"));
    var xhr = new XMLHttpRequest();
    xhr.open('POST', './server.php', true);
    xhr.onload = () => {
        if (xhr.status === 200) {
            var stateByUser = xhr.responseText.split(",");
            console.log(stateByUser);
            state.innerHTML = "";

            for (let i = 1; i < stateByUser.length; i++) {
                var opt = document.createElement('option');
                opt.value = stateByUser[i];
                state.insertAdjacentElement("beforeend", opt);
            }
            // body.classList.toggle("loading");s
        }
    };
    xhr.send(formData);
});
const user = {
    name: "Jane Doe", 
    id: 0, 
    phone: 9197412772, 
    email: "jane@gmail.com", 
    password: "password",
    blurb: "Hello, world!",
    project_list: [],
    matche_list: [],
    friend_list: [],
    tags_is: [],
    tags_looking: []
};

const project = {
    name: "p00", 
    id: 0, 
    blurb: "This is my project.",
    tags: []
};

const user_base = {
    id_num: 0, 
    array: []
};

const proj_base = {
    id_num: 0,
    array: []
};

function setName() {
    let x = document.getElementById("name").value;
    user.name = x;
    document.write("name added");
}
class User {
    constructor(name, phone, email, password, blurb, tags_is, tags_looking) {
        this.name = name;
        this.id = 0;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.blurb = blurb;
        this.proj_list = [];
        this.matches_list = [];
        this.tags_is = tags_is;
        this.tags_looking = tags_looking;
    };

    /**
     * @param {number} num
     */
    set id_num(num) {
        this.id = num;
    }
}

class Project {
    constructor(name, blurb, tags) {
        this.name = name;
        this.id = 0;
        this.blurb = blurb;
        this.tags = tags;
    }
};

const user_base = {
    id_num: 0, 
    array: []
};

const proj_base = {
    id_num: 0,
    array: []
};

function setUser() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let blurb = document.getElementById("blurb").value;
    const is = [document.getElementById("is0").value, document.getElementById("is1").value, document.getElementById("is2").value, document.getElementById("is3").value, document.getElementById("is4").value];
    const looking = [document.getElementById("looking0").value, document.getElementById("looking1").value, document.getElementById("looking2").value, document.getElementById("looking3").value, document.getElementById("looking4").value];
    let newbie = new User(name, phone, email, password, blurb, is, looking);
    newbie.id_num(user_base.id_num);
    user_base.id_num++;
    user_base.array.push(newbie);
}

var currentUser;
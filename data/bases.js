var currentUser;
var currentID = -1;

class User {
    constructor(name, id, phone, email, password, blurb, tags_is, tags_looking) {
        this.name = name;
        this.id = id;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.blurb = blurb;
        this.matches_list = [];
        this.tags_is = tags_is;
        this.tags_looking = tags_looking;
    };

    get name() {
        return this.name;
    }

}

const user_base = {
    id_num: 23, 
    arr: [
        new User("Pearot", 0, 9193498009, "pearrot@email.com", "pw0", "hi", ["backend","frontend","fullstack","designer","manager"], []),
        new User("Pierrot", 1, 9193498009, "pearrot@email.com", "pw1", "hi", [], []),
        new User("Pear", 2, 9193498009, "pear@email.com", "pw2", "hi", [], ["backend","frontend","fullstack","designer","manager"]),
        new User("Pearry", 3, 9193498009, "peardy@email.com", "pw3", "hi", ["backend","frontend","fullstack","designer","manager"], ["backend","frontend","fullstack","designer","manager"]),
        new User("Peartrus", 4, 9193498009, "p4@email.com", "pw4", "hi", ["backend","frontend","fullstack","javascript","c"], ["anything","frontend","fullstack","designer","c"]),
        new User("Robespear", 5, 9193498009, "p5@email.com", "pw5", "hi", ["backend","frontend","fullstack","designer","manager"], ["anything","anything","anything","anything","anything"]),
        new User("Peardro", 6, 9193498009, "p6@email.com", "pw6", "hi", ["anything","anything","anything","anything","anything"], ["anything","anything","anything","anything","anything"]),
        new User("Pea", 7, 9193498009, "annie@email.com", "pw7", "hi", ["backend","frontend","fullstack","designer","manager"], ["backend","frontend","fullstack","designer","manager"]),
        new User("Reap", 8, 9193498009, "bnnie@email.com", "pw8", "hi", ["backend","frontend","fullstack","designer","manager"], ["backend","frontend","fullstack","designer","manager"]),
        new User("Pearity", 9, 9193498009, "cnnie@email.com", "pw9", "hi", ["backend","javascript","fullstack","c","manager"], ["backend","frontend","fullstack","designer","manager"]),
        new User("Citrus", 10, 9193498009, "dnnie@email.com", "pw10", "hi", ["backend","frontend","java","designer","manager"], ["backend","frontend","fullstack","designer","manager"]),
        new User("Apple", 11, 9193498009, "ennie@email.com", "pw11", "hi", ["anything","anything","anything","anything","anything"], ["backend","frontend","fullstack","designer","manager"]),
        new User("Lemon", 12, 9193498009, "fnnie@email.com", "pw12", "hi", ["backend","frontend","fullstack","designer","manager"], ["backend","frontend","fullstack","designer","manager"]),
        new User("Thyme", 13, 9193498009, "gnnie@email.com", "pw13", "hi", ["backend","frontend","java","designer","manager"], ["anything","frontend","c","designer","manager"]),
        new User("Grape", 14, 9193498009, "hnnie@email.com", "pw14", "hi", ["c","frontend","fullstack","designer","manager"], ["backend","frontend","fullstack","designer","manager"]),
        new User("Juice", 15, 9193498009, "innie@email.com", "pw15", "hi", ["backend","frontend","fullstack","designer","manager"], ["backend","c","fullstack","designer","manager"]),
        new User("Cindy", 16, 9193498009, "jnnie@email.com", "pw16", "hi", ["backend","c","fullstack","designer","manager"], ["backend","frontend","fullstack","designer","c"]),
        new User("Pansy", 17, 9193498009, "knnie@email.com", "pw17", "hi", ["backend","frontend","fullstack","designer","manager"], ["backend","anything","c","designer","manager"]),
        new User("Bull", 18, 9193498009, "lnnie@email.com", "pw18", "hi", ["backend","frontend","fullstack","designer","manager"], ["backend","frontend","fullstack","designer","manager"]),
        new User("Sydney", 19, 9193498009, "mnnie@email.com", "pw19", "hi", ["backend","frontend","fullstack","designer","manager"], ["c","frontend","fullstack","designer","manager"]),
        new User("Ruth", 20, 9193498009, "nnnie@email.com", "pw20", "hi", ["backend","frontend","javascript","designer","anything"], ["backend","frontend","fullstack","java","manager"]),
        new User("Lili", 21, 9193498009, "onnie@email.com", "pw21", "hi", ["backend","anything","fullstack","designer","manager"], ["backend","frontend","fullstack","designer","manager"]),
        new User("Ruiyi", 22, 9193498009, "pnnie@email.com", "pw22", "hi", ["backend","frontend","fullstack","anything","manager"], ["backend","frontend","c","javascript","java"]),
        new User("Pearl", 23, 9193498009, "pppp@email.com", "pw23", "hi", ["backend","frontend","fullstack","designer","manager"], ["javascript","c","fullstack","designer","manager"]),
    ]
};

function setUser() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let blurb = document.getElementById("blurb").value;
    const is = [document.getElementById("is0").value, document.getElementById("is1").value, document.getElementById("is2").value, document.getElementById("is3").value, document.getElementById("is4").value];
    const looking = [document.getElementById("looking0").value, document.getElementById("looking1").value, document.getElementById("looking2").value, document.getElementById("looking3").value, document.getElementById("looking4").value];
    let num = user_base.id_num;
    user_base.id_num++;
    let newbie = new User(name, num, phone, email, password, blurb, is, looking);
    user_base.arr.push(newbie);
}

function setCurrent(login, pw) {
    for (let i = 0; i < user_base.id_num; i++) {
        if(user_base.arr[i].email == login && user_base.arr[i].password == pw) {
            currentUser = user_base.arr[i];
            currentID = user_base.arr[i].id;
            localStorage.setItem("current", JSON.stringify(currentUser));
            alert("Happy pearing!")
        }
    }
    if (currentID == -1) {
        alert("Incorrect username or password.")
    }
}

function getCurrent() {
    localStorage.getItem("current");
    return JSON.parse(window.localStorage.getItem("current"));
}

function findMatches() {
    currentUser = getCurrent();
    let other = Math.floor(Math.random() * user_base.id_num);
    
    if (user_base.arr[other] != currentUser) {
        //iterate through other's skills
        let j = 0;
        let stop = false;
        while (j < 5 && stop == false) {
            //iterate through wants skills
            let k = 0;
            while (k < 5 && stop == false) {
                if (user_base.arr[other].is[j] == currentUser.looking[k] || currentUser.looking[k] == "anything") {
                    currentUser.matches_list.push(user_base.arr[other]);
                    matched++;
                    stop = true;
                }
                k++;
            }
            j++;
        }
    }
    //iterate through users
    let i = 0;
    let matched = 0;
    while (i < user_base.id_num && matched <= 6) {
        let other = Math.floor(Math.random() * user_base.id_num);
        if (user_base.arr[other] != currentUser) {
            //iterate through other's skills
            let j = 0;
            let stop = false;
            while (j < 5 && stop == false) {
                //iterate through wants skills
                let k = 0;
                while (k < 5 && stop == false) {
                    if (user_base.arr[other].is[j] == currentUser.looking[k] || currentUser.looking[k] == "anything") {
                        currentUser.matches_list.add(user_base.arr[other]);
                        matched++;
                        stop = true;
                    }
                    k++;
                }
                j++;
            }
        }
        i++;
    }
}
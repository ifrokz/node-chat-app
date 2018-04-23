[{
    id: '/#12l;je;kl32',
    name: 'Ivan',
    room: "The Office Fans"
}]

class User {
    constructor(id,name,room){
        this.name = name;
        this.room = room;
        this.id = id;
    };
};

class Users {
    constructor(){
        this.users = [];
    }

    addUser (id, name, room) {
        const user = new User(id,name,room);
        this.users.push(user);
        return user;
    };

    removeUser  (id) {
        const user = this.getUser(id);

        if(user){
            this.users = this.users.filter(user=>user.id !== id);
        }
        
        return user;
    };

    getUser (id) {
        return this.users.filter(user=> user.id === id)[0];
    };

    getUserList (room) {
        const users = this.users.filter(user => room === user.room);
        const namesArray = users.map(user => user.name);

        return namesArray;
    };
};

module.exports = {
    Users, User
};
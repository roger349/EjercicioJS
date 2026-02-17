const users = [{id:1, name:"juan"},{id:2,name:"luis"},{id:3,name:"ale"},{id:4,name:"alexis"},{id:5,name:"mary"}];

const user = users.find(u => u.id===4);

console.log(user.name);
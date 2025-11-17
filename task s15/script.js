let users = [];

let numberOfUsers = prompt("How many users do you want to add?");

for (let i = 0; i < Number(numberOfUsers); i++) {
  addUser();
}
function addUser() {
  let userName = prompt("Enter user name:");
  let id = prompt("Enter user ID:");
  let balance = prompt("Enter user balance:");

  users.push({
    userName: userName,
    id: id,
    balance: Number(balance)
  });

//   console.log(users);
}

function editBalanceByID(id, newBalance) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      users[i].balance = Number(newBalance);
    }
  }
}

addUser();

let editID = prompt("Enter the ID of the user you want to edit:");
let editBalance = prompt("Enter the NEW balance:");
editBalanceByID(editID, editBalance);

function deleteUserById(id) {
    const index = users.findIndex(user => user.id === id);
  
    if (index !== -1) {
      const removedUser = users.splice(index, 1); 
      console.log(`User ${removedUser[0].userName} with ID ${id} has been deleted.`);
    } else {
      console.log("User not found!");
    }
  
    console.log(users);
  }
  
  let deleteID = prompt("Enter the ID of the user you want to delete:");
  deleteUserById(deleteID);
  
  
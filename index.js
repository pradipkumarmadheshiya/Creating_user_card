const nameInp=document.getElementById("nameInp")
const usernameInp=document.getElementById("usernameInp")
const emailInp=document.getElementById("emailInp")
const addUserBtn=document.getElementById("addUserBtn")
const users_box=document.getElementById("users_box")

let users = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz",
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      username: "Maxime_Nienow",
      email: "Sherwood@rosamond.me",
    },
    {
      id: 9,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz",
    },
  ];

const localStUsers=JSON.parse(localStorage.getItem("localStUsers")) || users
let idForUser=JSON.parse(localStorage.getItem("idForUser")) || 10

// adding  user to localStorage
function addUserFun(){
  idForUser++
  localStorage.setItem("idForUser", idForUser)

  const nameVal=nameInp.value
  const usernameVal=usernameInp.value
  const emailVal=emailInp.value
  
  localStUsers.push({id:idForUser, name:nameVal, username:usernameVal, email:emailVal})
  localStorage.setItem("localStUsers", JSON.stringify(localStUsers))
  location.reload()
}
addUserBtn.addEventListener("click", addUserFun)

// desplaying user with all detail
function createUserFun(localStUsers){
  localStUsers.forEach(user=>{
    const box=document.createElement("div")
    const nameUser=document.createElement("h3")
    nameUser.textContent=user.name
    const usernameP=document.createElement("p")
    usernameP.textContent=user.username
    const emailP=document.createElement("p")
    emailP.textContent=user.email
    const deleteUser=document.createElement("button")
    deleteUser.textContent="Delete"

    // delete manually created user
    function deleteUserFun(){
      localStUsersAfterDel=localStUsers.filter(el=>user.id!==el.id)
      localStorage.setItem("localStUsers", JSON.stringify(localStUsersAfterDel))
      location.reload()
    }
    deleteUser.addEventListener("click", deleteUserFun)

    box.append(nameUser, usernameP, emailP)
    if (user.id>10){
      box.append(deleteUser)
    }
    users_box.appendChild(box)
  })
}
createUserFun(localStUsers)
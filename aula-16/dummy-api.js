async function getUsers(){
   const resposta = await fetch("https://dummyapi.io/data/v1/user?created=1", {
    headers: app-id
   })

   const users = await resposta.json()
   console.log(users)
}

getUsers()

async function getUser(){

}

async function createUser(params) {
   await fetch("https://dummyapi.io/data/v1/user/create", {
    method: "POST"
   })
}
const remoteURL = "http://localhost:5002"

// below you'll find a generic get and getAll
// post has been added for adding new animals

export default {
  get(id) {
    return fetch(`${remoteURL}/users/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/users`).then(e => e.json())
  },
  post(newUser) {
    return fetch(`${remoteURL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    }).then(data => data.json())
  },
   delete (id) {
    return fetch (`${remoteURL}/users/${id}`,{
      method: "DELETE"
    })
    .then(()=>{return fetch(`${remoteURL}/users`).then(e=> e.json())})
   },
   patch (id, editUser){
     return fetch(`${remoteURL}/users/${id}`, {
       method: "PATCH",
       headers: {
          "Content-Type": "application/json"
       },
       body: JSON.stringify(editUser)
     }).then(e=>e.json())
   }
}
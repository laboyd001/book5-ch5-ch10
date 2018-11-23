// const remoteURL = "http://localhost:5002"

// export default {
//   get(id) {
//     return fetch(`${remoteURL}/owners/${id}`).then(e => e.json())
//   },
//   getAll() {
//     return fetch(`${remoteURL}/owners`).then(e => e.json())
//   },
//   post(newOwner) {
//     return fetch(`${remoteURL}/owners`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(newOwner)
//     }).then(data => data.json())
//   }
// }


import APIManager from "./APIManager"

class OwnerManager extends APIManager {
  getOwner(id){
      return this.get(id)
  }
  getAll(){
  return this.all()
  }
  removeAndList(id) {
    return this.delete(id).then(() => this.all())
  }
}

export default new OwnerManager("owners")
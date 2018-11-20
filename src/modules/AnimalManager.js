

const remoteURL = "http://localhost:5002"

// below you'll find a generic get and getAll
// post has been added for adding new animals

export default {
  get(id) {
    return fetch(`${remoteURL}/animals/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/animals`).then(e => e.json())
  },
  post(newAnimal) {
    return fetch(`${remoteURL}/animals`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newAnimal)
    }).then(data => data.json())
  }
}

// import APIManager from "./APIManager"

// class AnimalManager extends APIManager {
//   getAnimal(){
  //     return this.get(id)
  // }
//   getAll(){
//   return this.all()
// }
//   removeAndList(id) {
//     return this.delete(id).then(() => this.all())
//   }
// }

// export default new AnimalManager("animals")
// "animals" gets passed into the constructor
// "new" is a special indicator that this is not a regular function but one that returns an object
// const remoteURL = "http://localhost:5002"

// export default {
//   get(id) {
//     return fetch(`${remoteURL}/locations/${id}`).then(e => e.json())
//   },
//   getAll() {
//     return fetch(`${remoteURL}/locations`).then(e => e.json())
//   },
//   post(newLocation) {
//     return fetch(`${remoteURL}/locations`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(newLocation)
//     }).then(data => data.json())
//   }
// }

import APIManager from "./APIManager"

class LocationManager extends APIManager {
  getLocation(id){
      return this.get(id)
  }
  getAll(){
  return this.all()
  }
  removeAndList(id) {
    return this.delete(id).then(() => this.all())
  }
}

export default new LocationManager("locations")
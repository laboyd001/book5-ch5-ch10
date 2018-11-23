// const remoteURL = "http://localhost:5002"

// export default {
//   get(id) {
//     return fetch(`${remoteURL}/employees/${id}`).then(e => e.json())
//   },
//   getAll() {
//     return fetch(`${remoteURL}/employees`).then(e => e.json())
//   },
//   post(newEmployee) {
//     return fetch(`${remoteURL}/employees`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(newEmployee)
//     }).then(data => data.json())
//   }
// }

import APIManager from "./APIManager"

class EmployeeManager extends APIManager {
  getEmployee(id){
      return this.get(id)
  }
  getAll(){
  return this.all()
  }
  removeAndList(id) {
    return this.delete(id).then(() => this.all())
  }
}

export default new EmployeeManager("employees")
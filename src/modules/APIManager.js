// the only job of this module is to deal with data...  it doesn't even do react

const remoteURL = "http://localhost:5002"

export default class APIManager {
  constructor(resource){
    this.resource = resource
  }

  get(id) {
    /*
        Since the purpose of this module is to be used by
        all of the more specialized one, then the string
        of `animals` should not be hard coded here.
    */
    return fetch(`${remoteURL}/${this.resource}/${id}`).then(data => data.json())
  }

  all() {
    console.log("resource", this.resource)
    return fetch(`${remoteURL}/${this.resource}`).then(data => data.json())
  }

  delete (id) {
    return fetch(`${remoteURL}/${this.resource}/${id}`, {method: "DELETE"}).then(data=> data.json())
  }

  post(newObject) {
    return fetch(`${remoteURL}/${this.resource}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newObject)
    }).then (data=> data.json())
  }

}
const jsonFR = {
}
const jsonEN = {
}
let selector = document.getElementById("language")

document.querySelector('.language').addEventListener("change",function(){
  if (this.value == "french"){
    for (let key in jsonFR){
      let element = "." + key
      document.querySelector(element).textContent = jsonFR[key]
      console.log("la france")
    }
  } else if (this.value == "english") {
   for (let  key in jsonEN){
      let element = "." + key
      document.querySelector(element).textContent = jsonEN[key]
      console.log("anglais")
    }
  }
})

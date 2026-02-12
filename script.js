const jsonFR = {
  "sommaire1": "Sommaire 1G3",
  "sommaire2": "Sommaire 1G4"
}
const jsonEN = {
  "sommaire1": "1G3's Table of content",
  "sommaire2": "1G4's Table of content"
}

document.querySelector('.language').addEventListener("change",function(){
  if (this.value == "french"){
    for (let key in jsonFR){
      let element = "." + key
      document.querySelector(element).textContent = jsonFR[key]
    }
  } else if (this.value == "english") {
   for (let  key in jsonEN){
      let element = "." + key
      document.querySelector(element).textContent = jsonEN[key]
    }
  }
})

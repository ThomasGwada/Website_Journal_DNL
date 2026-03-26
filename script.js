const jsonFR = {
  "sommaire1": "Sommaire 1G3 :",
  "sommaire2": "Sommaire 1G4 :",
  "article3_1": "Article 1",
  "article3_2": "Article 2",
  "article3_3": "Article 3",
}
const jsonEN = {
  "sommaire1": "1G3's Table of content :",
  "sommaire2": "1G4's Table of content :",
  "article3_1": "Article 1 (english)",
  "article3_2": "Article 2 (english)",
  "article3_3": "Article 3 (english)",
}
let selector = document.getElementById("language")

document.querySelector('.language').addEventListener("change",function(){
  if (this.value == "french"){
    for (let key in jsonFR){
      let element = "." + key
      document.querySelector(element).textContent = jsonFR[key]
      console.log("la france")
    }
    selector.classList.add("drapeau_france")
    selector.classList.remove("drapeau_anglais")
  } else if (this.value == "english") {
   for (let  key in jsonEN){
      let element = "." + key
      document.querySelector(element).textContent = jsonEN[key]
      console.log("anglais")
    }
    selector.classList.add("drapeau_anglais")
    selector.classList.remove("drapeau_france")
  }
})

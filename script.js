localStorage.setItem("word", "Hello")
console.log(localStorage.getItem("word"))

localStorage.setItem("word2", "World")
localStorage.removeItem("word2")

sessionStorage.setItem("word3", "!")
sessionStorage.setItem("word3", "!!")

document.cookie = "name=John Doe"
console.log(document.cookie)

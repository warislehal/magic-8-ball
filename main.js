document.getElementById("btn").addEventListener("click", btnclicked);

function btnclicked() {
  let randnum = Math.random();
  let name = document.getElementById("name").value.toLowerCase();

  if (name === "") {
    document.getElementById("output").innerHTML = "Please ask a question?";
  } else if (name === "does a magic 8 ball actually work?") {
    document.getElementById("output").innerHTML = "How dare you doubt me!";
  } else if (name === "is javascript aweson?") {
    document.getElementById("output").innerHTML = "Of Course!";
  } else if (randnum < 0.2) {
    document.getElementById("output").innerHTML = "Without a doubt";
  } else if (randnum < 0.4) {
    document.getElementById("output").innerHTML = "As I see it";
  } else if (randnum < 0.6) {
    document.getElementById("output").innerHTML = "concentrate and ask again";
  } else if (randnum < 0.8) {
    document.getElementById("output").innerHTML = "Don't count on it";
  } else if (randnum < 1) {
    document.getElementById("output").innerHTML = "Outlook not so good";
  }
}

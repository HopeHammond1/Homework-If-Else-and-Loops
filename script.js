var containerEle = document.body.querySelector(".container");
var animals = ["dog", "fish", "cat", "shark", "cat", "dog"];
var regenerateEle = document.querySelector(".regenerate");

for (var i = 0; i < animals.length; i++) {
  var animalsEle = document.createElement("div");

  if (animals[i] === "dog") {
    animalsEle.innerHTML = "borf borf";
  } else if (animals[i] === "cat") {
    animalsEle.innerHTML = "I am cat";
  } else {
    animalsEle.innerHTML = "Im an animal";
  }

  containerEle.appendChild(animalsEle);
}

containerEle.appendChild(regenerate);
var regenerateEle = document.querySelector(".regenerate");
animals.sort(() => Math.random() - 0.5);
for (var i = 0; i < animals.length; i++) {
  var animalsEle = document.createElement("div");

  if (animals[i] === "dog") {
    animalsEle.innerHTML = "borf borf";
  } else if (animals[i] === "cat") {
    animalsEle.innerHTML = "I am cat";
  } else {
    animalsEle.innerHTML = "Im an animal";
  }

  containerEle.appendChild(animalsEle);
}
containerEle.appendChild(regenerate)
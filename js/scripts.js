window.onload = function() {
  const form = document.querySelector("form");

  form.onsubmit = function(event) {
    event.preventDefault();

    const platypus = document.getElementById("platypus");
    platypus.setAttribute("class", "hidden");
    const serval = document.getElementById("serval");
    serval.setAttribute("class", "hidden");
    const saiga = document.getElementById("saiga");
    saiga.setAttribute("class", "hidden");

    const selectAnimal = document.querySelector("input#animal").value;

    if (selectAnimal === 'platypus') {
      platypus.removeAttribute("class");
    } else if (selectAnimal === 'serval') {
      serval.removeAttribute("class");
    } else if (selectAnimal === 'saiga') {
      saiga.removeAttribute("class");
    } else {
      window.alert("invalid input");
    };

  };
};

// Challenge 1
let challengeOne = function(){

  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

  // On page load, fetches the images using the url above.
  return fetch(imgUrl)
    .then(response => response.json())
    .then((data) => {
      let container = document.getElementById("dog-image-container");
      let ul = document.createElement("ul");

      let arr = data.message;

      arr.forEach((href) => {
        let li = document.createElement("li");
        // Adds image elements to the DOM for each image in the data.message array.
        li.innerHTML = `<img src="${href}" alt="dog breed image"/>`;

        ul.append(li);
      });

      container.append(ul);
    })
    .catch((error) => {
      alert(error.message);
    });
};


// Challenge 2
let challengeTwo = function(){

  const breedUrl = "https://dog.ceo/api/breeds/list/all";

  // Fetches all the dog breeds
  return fetch(breedUrl)
    .then(response => response.json())
    .then((data) => {
      let ulContainerTwo = document.getElementById("dog-breeds");
      let selectElement = document.getElementById('breed-dropdown');
      let obj = data.message;

      let selectedValue;

      selectElement.addEventListener("change", (e) => {
        selectedValue = e.target.value;
        ulContainerTwo.innerHTML = ''; // Clear existing list

        if (selectedValue) {
          for (let key in obj) {
            if (key.slice(0, 1) === selectedValue) {
              let li = document.createElement("li");
              li.textContent = key;
              ulContainerTwo.appendChild(li);

              li.addEventListener("click", (e) => {
                e.target.style.color = "#0ff";
              })
            }
          }
        } else {
          for (let key in obj) {
            let li = document.createElement("li");
            li.textContent = key;
            ulContainerTwo.appendChild(li);

            li.addEventListener("click", (e) => {
              e.target.style.color = "#0ff";
            })
          }
        }
      });




    })
    .catch((error) => {
      alert(error.message);
    });
};



let interaction = function(){
  challengeOne();
  challengeTwo();
};

document.addEventListener("DOMContentLoaded", interaction);
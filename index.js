

const users = {
  2345234: {
    name: "John",
    age: 29,
  },
  8798129: {
    name: "Jane",
    age: 42,
  },
  1092384: {
    name: "Fred",
    age: 17,
  },
  2346784: {
    name: "John",
    age: 12,
  },
  18974532: {
    name: "Jane",
    age: 9,
  },
  90453763: {
    name: "Fred",
    age: 22,
  },
};
const getContainer = document.getElementById("container");
console.log(getContainer);
function displayResults() {
  Object.entries(users).reduce((acc, [id, user]) => {
    acc = document.createElement("DIV");
    acc.setAttribute("id", "default");
    acc.innerHTML =
      "ID: " +
      id +
      "<br>" +
      " Name: " +
      user.name +
      "<br>" +
      " Age: " +
      user.age +
      "<p></p>";
    getContainer.appendChild(acc);
    const btn = document.getElementById("btn");
    btn.addEventListener("click", function() {
      if (user.age > 21) {
        acc.setAttribute("id", "filter");
        let removeEl = document.getElementById("default")
        removeEl.remove()
      } 
     
    });
  }); 
}
displayResults();

// function ageOver22() {
//   Object.entries(users).reduce((acc, [id, user]) => {
//     if (user.age > 21) {
//       acc = document.createElement("DIV");
//     // acc.setAttribute("id", "filter");
//       acc.innerHTML =
//         "ID: " +
//         id +
//         "<br>" +
//         " Name: " +
//         user.name +
//         "<br>" +
//         " Age: " +
//         user.age +
//         "<p></p>";
//     }
//     const remove = document.getElementById("default")
//     remove.remove()
//     return document.body.appendChild(acc);
//   });
// }

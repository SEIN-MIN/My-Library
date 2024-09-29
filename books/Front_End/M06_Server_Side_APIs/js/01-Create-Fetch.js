var repoList = document.querySelector('ul');
//console.log(repoList)
var fetchButton = document.getElementById('fetch-button');
//console.log(fetchButton)
// `getApi` function is called when the `fetchButton` is clicked

function getApi() {
  // TODO: Insert the API url to get a list of your repos
  var requestUrl = 'https://api.github.com/users/Nway-Khant/repos';
//console.log(fetch('https://api.github.com/users/Nway-Khant/repos'))
  fetch(requestUrl)
  //console.log(fetch(requestUrl))
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data)
      // Looping over the fetch response and inserting the URL of your repos into a list
      for (var i = 0; i < data.length; i++) {
        // Create a list element
        var listItem = document.createElement('li');

        // Set the text of the list element to the JSON response's .html_url property
        listItem.textContent = data[i].html_url;

        // Append the li element to the id associated with the ul element.
        repoList.appendChild(listItem);
      }
    });
}

fetchButton.addEventListener('click', getApi);

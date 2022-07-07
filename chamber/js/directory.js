const requestURL = 'https://raw.githubusercontent.com/christianmartinez0501/wdd230/main/chamber/directory.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const directory = jsonObject['directory'];
        directory.forEach(displayDirectory);
function displayDirectory(directory) {  // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    let p2 = document.createElement('p');
    let a = document.createElement('a');
    let img = document.createElement('img');
        // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = directory.name;
    p.textContent = directory.address; 
    p2.textContent = directory.phone;
    a.href = directory.website;
    img.setAttribute('src', directory.imageurl); 
    // Add/append the section(card) with the h2 element
    card.appendChild(img);
    card.appendChild(h2);
    card.appendChild(p);
    card.appendChild(p2);

    
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }

    });

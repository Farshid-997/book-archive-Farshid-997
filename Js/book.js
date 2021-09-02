const searchBookFromData = () => {

    let searchField = document.getElementById('search-field');
    let searchText = searchField.value;


    // clear field
    searchField.value = '';
    if (searchText == '') {
        alert('Write a Book Name')
    }
    else {
        // load the api data
        const url = `https://openlibrary.org/search.json?q=${searchText}`;
        fetch(url)
            .then(response => response.json())

            .then(data => displayBookSearchResult(data))
    }
}


//display the book search result in this function
const displayBookSearchResult = books => {


    const totalCount = document.getElementById('total-count')
    const p = document.createElement('p')
    p.innerText = `Total Books Found:${books.numFound}`
    totalCount.appendChild(p)

    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';


    books.docs.forEach(book => {

        let div = document.createElement('div');
        div.classList.add('col');

        //show result in a card
        div.innerHTML = `
        <div  class="card h-100" >
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
            <div class="card-body">
            <h4 class="card-title">Book's Name:${book.title}</h4>
              <h5 class="card-title  text-success">Author Name:${book.author_name}</h5>
              <p class="card-text">First Publication Year:${book.first_publish_year}</p>
            </div>
          </div>
        `;

        searchResult.appendChild(div);


    });


}
const searchBookFromData = () => {

    const searchField = document.getElementById('search-field');

    const searchText = searchField.value;

    const totalBooks = document.getElementById('total-count')
    totalBooks.innerHTML = ``

    const errorMsg = document.getElementById('err-msg')

    errorMsg.innerHTML = ``




    // clear field
    searchField.value = '';

    // check error
    if (searchText == '') {


        const errMsg = document.getElementById('err-msg')
        const p = document.createElement('p')
        p.innerText = `Your Book name is not found`;

        errMsg.appendChild(p)


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
            
              <p class="card-title  text-success">Author Name:${book.author_name}</>
              <p class="card-text">Publisher:${book.publisher}</p>
              <p class="card-text">First Publication Year:${book.first_publish_year}</p>
            </div>
          </div>
        `;

        searchResult.appendChild(div);


    });


}
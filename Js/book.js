const searchBookFromData = () => {

    let searchField = document.getElementById('search-field');
    let searchText = searchField.value;
    console.log(searchText);
    // clear data
    searchField.value = '';
    if (searchText == '') {
        alert('Write a Book Name')
    }
    else {
        // load data
        const url = `https://openlibrary.org/search.json?q=${searchText}`;
        fetch(url)
            .then(response => response.json())

            .then(data => displayBookSearchResult(data))
    }
}



const displayBookSearchResult = books => {


    const totalCount = document.getElementById('total-count')
    const p = document.createElement('p')
    p.innerText = `Total Books Found:${books.numFound}`
    totalCount.appendChild(p)

    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';

    if (books.length == 0) {
        // show no result
    }
    books.docs.forEach(book => {

        let div = document.createElement('div');
        div.classList.add('col');


        div.innerHTML = `
        <div  class="card">
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
              <h5 class="card-title">${book.author_name}</h5>
              <p class="card-text">${book.first_publish_year}</p>
            </div>
          </div>
        `;

        searchResult.appendChild(div);


    });


}
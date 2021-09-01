const searchBook = () => {
    const searchField = document.getElementById('search-field')

    const searchText = searchField.Value;
    searchField.Value = ''
    fetch(` http://openlibrary.org/search.json?q=${searchText}`)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs))
}

const displaySearchResult = books => {
    const searchResult = document.getElementById('search-result')
    books.forEach(book => {
        console.log(book)
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div  class="card h-100">
        <img src=" https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">Name:${book.subject}</h5>
            <h5 class="card-title">Publication Date:${book.first_publish_year}</h5>
            <p class="card-text">Author Name:${book.author_name}</p>
        </div>
    </div>
      
      `
        searchResult.appendChild(div)
    })
}
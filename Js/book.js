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
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div  class="card h-100">
        <img src="" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${book.publish_date}</h5>
            <p class="card-text">${book.author_name}..</p>
        </div>
    </div>
      
      `
        searchResult.appendChild(div)
    })
}
const form = document.querySelector('#searchForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchTermInput = form.elements.query;
    const config = {
        paramas: {
            q: searchTermInput.value
        }
    }
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTermInput.value}`, config);
    makeImages(res.data);
    searchTermInput = ''
});

const makeImages = (results) => {
    for (result of results) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}
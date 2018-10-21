export default function FetchData(link) {
    return window.fetch(link, {
        headers: {
            Accept: 'application/vnd.github.VERSION.html+json'
        }
    })
        .then(function(response) {
            return response;
        });
}
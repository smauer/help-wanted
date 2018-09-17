export default function FetchData(link) {
    return window.fetch(link)
        .then(function(response) {
            return response;
        });
}
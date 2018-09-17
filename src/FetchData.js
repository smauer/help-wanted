export default function FetchData(link) {
    return window.fetch(link)
        .then(function(response) {
            // response.headers.get("Link")
            return response;
        });
}
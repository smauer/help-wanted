export default function FetchLabels() {
    return window.fetch('https://api.github.com/repos/techlahoma/help-wanted/labels?per_page=100')
        .then(function(response) {
            return response.json();
        });
}
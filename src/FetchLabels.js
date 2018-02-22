export default function FetchLabels() {
    return window.fetch('https://api.github.com/repos/techlahoma/help-wanted/labels')
        .then(function(response) {
            return response.json();
        });
}
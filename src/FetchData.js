export default function FetchData() {
    return window.fetch('https://api.github.com/repos/techlahoma/help-wanted/issues')
        .then(function(response) {
            // console.log(response.json());
            return response.json();
        });
}
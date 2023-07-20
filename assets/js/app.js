document.addEventListener("DOMContentLoaded", () => {
    fetchCatFact();
});

function fetchCatFact() {
    fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(data => {
            updateCatFact( data.fact );
        });
}

function updateCatFact( fact ) {
    document.getElementById('cat-fact-text').innerHTML = fact;
}
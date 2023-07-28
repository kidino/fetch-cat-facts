document.addEventListener("DOMContentLoaded", () => {
    fetchCatFact();
});

function fetchCatFact() {
    toggleBtnIndicator('refresh-btn');

    fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(data => {
            toggleBtnIndicator('refresh-btn');
            updateCatFact( data.fact );
        });
}

function updateCatFact( fact ) {
    document.getElementById('cat-fact-text').innerHTML = fact;
}

function toggleBtnIndicator( btn_class ) {
    const btn = document.getElementsByClassName(btn_class)[0];

    if(btn.getAttribute('disabled') != null) {
        btn.disabled = false;
        btn.querySelectorAll(`:scope ${'.indicator-label'}`)[0].classList.remove("d-none");
        btn.querySelectorAll(`:scope ${'.indicator-progress'}`)[0].classList.add("d-none");
    } else {
        btn.disabled = true;
        btn.querySelectorAll(`:scope ${'.indicator-label'}`)[0].classList.add("d-none");
        btn.querySelectorAll(`:scope ${'.indicator-progress'}`)[0].classList.remove("d-none");
    }
}
const winners = [
    {
        email: "Miro98@mail.ru",
        date: "11.10.2025",
        amount: "100000"
    },
    {
        email: "test@example.com",
        date: "12.10.2025",
        amount: "50000"
    }
];

function clearInput() {
    const input = document.getElementById('searchInput');
    input.value = '';
    document.querySelector('.clear-icon').style.display = 'none';
    document.querySelector('.search-icon').style.display = 'block';
    document.getElementById('resultCard').classList.remove('show');
}

function searchWinner() {
    const input = document.getElementById('searchInput').value.toLowerCase().trim();
    const resultCard = document.getElementById('resultCard');
    const resultError = document.getElementById('resultError');
    const resultEmail = document.getElementById('resultEmail');
    const resultDate = document.getElementById('resultDate');
    const resultAmount = document.getElementById('resultAmount');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const clearIcon = document.querySelector('.clear-icon');
    const searchIcon = document.querySelector('.search-icon');

    const winner = winners.find(w => w.email.toLowerCase() === input);

    if (winner) {
        resultEmail.textContent = winner.email;
        resultDate.textContent = `Дата розыгрыша: ${winner.date}`;
        resultAmount.textContent = winner.amount;
        resultCard.classList.add('show');
        resultError.classList.remove('show');
    } else {
        resultCard.classList.remove('show');
        resultError.classList.add('show');

    }

    clearIcon.addEventListener('click', () => {
        searchInput.value = '';
        clearIcon.style.display = 'none';
        searchIcon.style.display = 'block';
        resultError.classList.remove('show');
        resultCard.classList.remove('show');
    });

    searchInput.addEventListener('input', () => {
        if (searchInput.value.trim() !== '') {
            clearIcon.style.display = 'block';
        } else {
            clearIcon.style.display = 'none';
            resultCard.classList.remove('show');
            resultError.classList.add('show');
        }
    });

    searchButton.addEventListener('click', () => {
        const input = searchInput.value.toLowerCase().trim();
        const winner = winners.find(w => w.email.toLowerCase() === input);

        if (winner) {
            resultEmail.textContent = winner.email;
            resultDate.textContent = `Дата розыгрыша: ${winner.date}`;
            resultAmount.textContent = winner.amount;
            resultError.classList.remove('show');
            resultCard.classList.add('show');
        } else {
            resultCard.classList.remove('show');
            resultError.classList.add('show');
        }
    });
}

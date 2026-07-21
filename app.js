const teamInput = document.getElementById("team");
const timeInput = document.getElementById("time");
const addButton = document.getElementById("addButton");
const nowButton = document.getElementById("nowButton");
const tableBody = document.getElementById("tableBody");

let teams = [];

// Ustaw aktualną godzinę
function setCurrentTime() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    timeInput.value = `${hours}:${minutes}`;
}

// Wyświetlenie tabeli
function renderTable() {

    tableBody.innerHTML = "";

    teams.sort((a, b) => a.time.localeCompare(b.time));

    teams.forEach((team, index) => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${team.number}</td>
            <td>${team.time}</td>
            <td>
                <button class="finishButton" data-index="${index}">
                    ✅
                </button>
            </td>
        `;

        tableBody.appendChild(row);

    });

    document.querySelectorAll(".finishButton").forEach(button => {

        button.addEventListener("click", () => {

            const index = button.dataset.index;

            teams.splice(index, 1);

            renderTable();

        });

    });

}

// Dodawanie
addButton.addEventListener("click", () => {

    const number = teamInput.value.trim().toUpperCase();
    const time = timeInput.value;

    if (number === "" || time === "") {

        alert("Uzupełnij numer zespołu i godzinę.");

        return;

    }

    const exists = teams.find(t => t.number === number);

    if (exists) {

        alert("Ten zespół już znajduje się na liście.");

        return;

    }

    teams.push({

        number,
        time

    });

    teamInput.value = "";

    renderTable();

});

// Aktualna godzina
nowButton.addEventListener("click", setCurrentTime);

// Po uruchomieniu strony
setCurrentTime();

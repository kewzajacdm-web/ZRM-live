import {
    db,
    collection,
    addDoc,
    deleteDoc,
    doc,
    onSnapshot,
    query,
    orderBy,
    getDocs
} from "./firebase.js";

const teamInput = document.getElementById("team");
const timeInput = document.getElementById("time");
const addButton = document.getElementById("addButton");
const nowButton = document.getElementById("nowButton");
const tableBody = document.getElementById("tableBody");

const teamsRef = collection(db, "teams");

function setCurrentTime() {

    const now = new Date();

    const h = String(now.getHours()).padStart(2, "0");
    const m = String(now.getMinutes()).padStart(2, "0");

    timeInput.value = `${h}:${m}`;

}

setCurrentTime();

nowButton.addEventListener("click", setCurrentTime);

addButton.addEventListener("click", addTeam);

async function addTeam() {

    const number = teamInput.value.trim().toUpperCase();
    const time = timeInput.value;

    if (!number || !time) {

        alert("Uzupełnij dane.");

        return;

    }

    const snapshot = await getDocs(teamsRef);

    let exists = false;

    snapshot.forEach(doc => {

        if (doc.data().number === number) {

            exists = true;

        }

    });

    if (exists) {

        alert("Ten zespół już jest na liście.");

        return;

    }

    await addDoc(teamsRef, {

        number,
        time,
        createdAt: Date.now()

    });

    teamInput.value = "";

    setCurrentTime();

}

const q = query(teamsRef, orderBy("time"));

onSnapshot(q, snapshot => {

    tableBody.innerHTML = "";

    snapshot.forEach(document => {

        const data = document.data();

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${data.number}</td>
            <td>${data.time}</td>
            <td>
                <button class="finishButton">
                    ✅
                </button>
            </td>
        `;

        row
            .querySelector(".finishButton")
            .addEventListener("click", async () => {

                await deleteDoc(doc(db, "teams", document.id));

            });

        tableBody.appendChild(row);

    });

});
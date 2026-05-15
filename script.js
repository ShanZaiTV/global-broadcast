/* =========================================
   Mindanao Media Network CATV
   IPTV / CATV JavaScript Functions
========================================= */

// CHANNEL LIST
const channels = [
    {
        name: "Mindanao News",
        category: "News",
        status: "LIVE"
    },
    {
        name: "MMN Sports",
        category: "Sports",
        status: "LIVE"
    },
    {
        name: "MMN Movies",
        category: "Entertainment",
        status: "OFFLINE"
    },
    {
        name: "MMN Kids",
        category: "Kids",
        status: "LIVE"
    }
];

// DISPLAY CHANNELS
function displayChannels() {

    const container = document.getElementById("channelContainer");

    if (!container) return;

    container.innerHTML = "";

    channels.forEach(channel => {

        const card = document.createElement("div");
        card.classList.add("channel-card");

        card.innerHTML = `
            <div class="channel-info">
                <h3>${channel.name}</h3>
                <p>Category: ${channel.category}</p>
                <span class="live-badge">
                    ${channel.status}
                </span>
            </div>
        `;

        container.appendChild(card);
    });
}

// PLAY CHANNEL
function playChannel(channelName) {

    alert("Now Playing: " + channelName);

    console.log("Streaming channel:", channelName);
}

// DIGITAL CLOCK
function updateClock() {

    const clock = document.getElementById("clock");

    if (!clock) return;

    const now = new Date();

    clock.innerHTML = now.toLocaleTimeString();
}

// AUTO REFRESH CLOCK
setInterval(updateClock, 1000);

// SEARCH CHANNEL
function searchChannel() {

    const input = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const cards = document.querySelectorAll(".channel-card");

    cards.forEach(card => {

        const title = card
            .querySelector("h3")
            .innerText
            .toLowerCase();

        if (title.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// MENU TOGGLE FOR MOBILE
function toggleMenu() {

    const nav = document.getElementById("mobileMenu");

    nav.classList.toggle("show-menu");
}

// WELCOME MESSAGE
window.onload = () => {

    displayChannels();

    updateClock();

    console.log(
        "Mindanao Media Network CATV Loaded Successfully"
    );
};
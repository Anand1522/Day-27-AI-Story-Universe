/* =====================================================
   DAY 27 - AI STORY UNIVERSE
   30 Days 30 AI Websites Challenge
===================================================== */

const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const downloadBtn = document.getElementById("downloadBtn");
const output = document.getElementById("storyOutput");

const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");
const readTime = document.getElementById("readTime");

/* ===========================
   Story Data
=========================== */

const openings = [
    "On a silent night, destiny changed forever.",
    "No one expected the adventure to begin that morning.",
    "Legends whispered about a forgotten secret.",
    "Everything started with a mysterious signal.",
    "A strange discovery changed history forever.",
    "The universe had been waiting for this moment."
];

const companions = [
    "a loyal robotic fox",
    "an ancient guardian",
    "a mysterious child",
    "an intelligent AI companion",
    "a fearless explorer",
    "a legendary dragon"
];

const villains = [
    "The Shadow Emperor",
    "The Time Collector",
    "The Eternal Machine",
    "The Chaos Queen",
    "The Dark Oracle",
    "The Silent Phantom"
];

const treasures = [
    "The Crystal of Infinity",
    "The Book of Destiny",
    "The Quantum Key",
    "The Celestial Crown",
    "The Heart of Light",
    "The Ancient Core"
];

const twists = [
    "the villain was protecting humanity all along",
    "the hero was part of an ancient prophecy",
    "time itself started collapsing",
    "their closest ally was secretly the final guardian",
    "the treasure could only be activated through kindness",
    "every decision created a new universe"
];

const endings = [
    "peace returned and a new era began.",
    "the hero disappeared into legend forever.",
    "the universe was reborn stronger than before.",
    "future generations celebrated the hero's courage.",
    "hope spread across every world.",
    "a new adventure quietly waited beyond the stars."
];

/* ===========================
   Random Helper
=========================== */

function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

/* ===========================
   Generate Story
=========================== */

generateBtn.addEventListener("click", generateStory);

function generateStory() {

    const genre = document.getElementById("genre").value;
    const role = document.getElementById("role").value;
    const world = document.getElementById("world").value;
    const mood = document.getElementById("mood").value;
    const length = document.getElementById("length").value;

    let hero = document.getElementById("heroName").value.trim();

    if (hero === "") {
        hero = "Nova";
    }

    const companion = randomItem(companions);
    const villain = randomItem(villains);
    const treasure = randomItem(treasures);
    const twist = randomItem(twists);
    const ending = randomItem(endings);
    const opening = randomItem(openings);

    let extra = "";

    if (length === "Medium") {

        extra = `
        <p>
        Every challenge forced <span class="highlight">${hero}</span> to learn new skills,
        trust unexpected allies, and question everything believed to be true.
        Every victory unlocked another mystery hidden deep inside the <span class="highlight">${world}</span>.
        </p>
        `;

    }

    if (length === "Long") {

        extra = `
        <p>
        Weeks became months as impossible puzzles, dangerous enemies,
        and emotional sacrifices shaped the journey.
        Entire civilizations depended upon every decision.
        Ancient knowledge slowly revealed that courage,
        compassion, and wisdom were more powerful than any weapon.
        </p>

        <p>
        After countless trials, every lesson connected into one final truth:
        even the smallest action can reshape countless futures.
        </p>
        `;

    }

    output.innerHTML = `

    <div class="story-title">
        🎭 ${genre} Story Universe
    </div>

    <div class="story-subtitle">
        ${hero} • ${role} • ${world}
    </div>

    <div class="story-section">

        <h4>🌅 Beginning</h4>

        <p>
        ${opening}
        <span class="highlight">${hero}</span>,
        a talented <span class="highlight">${role}</span>,
        lived peacefully inside the
        <span class="highlight">${world}</span>.
        Everything changed after discovering
        <span class="highlight">${treasure}</span>.
        </p>

    </div>

    <div class="story-section">

        <h4>🚀 Journey</h4>

        <p>
        Together with
        <span class="highlight">${companion}</span>,
        the journey crossed dangerous lands,
        solved forgotten mysteries,
        and confronted the powerful
        <span class="highlight">${villain}</span>.
        The adventure grew increasingly
        <span class="highlight">${mood}</span>,
        pushing every limit imaginable.
        </p>

        ${extra}

    </div>

    <div class="story-section">

        <h4>⚡ Plot Twist</h4>

        <p>
        Just when victory seemed certain,
        everyone discovered that
        <span class="highlight">${twist}</span>.
        Nothing would ever be viewed the same again.
        </p>

    </div>

    <div class="story-section">

        <h4>🏆 Ending</h4>

        <p>
        With wisdom, bravery, and hope,
        <span class="highlight">${hero}</span>
        restored balance across the universe,
        and
        <span class="highlight">${ending}</span>
        </p>

    </div>

    <div class="story-section">

        <h4>✨ Moral</h4>

        <p>
        Great stories are created not by powerful heroes,
        but by ordinary people who choose courage when it matters most.
        </p>

    </div>

    `;

    updateStats();
}

/* ===========================
   Stats
=========================== */

function updateStats() {

    const text = output.innerText;

    const words = text.trim().split(/\s+/).filter(Boolean).length;
    const chars = text.length;
    const minutes = Math.max(1, Math.ceil(words / 200));

    wordCount.textContent = words;
    charCount.textContent = chars;
    readTime.textContent = minutes + " Min";

}

/* ===========================
   Copy
=========================== */

copyBtn.addEventListener("click", () => {

    const text = output.innerText;

    navigator.clipboard.writeText(text);

    copyBtn.innerHTML = "✅ Copied";

    setTimeout(() => {

        copyBtn.innerHTML = "📋 Copy";

    }, 1800);

});

/* ===========================
   Download
=========================== */

downloadBtn.addEventListener("click", () => {

    const blob = new Blob(
        [output.innerText],
        {
            type: "text/plain"
        }
    );

    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);

    link.download = "AI_Story_Universe.txt";

    link.click();

    URL.revokeObjectURL(link.href);

});

/* ===========================
   Keyboard Shortcut
=========================== */

document.addEventListener("keydown", (e) => {

    if (e.key === "Enter" && e.ctrlKey) {

        generateStory();

    }

});

/* ===========================
   Initial Stats
=========================== */

updateStats();
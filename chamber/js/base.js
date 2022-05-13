const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;
datefield.innerHTML = `<em>${fulldate}</em>`;
document.getElementById("update").innerHTML =  "&copy2022 Idaho Falls Chamber | <b>Christian Martinez</b> | WDD 230 Project | " + document.lastModified;
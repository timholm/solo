const INPUTS = ["Inbox", "Calendar", "Payments", "Files"];

const DEPARTMENTS = [
  { name: "Sales", jobs: ["Replies to every new lead within minutes"] },
  { name: "Deals", jobs: ["Writes the quote and follows up three days later"] },
  { name: "Marketing", jobs: ["Writes the post", "Replies to the comments"] },
  { name: "Customer", jobs: ["Answers the support email at ten at night"] },
  { name: "Operations", jobs: ["Runs the day-to-day jobs of the company"] },
  { name: "Back Office", jobs: ["Sends the invoice, and chases it when it's late"] },
  { name: "Intelligence", jobs: ["Researches before you decide"] }
];

const KNOWLEDGE = ["One knowledge base every AI agent reads from"];

const RULES = [
  "Each AI agent has a single job and a workflow written down, so it runs the same way every time.",
  "Anything that touches a client or your money waits for your yes, on your phone."
];

function chips(el, items) {
  for (const item of items) {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = item;
    el.appendChild(chip);
  }
}

chips(document.getElementById("inputs"), INPUTS);
chips(document.getElementById("knowledge"), KNOWLEDGE);

const grid = document.getElementById("departments");
for (const d of DEPARTMENTS) {
  const card = document.createElement("article");
  card.className = "card";
  const h = document.createElement("h3");
  h.textContent = d.name;
  card.appendChild(h);
  for (const job of d.jobs) {
    const p = document.createElement("p");
    p.textContent = job;
    card.appendChild(p);
  }
  grid.appendChild(card);
}

const rules = document.getElementById("rules");
for (const r of RULES) {
  const li = document.createElement("li");
  li.textContent = r;
  rules.appendChild(li);
}

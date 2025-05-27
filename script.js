
const blocks = [
  { title: "Стосунки з мамою", questions: [
    "Я відчуваю, що мої досягнення та зусилля часто знецінювались та критикувались мамою.",
    "Я відчуваю, що навіть зараз, дорослий (доросла), маю залежність від думки мами чи боюсь розчарувати чи засмутити її.",
    "Я вважаю, що мама використовувала маніпуляції з метою впливати на мої рішення.",
    "Мені доводилось брати на себе рішення проблем, які зазвичай вирішують дорослі, щоб підтримати маму.",
    "Моя мама часто була емоційно відсторонена чи холодна по відношенню до мене.",
    "Мама була недостатньо присутня в моєму житті (я її взагалі не знав, пішла, весь час була на роботі, багато хворіла).",
    "Я вважаю свої стосунки з мамою ідеальними та зразковими, через що постійно прагну до досконалості (відчуваю травмуючий перфекціонізм).",
    "Мама використовувала фізичні покарання в моєму дитинстві."
  ]},
  // Інші блоки будуть додані...
];

const form = document.getElementById("quiz-form");

blocks.forEach((block, blockIndex) => {
  const blockDiv = document.createElement("div");
  blockDiv.className = "question-block";
  const title = document.createElement("h3");
  title.textContent = block.title;
  blockDiv.appendChild(title);

  block.questions.forEach((q, qIndex) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "checkbox";
    input.name = `block${blockIndex}`;
    input.value = 1;
    label.appendChild(input);
    label.append(" " + q);
    blockDiv.appendChild(label);
    blockDiv.appendChild(document.createElement("br"));
  });

  form.appendChild(blockDiv);
});

document.getElementById("submit-btn").addEventListener("click", () => {
  const results = blocks.map((block, i) => {
    const inputs = document.querySelectorAll(`input[name=block${i}]:checked`);
    return inputs.length;
  });

  const ctx = document.getElementById("result-chart").getContext("2d");
  new Chart(ctx, {
    type: "radar",
    data: {
      labels: blocks.map(b => b.title),
      datasets: [{
        label: "Ваш результат",
        data: results,
        fill: true,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        pointBackgroundColor: "rgba(54, 162, 235, 1)"
      }]
    },
    options: {
      scale: {
        ticks: { beginAtZero: true, stepSize: 1, max: 8 }
      }
    }
  });
});

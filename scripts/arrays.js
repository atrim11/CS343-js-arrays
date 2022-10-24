console.log(data);
// 1. instead of creating the cards manually, we should use array functions to convert the data into cards

const courseToCard = ({
  prefix,
  number,
  title,
  url,
  desc,
  prereqs,
  credits,
}) => {
  const prereqLinks = prereqs
    .map((prereq) => `<a id="prereqs" href="#" class="card-link">${prereq}</a>`)
    .join();
  const courseTemplate = `<div class="col">
            <div class="card" style="width: 18rem;">
              <h3 class="card-header"><a href="${url}">${title}</a></h3>
              <div class="card-body">
                <h5 class="card-title">${prefix} ${number}</h5>
                <p class="card-text">${desc}</p>
                ${prereqLinks}
                <div id="credits"class="card-footer text-muted">
                  ${credits}
                </div>
              </div>
            </div>
          </div>`;
  return courseTemplate;
};
const resultsContainer = document.querySelector("#filtered-results");
const courseCards = data.items.map(courseToCard);
resultsContainer.innerHTML = courseCards.join("");

// 2. maybe we only show those that match the search query?

function filterCourseCard(markup, query) {
  console.log(markup, query);
  return markup.toLowerCase().includes(query.toLowerCase());
}

const searchField = document.querySelector('input[name="query-text"]');
searchField.addEventListener("input", (ev) => {
  ev.preventDefault();
  const queryText = searchField.value;
  const filteredCourseCards = courseCards.filter((card) => 
    filterCourseCard(card, queryText)
  );
  resultsContainer.innerHTML = filteredCourseCards.join("");
  updateSummary(filteredCourseCards);
}); 

// 3. we update the result count and related summary info as we filter

function updateSummary(cards) {
  const items = document.getElementById('items');
  const total = document.getElementById("total");
  const prerec = document.getElementById("prerec");
  const countT = cards.filter((card) => card.includes("credits")).length * 3;
  const countP = cards.filter((card) => card.includes("prereqs")).length * 3;
  items.textContent = cards.length;
  total.textContent = countT;
  prerec.textContent = countP;
}

updateSummary(courseCards);


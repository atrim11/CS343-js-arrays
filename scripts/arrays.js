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
    .map((prereq) => `<a href="#" class="card-link">${prereq}</a>`)
    .join();
  const courseTemplate = `<div class="col">
            <div class="card" style="width: 18rem;">
              <h3 class="card-header">${title}</h3> 
              <div class="card-body">
                <h5 class="card-title">${prefix} ${number}</h5>
                <p class="card-text">${desc}</p>
                <p class="card-text">Prerequisites: ${prereqLinks}</p>
                <p class="card-text">Credits: ${credits}</p>
                <a href="${url}" class="btn btn-primary">Go to course</a>
              </div>
            </div>
          </div>`;
  return courseTemplate;
};

const courseCards = data.items
  .map(courseToCard)
  .forEach((c) => document.write(c));
// console.log(courseCards);
// document.write(courseCards.join(''))

// 2. maybe we only show those that match the search query?
//
const searchButton = document.getElementById("search-btn");
searchButton.addEventListener("click", (ev) => {
  ev.preventDefault();
  console.log("query text");
  const searchField = document.querySelector('input[name="query-text"]');
  const queryText = searchField.value;
  data.items.forEach((c) => {
    if (
      c.title.toLowerCase().includes(queryText.toLowerCase()) ||
      c.prefix.toLowerCase().includes(queryText.toLowerCase()) ||
      c.number.toString().includes(queryText.toLowerCase())
    ) {
      console.log(c.title);
    }
  });
});

// 3. we update the result count and related summary info as we filter

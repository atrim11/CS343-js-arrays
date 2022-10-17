console.log(data);
// 1. instead of creating the cards manually, we should use array functions to convert the data into cards
const courseToCard = ({prefix, number, title, url, desc, prereqs, credits}) => {
    const courseTemplate = `<div class="col">
              <div class="card" style="width: 18rem;">
                <h3 class="card-header">${title}</h3>
                <div class="card-body">
                  <h5 class="card-title">${prefix} ${number}</h5>
                  <p class="card-text">${desc}</p>
                </div>
              </div>
            </div>`;
    return courseTemplate;
  }
  
  const courseCards = data.items.map(courseToCard).forEach((c) => document.write(c));
// 2. maybe we only show those that match the search query?

// 3. we update the result count and related summary info as we filter


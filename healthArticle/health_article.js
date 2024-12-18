var xhr = new XMLHttpRequest();
var url = './health_article.json';

xhr.open('GET', url, true);

//In this step, you need to inform the XMLHttpRequest object that the expected response from the server should be in JSON format.
xhr.responseType = 'json';

xhr.onload = function(){
    if (xhr.status >= 200 && xhr.status < 300) {
    //articles to retrieve the articles array from the JSON response.
    var articles = xhr.response.articles;
    // articlesDiv to retrieve the HTML element with the ID 'articles' where the fetched content will be displayed.
    var articlesDiv = document.getElementById('articles');
   //Iterating through articles in.json file and create HTML elemnt needed.
   articles.forEach(function(article) {
      var articleDiv = document.createElement('div');
      articleDiv.classList.add('article');

      var title = document.createElement('h2');
      title.textContent = article.title;

      var description = document.createElement('p');
      description.textContent = article.description;

      var waysHeader = document.createElement('h3');
      waysHeader.textContent = 'Ways to Achieve:';

      var waysList = document.createElement('ul');
      article.ways_to_achieve.forEach(function(way) {
        var listItem = document.createElement('li');
        listItem.textContent = way;
        waysList.appendChild(listItem);
      });

      var benefitsHeader = document.createElement('h3');
      benefitsHeader.textContent = 'Benefits:';

      var benefitsList = document.createElement('ul');
      article.benefits.forEach(function(benefit) {
        var listItem = document.createElement('li');
        listItem.textContent = benefit;
        benefitsList.appendChild(listItem);
      });

      articleDiv.appendChild(title);
      articleDiv.appendChild(description);
      articleDiv.appendChild(waysHeader);
      articleDiv.appendChild(waysList);
      articleDiv.appendChild(benefitsHeader);
      articleDiv.appendChild(benefitsList);

      articlesDiv.appendChild(articleDiv);
    });
 } else { 
        console.error('Failed to retrieve articles:', xhr.statusText); 
    }
};

// Send the request
xhr.send();
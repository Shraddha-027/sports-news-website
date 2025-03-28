$(document).ready(function() {
  

/* -----------------------------------------------
                MOBILE NAVIGATION     
-------------------------------------------------- */

  $(".burger-icon").on("click", function() {
	  if($( ".main-nav" ).hasClass( "mobile-hide" )){
		    $(".main-nav").removeClass("mobile-hide");
		    $(".main-nav").addClass("mobile-show");
	  }else{
		      $(".main-nav").addClass("mobile-hide");
		      $(".main-nav").removeClass("mobile-show");
	  }
  
  });


});
/*try*/
async function fetchSportsNews() {
    const apiKey = "d2e2322ee8e74ad2b57bbc1d5fda30ea";
    const url = `https://newsapi.org/v2/top-headlines?category=sports&apiKey=${apiKey}`;

    try {
        let response = await fetch(url);
        let data = await response.json();
        displayNews(data.articles);
    } catch (error) {
        console.error("Error fetching sports news:", error);
    }
}
/*Button*/
const homebtn = document.getElementById("home");
const cricketbtn = document.getElementById("cricket");
const footballbtn = document.getElementById("football");
const kabaddhibtn = document.getElementById("kabaddhi");
const Basketballbtn = document.getElementById("Basketball");
const Articlebtn = document.getElementById("Article");
const newsQuery = document.getElementById("newsQuery");
const newsType = document.getElementById("newsType");
const newsdetails = document.getElementById("newsdetails");
/*Other*/
var newsDataArr = [];

// apis 
const API_KEY = "d2e2322ee8e74ad2b57bbc1d5fda30ea"
const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=d2e2322ee8e74ad2b57bbc1d5fda30ea"
const cricket_NEWS = "https://newsapi.org/v2/everything?q=cricket&api_key=d2e2322ee8e74ad2b57bbc1d5fda30ea";
const football_NEWS = "https://newsapi.org/v2/everything?q=football&apiKey=";
const kabaddhi_NEWS = "https://newsapi.org/v2/everything?q=kabaddhi&apiKey=";
const article_NEWS = "https://newsapi.org/v2/everything?q=article&apiKey=";
const home = "https://newsapi.org/v2/everything?q=home&apiKey=";
const Basketball_NEWS = "https://newsapi.org/v2/everything?q=basketball&apiKey=";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";

window.onload = function() {
    newsType.innerHTML="<h4>Headlines</h4>";
    fetchHeadlines();
};

homebtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Home</h4>";
    fetchhome();
});

cricketbtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Cricket</h4>";
    fetchcricketNews();
});

footballbtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Football</h4>";
    fetchFootballNews();
});

Basketballbtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Basketball</h4>";
    fetchBasketballNews();
});

Articlebtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Article</h4>";
    fetchArticleNews();
});

searchBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Search : "+newsQuery.value+"</h4>";
    fetchQueryNews();
});

const fetchHeadlines = async () => {
const response = await fetch(HEADLINES_NEWS);

    
    newsDataArr = [];

    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}


const fetchcricketNews = async () => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=cricket&apiKey=${API_KEY}`);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchBasketballNews= async () => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=basketball&apiKey=${API_KEY}`);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}



const fetchFootballNews = async () => {{
    const response = await fetch(`https://newsapi.org/v2/everything?q=football&apiKey=${API_KEY}`);

}
    const response = await fetch(football_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        console.log(myJson);
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchArticleNews = async () => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=article&apiKey=${API_KEY}`);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchhome = async () => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=home&apiKey=${API_KEY}`);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchQueryNews = async () => {

    if(newsQuery.value == null)
        return;

    const response = await fetch(SEARCH_NEWS+encodeURIComponent(newsQuery.value)+"&apiKey="+API_KEY);
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        //error handle
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}
function displayNews() {

    newsdetails.innerHTML = "";

    // if(newsDataArr.length == 0) {
    //     newsdetails.innerHTML = "<h5>No data found.</h5>"
    //     return;
    // }

    newsDataArr.forEach(news => {

        var date = news.publishedAt.split("T");
        
        var col = document.createElement('div');
        col.className="col-sm-12 col-md-4 col-lg-3 p-2 card";

        var card = document.createElement('div');
        card.className = "p-2";

        var image = document.createElement('img');
        image.setAttribute("height","matchparent");
        image.setAttribute("width","100%");
        image.src=news.urlToImage;

        var cardBody = document.createElement('div');
        
        var newsHeading = document.createElement('h5');
        newsHeading.className = "card-title";
        newsHeading.innerHTML = news.title;

        var dateHeading = document.createElement('h6');
        dateHeading.className = "text-primary";
        dateHeading.innerHTML = date[0];

        var discription = document.createElement('p');
        discription.className="text-muted";
        discription.innerHTML = news.description;

        var link = document.createElement('a');
        link.className="btn btn-dark";
        link.setAttribute("target", "_blank");
        link.href = news.url;
        link.innerHTML="Read more";

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(discription);
        cardBody.appendChild(link);

        card.appendChild(image);
        card.appendChild(cardBody);

        col.appendChild(card);

        newsdetails.appendChild(col);
    });

}




/*Other*/
/*function displayNews(articles) {
    let newsContainer = document.getElementById("news");
    newsContainer.innerHTML = "";

    articles.forEach(article => {
        let newsItem = document.createElement("div");
        newsItem.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Read more</a>
            <hr>
        `;
        newsContainer.appendChild(newsItem);
    });
}

// Fetch news every 30 seconds
setInterval(fetchSportsNews, 30000);
fetchSportsNews();*/

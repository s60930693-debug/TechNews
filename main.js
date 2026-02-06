const latest = document.getElementById("latest");
articles.slice(0,10).forEach(a=>{
  latest.innerHTML+=`<div class="article"><h2>${a.title}</h2><p>${a.excerpt}</p></div>`;
});

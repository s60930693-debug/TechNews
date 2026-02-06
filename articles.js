const container=document.getElementById("all-articles");
articles.forEach(a=>{
  container.innerHTML+=`<div class="article"><h2>${a.title}</h2><p>${a.excerpt}</p></div>`;
});

/**
 * Created by wxw on 2017/11/16.
 */
function openPage_catogory(){
  window.location.href="catogory.html";
}

function openPage_edit_article(){
  window.location.href="edit_article.html";
}

function openPage_search(){
  window.location.href="search.html";
}

function openPage_show_article(){
  window.location.href="show_article.html";
}

var new_article = "";

function set_new_article(article){
  new_article = article;
}

function get_new_article(){
  return new_article;
}


var allFeeds=[{name:"Udacity Blog",url:"http://blog.udacity.com/feed"},{name:"CSS Tricks",url:"http://feeds.feedburner.com/CssTricks"},{name:"HTML5 Rocks",url:"http://feeds.feedburner.com/html5rocks"},{name:"Linear Digressions",url:"http://feeds.feedburner.com/udacity-linear-digressions"}];function init(){loadFeed(0)}function loadFeed(e,l){var n=allFeeds[e].url,o=allFeeds[e].name;$.ajax({type:"POST",url:"https://rsstojson.udacity.com/parseFeed",data:JSON.stringify({url:n}),contentType:"application/json",success:function(e,n){var t=$(".feed"),a=$(".header-title"),d=e.feed.entries,i=(d.length,Handlebars.compile($(".tpl-entry").html()));a.html(o),t.empty(),d.forEach(function(e){t.append(i(e))}),l&&l()},error:function(e,n,t){l&&l()},dataType:"json"})}google.setOnLoadCallback(init),$(function(){$(".feed");var n=$(".feed-list"),t=Handlebars.compile($(".tpl-feed-list-item").html()),a=0,e=$(".menu-icon-link");allFeeds.forEach(function(e){e.id=a,n.append(t(e)),a++}),n.on("click","a",function(){var e=$(this);return $("body").addClass("menu-hidden"),loadFeed(e.data("id")),!1}),e.on("click",function(){$("body").toggleClass("menu-hidden")})}());
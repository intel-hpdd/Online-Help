/*! 
User comments script functions for Premium Pack Version 2.15 for Help & Manual 6
Support for Disqus and IntenseDebate commenting systems
Copyright (c) 2008-2013 by Tim Green 
All rights reserved. 
*/
var comments_off=false;var comments_delay=10;var $cBox,$cLink1,$cLink2,comments_online,comments_off;var cCount="0";var pCount=0;var iOx=/ipad|iphone/gi;var comments_intensedebate=comments_type.toLowerCase()=="intensedebate"?true:false;var comments_disqus=comments_type.toLowerCase()=="disqus"?true:false;var commentsWidth=function(){var a=$cBox.width();var c=$(document).width();var b=0;if(a>842&&c>912){b=a-842;$cBox.css({right:"",width:"842px"})}else{if(c<912){$cBox.css({right:40+"px",width:""})}}};comments_online=comments_path.substr(0,comments_path.lastIndexOf("/"))==location.href.substr(0,location.href.lastIndexOf("/"));if(!comments_online){comments_off=false}$(document).ready(function(){$cBox=$("div#commentsWrapper");$cLink1=$("#commentToggle1");$cLink2=$("a#commentToggle2");if((iOx.test(navigator.platform)&&comments_disqus)||comments_off){$("p#commentLink1, div#commentsBox").hide()}else{if(comments_disqus){var c="";var d=window.setInterval(function(){var e="dsq-num-posts";var f="dsq-num-posts";if($("iframe#dsq1").length>0){c=window.comments_link;$cLink1.html(c).attr("title",window.comments_showtip);$cLink2.html(c).attr("title",window.comments_showtip);window.clearInterval(d)}else{if($("#"+f).length>0){cCount=$("#"+e).length>0?$("#"+e).html():"0";$cLink1.html(($("#"+e).length>0)?window.comments_link+' (<span class="comments">'+cCount+"</span>)":window.comments_link+' (<span class="comments">0</span>)').attr("title",window.comments_showtip);$cLink2.html($cLink1.html()).attr("title",window.comments_showtip);window.clearInterval(d)}else{if(pCount>comments_delay*5){window.clearInterval(d);$cLink1.html(c).attr("title",window.comments_showtip);cBox.innerHTML="<h4>"+window.comments_offline+"</h4>"}}}pCount++},200)}else{if(comments_intensedebate){var a="idc-commentcount";var b="idc-commentcount_label";var d=window.setInterval(function(){if($("#"+b).length>0){cCount=document.getElementById(a)?document.getElementById(a).innerHTML:"0";$cLink1.html(document.getElementById(a)?window.comments_link+' (<span class="comments">'+cCount+"</span>)":window.comments_link+' (<span class="comments">0</span>)').attr("title",window.comments_showtip);$cLink2.html($cLink1.html()).attr("title",window.comments_showtip);window.clearInterval(d)}else{if(pCount>comments_delay*5){cCount="?";$cLink1.html(window.comments_link+' (<span class="comments">?</span>)');$cLink2.html($cLink1.html());$cBox.html("<h4>"+window.comments_offline+"</h4>");window.clearInterval(d)}}pCount++},200)}}}});$(window).bind("resize",commentsWidth);function showComments(){var a;if($cBox.css("visibility")=="visible"){$cBox.slideUp(400,function(){$("div#atocIcon").show();$cLink1.css("visibility","visible");$cLink2.css("visibility","visible");$cBox.css("visibility","hidden");if(comments_intensedebate){window.location.reload()}});return false}else{commentsWidth();$cBox.hide();$cBox.css("visibility","visible");$cBox.slideDown(400);$("div#atocIcon").hide();$cLink1.css("visibility","hidden");$cLink2.css("visibility","hidden");return false}}function doDisqus(){document.write('<div id="disqus_thread"></div>');if(!iOx.test(navigator.platform)&&!comments_off){(function(){var a=document.createElement("script");a.type="text/javascript";a.async=true;a.src="http://"+disqus_shortname+".disqus.com/embed.js";(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(a)})();document.write('<noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript" target="_blank">comments powered by Disqus.</a></noscript>');document.write('<a href="http://disqus.com" class="dsq-brlink" target="_blank">Commenting system powered by <span class="logo-disqus">Disqus</span></a>')}}function doIntenseDebate(){if(!comments_off){var a=document.createElement("script");a.setAttribute("type","text/javascript");a.setAttribute("src","http://www.intensedebate.com/js/genericCommentWrapperV2.js");document.write('<span id="IDCommentsPostTitle" style="display:none"></span>');document.getElementById("commentsBox").appendChild(a)}}$(document).ready(function(){if(window.frameElement){if(window.frameElement.id!="hmcontent"){$("a.commentLink").hide()}}else{$("a.commentLink").hide()}});
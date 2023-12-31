function copyText(e){if(navigator.clipboard)navigator.clipboard.writeText(e);else{var t=document.createElement("textarea");t.value=e,t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select(),document.execCommand("copy"),document.body.removeChild(t)}}var username=document.head.querySelector('link[rel="canonical"]').href.split("/")[3],copying=!1,em=document.querySelector("a[data-em]");em&&em.setAttribute("href","mailto:"+decodeURIComponent(atob(em.dataset.em)));var add=document.getElementById("add");add&&(add.onclick=function(){var e=username+"/vcf"+(""===window.location.pathname.split("/")[1]?"/1":"");location.href=encodeURIComponent(e)});var contactUrls=["tel","sms","mailto"];function split(e,t){var n=e.indexOf(t);return n>0?e.slice(0,n):""}function cc(e){var t=e.metaKey||e.ctrlKey||"contextmenu"===e.type,n=e.currentTarget.href,i=e.currentTarget.querySelector(".link-title-copy-overlay");if(t||e.preventDefault(),window.fbq&&(i||contactUrls.indexOf(split(n,":"))>-1?fbq("track","Contact"):fbq("trackCustom","LinkClick",{url:n})),i){if(n="#",copying)return;if(copying=!0,window.jQuery){var a=$(e.currentTarget).find(".link-block-text-wrapper"),r=$(i).find(".link-url"),o=a.find(".link-url").text()===r.text()&&"‎"!==a.find(".link-name").text();copyText(r.text()),(a=o?a.find(".link-name"):a).animate({opacity:0},300).delay(550).animate({opacity:1},300),o&&r.css("opacity",0),$(i).animate({opacity:1},300).delay(550).animate({opacity:0},{duration:300,complete:function(){copying=!1}})}}else if(n.includes("amazon.com")&&!n.includes("/shop/")){const e=new URL(n);"amazon.com"!==e.hostname.replace(/^www\./,"")||e.searchParams.has("tag")||(e.searchParams.append("tag","pageview-20"),n=e.href)}count(e.currentTarget.id,n,t)}for(var link=document.getElementsByClassName("link-button"),i=0;i<link.length;i++)link[i].addEventListener("click",cc,!0),link[i].addEventListener("contextmenu",cc,!0);function ec(e){var t=e.metaKey||e.ctrlKey||"contextmenu"===e.type,n=e.currentTarget.href;contactUrls.indexOf(split(n,":"))>-1?window.fbq&&(fbq("track","Contact"),t||(e.preventDefault(),setTimeout((function(){location.href=n}),100))):(t||e.preventDefault(),window.fbq&&fbq("trackCustom","LinkClick",{url:n}),count(e.currentTarget.id,n,t))}var soc=document.querySelectorAll(".minimal-button, .contact-button:not(div)");for(i=0;i<soc.length;i++)soc[i].addEventListener("click",ec,!0),soc[i].addEventListener("contextmenu",ec,!0);function count(e,t,n){var i=new XMLHttpRequest;i.open("POST","/count"),i.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),i.onload=n||"#"===t?"":function(){location.href=t},i.send("id="+encodeURIComponent(e)+"&page="+encodeURIComponent(username))}if(window.jQuery){$("#discord").click((function(){copying||(copying=!0,copyText($(this).data("username")),$(this).find(".contact-button-image, .contact-button-text").animate({opacity:0},300).delay(550).animate({opacity:1},300),$(this).find(".contact-button-copy-overlay").animate({opacity:1},300).delay(550).animate({opacity:0},{duration:300,complete:function(){copying=!1}}))}));var capture=document.getElementById("email-form");if(capture){function subscribe(e){if("#"===$(e).attr("action")){$.ajaxSetup({headers:{"X-CSRF-TOKEN":$(e).find("input[name=_token]").val()}});var t={type:"POST",url:encodeURIComponent(username+"/cap"),success:function(e){$(".blank-success-message").show()}}}else t={url:$(e).attr("action").replace("/post?","/post-json?"),jsonp:"c",dataType:"jsonp",cache:!1,success:function(e){if($(".blank-success-message").show(),"success"!==e.result){var t="Error: try again later";e.msg.search("already subscribed")>-1?t="Already subscribed":e.msg.search("too many")>-1?t="Too many recent attempts":e.msg.search("captcha")>-1?t="Error: reCAPTCHA must be disabled":e.msg.search("enter a value")>-1?t="Error: non-email field set to required":console.log(e.msg.replace(/(<([^>]+)>(.*?)<([^>]+)>)/,"")),$(".capture-success").text(t)}}};var n={data:$(e).serialize(),error:function(e){$(".blank-success-message").show().find(".capture-success").text("Error: invalid integration setup"),console.log(e)},complete:function(){$("#email-form, .capture-legal-wrapper").hide(),window.fbq&&fbq("trackCustom","EmailCapture")}};$.extend(t,n),$.ajax(t)}capture.addEventListener("submit",(function(e){e.preventDefault(),this.querySelector('button[type="submit"]').disabled=!0,""===$("#comment").val()&&subscribe(this)})),$("#email, #phone, #fname").on({focusin:function(){var e=$(".capture-multi-field");if(e.height()<60){var t=e.css({height:"auto"}).height();e.css("height",""),e.animate({height:t},150)}$(".capture-legal-wrapper").animate({opacity:["show"],height:["show"]},100)},focusout:function(){var e=($("#email").val()||"")+($("#phone").val()||"")+($("#fname").val()||"");setTimeout((function(){if(""===e&&-1===$.inArray(document.activeElement.id,["email","phone","fname"])){var t=$(".capture-multi-field"),n=t.css({height:""}).height();t.css("height","auto"),t.animate({height:n},150),$(".capture-legal-wrapper").animate({opacity:["hide"],height:["hide"]},150)}}),100)}})}var search=document.getElementById("search-form");if(search){function linkFullWidthUpdate(){var e=$(".profile-link-wrapper").find(".link-item-wrapper, .rich-media-wrapper");$(".link-item-wrapper-full-width").removeClass("link-item-wrapper-full-width").find(".link-button-full-width").removeClass("link-button-full-width");var t=e.filter((function(){return"flex"===$(this).css("display")})),n=$(".rich-media-wrapper, .divider-wrapper").filter((function(){return"block"===$(this).css("display")}));n.length>0?$(".profile-search-wrapper").add(n).each((function(e){var t=$(this).nextUntil(n[e]).filter(".link-item-wrapper");1&t.length&&t.first().fullWidth()})):1&t.length&&t.first().fullWidth(),$(".divider-wrapper-top").removeClass("divider-wrapper-top"),$(".profile-search-wrapper").next(".divider-wrapper").addClass("divider-wrapper-top")}function resetContent(){$(".profile-search-clear-button").hide(),$(".link-item-wrapper, .divider-wrapper, .rich-media-wrapper, .capture-wrapper").show()}$.fn.fullWidth=function(){this.addClass("link-item-wrapper-full-width").find(".link-button").addClass("link-button-full-width")},$.expr[":"].contains=$.expr.createPseudo((function(e){return function(t){return $(t).text().toUpperCase().indexOf(e.toUpperCase())>=0}})),$("#search").on("input",(function(){var e=$(this).val();""!==e?($(this).next().show(),$(".link-item-wrapper, .divider-wrapper, .rich-media-wrapper").hide(),$(".link-item-wrapper-full-width").removeClass("link-item-wrapper-full-width").find(".link-button-full-width").removeClass("link-button-full-width"),$(".profile-search-wrapper").nextAll(".capture-wrapper").hide(),$(".link-name:contains("+e+"), .link-url:contains("+e+")").closest(".link-item-wrapper").show()):resetContent(),linkFullWidthUpdate()})),$(".profile-search-clear-icon").click((function(){$("#search-form").trigger("reset"),resetContent(),linkFullWidthUpdate()}))}$(".seated-load-button").click((function(){$(this).closest(".rich-media-wrapper").find(".seated-event-row").css("display","flex").end().find(".seated-follow-box").show(),$(this).hide()}))}var btn=document.getElementsByClassName("twitch-chat-open"),toggleChat=function(){var e=this.previousElementSibling,t=this.firstChild,n=this.lastChild;0===parseFloat(getComputedStyle(e,null).height.replace("px",""))?(t.nodeValue="Close Chat",e.style.height="400px",n.style.transform="rotate(180deg)"):(t.nodeValue="Open Chat",e.style.height="0",n.style.transform="rotate(0deg)")};for(i=0;i<btn.length;i++)btn[i].addEventListener("click",toggleChat,!1);
const el = (sel, par) => (par || document).querySelector(sel);

const elWrap = el("#wrap");
const elTilt = el("#tilt");
const elGlow = document.querySelectorAll(".profile-info-wrapper")
const settings = {
  max: 20,
  perspective: 1000,
  scale: 1,
  axis: "",
};

function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

function getHeight() {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight
  );
}

elWrap.style.perspective = `${settings.perspective}px`;
let hovering = false

const hover = (event) => {
  hovering = true
  console.log(hovering)
}

const nothover = (event) => {
  hovering = false
  console.log(hovering)
}

const tilt = (event) => {
  const bcr = elWrap.getBoundingClientRect();
  const x = Math.min(1, Math.max(0, (event.clientX - bcr.left) / bcr.width));
  const y = Math.min(1, Math.max(0, (event.clientY - bcr.top) / bcr.height));
  let reverse = 0.2
  if (event.clientX > window.innerWidth / 2) {
    reverse = 0.2
  } else {
    reverse = -0.2
  }
  const tiltX = reverse * (settings.max - x * settings.max / 4);
  const tiltY = reverse * (y * settings.max - settings.max / 5);
  elTilt.style.transform = `
    rotateX(${settings.axis === "x" ? 0 : tiltY}deg)
    rotateY(${settings.axis === "y" ? 0 : tiltX}deg)
    scale(${settings.scale})
  `;
}

elWrap.addEventListener("pointermove", tilt);
elTilt.addEventListener("onmouseover", hover);
elTilt.addEventListener("onmouseleave", nothover);
elTilt.addEventListener("pointermove", (mouse) => {
  elGlow.forEach((el) => {
    const bcr = el.getBoundingClientRect();
    elTilt.style.setProperty("--x", mouse.clientX - bcr.left)
    elTilt.style.setProperty("--y", mouse.clientY - bcr.top)
  })
})

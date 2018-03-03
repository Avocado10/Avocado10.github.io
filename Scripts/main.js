function animateChapter(target)
{
    ctrl&&ctrl.destroy();
    var windowH=$(window).height();
    $(window).on("resize",function(){windowH=$(window).height()}),ctrl=new ScrollMagic.Controller;
    var Tltitle=new TimelineMax;
    Tltitle.add([TweenMax.to('#chapters-menu li a[data-target="'+target+'"]',1,{y:"30%",opacity:0})]),new ScrollMagic.Scene({triggerElement:"#chapter-"+target,duration:"100%",offset:"500%"}).setTween(Tltitle).addTo(ctrl);
    var chapterTarget=$("#chapter-"+target),footTarget=chapterTarget.find(".chapter-foot"),navLinkPrev=chapterTarget.find(".nav-link-prev"),navLinkNext=chapterTarget.find(".nav-link-next"),Tlfoot=new TimelineMax;
    Tlfoot.add([TweenMax.to(navLinkPrev,1,{left:0,opacity:0,ease:Power4.easeInOut}),TweenMax.to(navLinkNext,1,{right:0,opacity:0,ease:Power4.easeInOut})]),new ScrollMagic.Scene({triggerElement:footTarget.get(0),triggerHook:"onEnter"}).setTween(Tlfoot).addTo(ctrl);var item=$("#chapter-"+target+" .lb-item ");
    item.each(function(){var innerImg=$(this).find("img, .play-video");
    TweenMax.set(innerImg,{clearProps:"all"});
    var Tlin=new TimelineMax,Tlout=new TimelineMax;
    $(this).hasClass("slide-in-left")?Tlin.add([TweenMax.from(innerImg,.5,{y:"20%",opacity:0}),TweenMax.from(innerImg,1.2,{left:"-80vw"})]):$(this).hasClass("slide-in-right")?Tlin.add([TweenMax.from(innerImg,.5,{y:"20%",opacity:0}),TweenMax.from(innerImg,1.2,{left:"70vw"})]):Tlin.add([TweenMax.from(innerImg,.5,{y:"20%",opacity:0})]),Tlout.add([TweenMax.to(innerImg,.5,{y:"-20%",opacity:0})]),new ScrollMagic.Scene({triggerElement:this,triggerHook:"onEnter",offset:"100"}).setTween(Tlin).addTo(ctrl)})}var ctrl;
    !function($){var body=$("body"),menu=$("#chapters-menu"),bg=$("#chapters-menu-bg"),chaptersBg=menu.find("[data-bg-target]"),chaptersBgLi=chaptersBg.closest("li"),chapters=$("[data-chapter-target]"),nikeCortez=$(".nike-cortez"),topLabel=$("#top-label"),returnToHome=$("#top-return-to-home"),chapterOpen=void 0,windowWidth=$(window).width(),landscape=!1;$(window).height()<$(window).width()&&(landscape=!0),console.log(landscape),menu.on("mouseleave",function(){bg.trigger("showBg","base"),TweenMax.to(chaptersBgLi,.6,{opacity:1}),TweenMax.to(chaptersBgLi.find(".separator"),.4,{height:"100%",opacity:1,ease:Power3.easeOut})}),chaptersBg.on("mouseenter",function(){var target=$(this).attr("data-bg-target");bg.trigger("showBg",target),TweenMax.to(chaptersBgLi,1,{opacity:.15}),TweenMax.to(chaptersBgLi.find(".separator"),.6,{height:"80%",opacity:.15,ease:Power3.easeOut}),TweenMax.to($(this).closest("li"),.6,{opacity:1})}),chapters.on("click",function(e){e.preventDefault();
        var target=$(this).attr("data-chapter-target");body.trigger("openChapter",target),animateChapter(target)}),bg.on("showBg",function(e,target){var targetBg=bg.find('[data-bg="'+target+'"]'),allBg=bg.find("[data-bg]").not(targetBg);
        allBg.removeClass("visible"),targetBg.addClass("visible")}),body.on("openChapter",function(e,target){if(bg.off("showBg"),menu.off("mouseleave"),chaptersBg.off("mouseenter"),void 0!==chapterOpen){var targetLink=menu.find('[data-chapter-target="'+target+'"]'),oldLink=menu.find('[data-chapter-target="'+chapterOpen+'"]'),targetLi=targetLink.closest("li"),oldLi=oldLink.closest("li"),targetChapter=$("#chapter-"+target),oldChapter=$("#chapter-"+chapterOpen),targetBg=targetChapter.attr("data-bg-gradient"),targetHeight=targetChapter.outerHeight(),Tl=new TimelineMax;TweenMax.set("body",{minHeight:targetHeight,overflow:"hidden"}),TweenMax.set(targetChapter,{zIndex:91}),TweenMax.set(oldChapter,{zIndex:90}),TweenMax.set(targetChapter.find(".chapter-foot"),{clearProps:"all"}),Tl.add([TweenMax.to(oldChapter.find(".chapter-foot"),.5,{opacity:.8,y:"100%"}),TweenMax.to(oldChapter,.6,{display:"none",opacity:0}),TweenMax.to(oldChapter.find(".chapter-content"),.6,{filter:"blur(20px)"}),TweenMax.to(oldLi,.6,{display:"none",opacity:0,filter:"blur(20px)"}),TweenMax.to(nikeCortez,.2,{opacity:0,marginTop:15})]),Tl.add([TweenMax.to("body",.3,{backgroundImage:targetBg}),TweenMax.to(window,.2,{scrollTo:0})]),Tl.add([TweenMax.fromTo(targetChapter,1,{display:"none",opacity:0},{display:"block",opacity:1}),TweenMax.fromTo(targetChapter.find(".chapter-content"),1,{filter:"blur(20px)"},{filter:"blur(0px)"}),TweenMax.fromTo(targetLi,1,{display:"none",opacity:0,filter:"blur(20px)",scale:1.1},{display:"block",opacity:1,filter:"blur(0px)",scale:1}),TweenMax.to("body",1,{overflow:"auto"})]),Tl.add([TweenMax.to(nikeCortez,.5,{opacity:1,marginTop:0})]),chapterOpen=target}else{chapterOpen=target;
            var targetLink=menu.find('[data-chapter-target="'+target+'"]'),othersLink=menu.find("[data-chapter-target]").not('[data-chapter-target="'+target+'"]'),targetLi=targetLink.closest("li"),othersLi=menu.find("li").not(targetLi),separators=menu.find(".separator"),allChapters=$(".chapter-wrapper").not("#chapter-"+target),chapter=$("#chapter-"+target),targetBg=chapter.attr("data-bg-gradient"),Tl=new TimelineMax;TweenMax.killAll(),TweenMax.to("body",.4,{backgroundImage:targetBg}),windowWidth>767?(Tl.add([TweenMax.to(menu,.01,{pointerEvents:"none"}),TweenMax.staggerTo(separators,.4,{height:"0%",ease:Power4.easeIn,opacity:0,display:"none"},.2),TweenMax.staggerTo(othersLi,.4,{y:"-20%",opacity:0,display:"none",delay:.1,ease:Power4.easeIn},.1)]),targetLink.hasClass("animation-one")?Tl.add([TweenMax.to(topLabel,.6,{opacity:0,top:"-10px",display:"none"}),TweenMax.to(targetLi,.55,{width:"100%",left:0,ease:Power3.easeOut,delay:0}),TweenMax.to(targetLink,1e-4,{fontSize:"calc(0.5rem + 7.5vh)",ease:Power0.easeNone}),TweenMax.to(menu,.6,{top:"45%",ease:Power4.easeOut})]):Tl.add([TweenMax.to(topLabel,.8,{opacity:0,top:"-10px",display:"none"}),TweenMax.to(targetLi,.76,{width:"100%",left:0,ease:Power4.easeOut}),TweenMax.to(targetLink,.2,{fontSize:"calc(0.5rem + 7.5vh)",ease:Power0.easeNone}),TweenMax.to(menu,.8,{top:"45%",ease:Power4.easeOut})]),Tl.add([TweenMax.to(returnToHome,.6,{opacity:1,top:"33px",display:"block"}),TweenMax.to(nikeCortez,.2,{className:"+=visible-label"}),TweenMax.to(allChapters,.5,{display:"none"}),TweenMax.fromTo(chapter,.5,{opacity:0,display:"none"},{opacity:1,display:"block"}),TweenMax.to(bg,1,{opacity:0,display:"none"}),TweenMax.to(othersLi,.01,{width:"100%",y:"-50%",left:0,display:"none",opacity:0}),TweenMax.to(othersLink,.01,{fontSize:"calc(0.5rem + 7.5vh)"})])):(Tl.add([TweenMax.to(menu,.01,{pointerEvents:"none"}),TweenMax.to(separators,.4,{width:"0%",height:"1px",ease:Power4.easeIn,display:"none"},.2),TweenMax.staggerTo(othersLi,.4,{scale:.2,opacity:0,display:"none",delay:.1,ease:Power4.easeIn},.1)]),Tl.add([TweenMax.to(topLabel,.6,{opacity:0,top:"-10px",display:"none"}),TweenMax.to(targetLi,.4,{height:"100%",top:"0%",ease:Power4.easeOut}),TweenMax.to(targetLink,.4,{fontSize:"calc(0.5rem + 5vh)",ease:Power4.easeOut})]),Tl.add([TweenMax.to(returnToHome,.6,{opacity:1,top:"30px",display:"block"}),TweenMax.to(nikeCortez,.2,{className:"+=visible-label"}),TweenMax.to(allChapters,.5,{display:"none"}),TweenMax.fromTo(chapter,.5,{opacity:0,display:"none"},{opacity:1,display:"block"}),TweenMax.to(bg,1,{opacity:0,display:"none"}),TweenMax.to(othersLi,.01,{height:"100%",top:"0%",display:"none",opacity:0}),TweenMax.to(othersLink,.01,{fontSize:"calc(0.5rem + 5vh)"})]))}})}(jQuery),function($){function fb_share(title,href,picture,caption,description){FB.ui({app_id:"684708731596126",method:"share",href:href,title:title,picture:picture,caption:caption,description:description},function(response){})}window.fbAsyncInit=function(){FB.init({appId:"684708731596126",xfbml:!0,version:"v2.6"}),FB.AppEvents.logPageView()},function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];d.getElementById(id)||(js=d.createElement(s),js.id=id,js.src="//connect.facebook.net/en_US/sdk.js",fjs.parentNode.insertBefore(js,fjs))}(document,"script","facebook-jssdk"),$(document).ready(function(){$(".fb-custom-share").click(function(event){event.preventDefault();var el=$(this),title=el.attr("data-title"),href=el.attr("data-href"),picture=el.attr("data-picture"),caption=el.attr("data-caption"),description=el.attr("data-description");el.attr("data-hashtag");fb_share(title,href,picture,caption,description)})})}(jQuery),function($){fbq&&"function"==typeof fbq&&($("#site-link a.shop").on("click",function(){fbq("trackCustom","LinkToShop"),ga&&"function"==typeof ga&&ga("send","event",{eventCategory:"LinkToShop",eventAction:"click"})}),$("#site-link a.facebook").on("click",function(){fbq("trackCustom","LinkToFacebook"),ga&&"function"==typeof ga&&ga("send","event",{eventCategory:"LinkToFacebook",eventAction:"click"})}),$("#site-link a.instagram").on("click",function(){fbq("trackCustom","LinkToInstagram"),ga&&"function"==typeof ga&&ga("send","event",{eventCategory:"LinkToInstagram",eventAction:"click"})}),$("#site-brand").on("click",function(){fbq("trackCustom","LinkToAwLab"),ga&&"function"==typeof ga&&ga("send","event",{eventCategory:"LinkToAwLab",eventAction:"click"})}),$("#top-return-to-home").on("click",function(){fbq("trackCustom","ReturnToHome"),ga&&"function"==typeof ga&&ga("send","event",{eventCategory:"ReturnToHome",eventAction:"click"})}),$("#chapters-menu > li > a[data-chapter-target], .chapter-wrapper a.nav-link[data-chapter-target], .chapter-foot .chapters-menu li > a[data-chapter-target]").on("click",function(){var chapter=$(this).attr("data-chapter-target");fbq("trackCustom","ViewChapter",{chapter:chapter}),ga&&"function"==typeof ga&&ga("send","event",{eventCategory:"ViewChapter",eventAction:chapter})}),$('.chapter-wrapper .chapter-inner .chapter-content .lb-item a[target="_blank"]').on("click",function(){var chapter=$(this).closest(".chapter-wrapper").attr("id").replace("chapter-","");fbq("trackCustom","LinkLookbook",{chapter:chapter}),ga&&"function"==typeof ga&&ga("send","event",{eventCategory:"LinkLookbook",eventAction:chapter})}),$(".chapter-wrapper .chapter-inner .chapter-content .share-wrapper .share-links li a").on("click",function(){var social,chapter=$(this).closest(".chapter-wrapper").attr("id").replace("chapter-","");
            social=$(this).hasClass("fb-custom-share")?"Facebook":"Instagram",fbq("trackCustom","ShareLookbook",{chapter:chapter,social:social}),ga&&"function"==typeof ga&&ga("send","event",{eventCategory:"ShareLookbook",eventAction:chapter,eventLabel:social})}))}(jQuery),function($){function activatePreloadEnding(){$(window).trigger("endPreload")}var preloader=$("#page-loader"),logo=preloader.find(".logo"),headline=preloader.find(".headline"),Tl=new TimelineMax,menu=$("#chapters-menu"),menuLink=menu.find(".chapter-link"),menuSep=menu.find(".separator"),windowWidth=$(window).width(),returnToHome=$("#top-return-to-home");$(document).ready(function(){console.log(window.location.hash),"#reloading"==window.location.hash?(window.location.hash="",Tl.add([TweenMax.to(preloader,1,{opacity:0,display:"none",delay:0,ease:Power3.easeOut}),TweenMax.staggerFrom(menuLink,.8,{opacity:0,filter:"blur(0px)",y:"20%",ease:Power3.easeOut},.2),TweenMax.staggerFrom(menuSep,.8,{height:0,delay:.3,ease:Power3.easeOut},.2)]),Tl.add([TweenMax.to(menuLink,.001,{clearProps:"all"}),TweenMax.to(menuSep,.001,{clearProps:"all"})])):$(window).trigger("initPreload")}),$(window).on("initPreload",function(){Tl.add([TweenMax.fromTo(logo,1,{opacity:0,filter:"blur(20px)",scale:1.1},{opacity:1,filter:"blur(0px)",scale:1,delay:.5}),TweenMax.fromTo(headline,1,{opacity:0,filter:"blur(20px)",scale:1.1},{opacity:1,filter:"blur(0px)",scale:1,delay:1})]),Tl.add([activatePreloadEnding])}),$(window).on("endPreload",function(){windowWidth>767?(Tl.add([TweenMax.to(menu,.001,{pointerEvents:"none"}),TweenMax.fromTo(logo,1,{opacity:1,filter:"blur(0px)",scale:1},{opacity:0,filter:"blur(20px)",scale:.9,delay:.5}),TweenMax.fromTo(headline,1,{opacity:1,filter:"blur(0px)",scale:1},{opacity:0,filter:"blur(20px)",scale:.9,delay:.65})]),Tl.add([TweenMax.to(preloader,1,{opacity:0,display:"none",delay:-.5,ease:Power3.easeOut}),TweenMax.staggerFrom(menuLink,.8,{opacity:0,filter:"blur(0px)",y:"20%",ease:Power3.easeOut},.2),TweenMax.staggerFrom(menuSep,.8,{height:0,delay:.3,ease:Power3.easeOut},.2)]),Tl.add([TweenMax.to(menuLink,.001,{clearProps:"all"}),TweenMax.to(menuSep,.001,{clearProps:"all"}),TweenMax.to(menu,.001,{pointerEvents:"all"})])):(Tl.add([TweenMax.to(menu,.001,{pointerEvents:"none"}),TweenMax.fromTo(logo,1,{opacity:1,filter:"blur(0px)",scale:1},{opacity:0,filter:"blur(20px)",scale:.9,delay:1}),TweenMax.fromTo(headline,1,{opacity:1,filter:"blur(0px)",scale:1},{opacity:0,filter:"blur(20px)",scale:.9,delay:1.5})]),Tl.add([TweenMax.to(preloader,1,{opacity:0,display:"none",delay:-.5,ease:Power3.easeOut}),TweenMax.staggerFrom(menuLink,.8,{opacity:0,filter:"blur(0px)",y:"20%",ease:Power3.easeOut},.2),TweenMax.staggerFrom(menuSep,.8,{width:0,delay:.3,ease:Power3.easeOut},.2)]),Tl.add([TweenMax.to(menuLink,.001,{clearProps:"all"}),TweenMax.to(menuSep,.001,{clearProps:"all"}),TweenMax.to(menu,.001,{pointerEvents:"all"})]))}),returnToHome.on("click",function(e){e.preventDefault(),TweenMax.to(preloader,1,{opacity:1,display:"block",delay:0,ease:Power3.easeOut}),setTimeout(function(){window.location.hash="reloading",location.reload()},1e3)}),bowser.mobile&&bowser.ios&&bowser.safari&&$("html").addClass("safari"),bowser.mobile&&$("html").addClass("mobile"),bowser.tablet&&$("html").addClass("tablet")}(jQuery),function($){$("#site-link .facebook").on("mouseenter",function(){var path=$(this).find("path, rect");TweenMax.fromTo(path,.7,{drawSVG:"0%",ease:Power3.easeOut},{drawSVG:"100%",ease:Power3.easeOut})}),$("#site-link .instagram").on("mouseenter",function(){var rect=$(this).find("#instagram-rect"),circleBig=$(this).find("#instagram-circle-big"),circleSmall=$(this).find("#instagram-circle-small");TweenMax.fromTo(rect,.7,{drawSVG:"0%",ease:Power3.easeOut},{drawSVG:"100%",ease:Power3.easeOut}),TweenMax.fromTo(circleBig,.7,{drawSVG:"0%",ease:Power3.easeOut},{drawSVG:"100%",delay:.2,ease:Power3.easeOut}),TweenMax.fromTo(circleSmall,.7,{drawSVG:"0%",ease:Power3.easeOut},{drawSVG:"100%",delay:.4,ease:Power3.easeOut})}),$(".share-links a").on("mouseenter",function(){var path=$(this).find("path");TweenMax.fromTo(path,.7,{drawSVG:"0%",ease:Power3.easeOut},{drawSVG:"100%",ease:Power3.easeOut})})}(jQuery),function($){var menu=$("#chapters-menu"),nikeCortez=$(".nike-cortez"),nikeCortezContent=$(".nike-cortez > *"),ctrl=new ScrollMagic.Controller,Tl=new TimelineMax;
            Tl.add([TweenMax.to(menu,1,{opacity:0}),TweenMax.to(nikeCortez,1,{top:"+=5%"}),TweenMax.to(nikeCortezContent,1,{opacity:0})]),new ScrollMagic.Scene({triggerElement:"body",duration:"100%",offset:"100%",triggerHook:"onLeave"}).setTween(Tl).addTo(ctrl)}(jQuery),function($){var items=$(".lb-item"),itemsVideoToggle=items.find(".play-video");itemsVideoToggle.on("click",function(e){e.preventDefault();
                var video=$(this).find("video");
                video.get(0).play(),setTimeout(function(){video.get(0).pause()},8e3)}),$("video").on("play",function(){$(this).closest(".video-wrapper").addClass("playing")}),$("video").on("pause",function(){$(this).closest(".video-wrapper").removeClass("playing")})}(jQuery);
/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function() {
  // FitVids init
  $("#main").fitVids();

  // Sticky sidebar
  var stickySideBar = function() {
    var show =
      $(".author__urls-wrapper button").length === 0
        ? $(window).width() > 1024 // width should match $large Sass variable
        : !$(".author__urls-wrapper button").is(":visible");
    if (show) {
      // fix
      $(".sidebar").addClass("sticky");
    } else {
      // unfix
      $(".sidebar").removeClass("sticky");
    }
  };

  stickySideBar();

  $(window).resize(function() {
    stickySideBar();
  });

  // Follow menu drop down
  $(".author__urls-wrapper button").on("click", function() {
    $(".author__urls").toggleClass("is--visible");
    $(".author__urls-wrapper button").toggleClass("open");
  });

  // Close search screen with Esc key
  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      if ($(".initial-content").hasClass("is--hidden")) {
        $(".search-content").toggleClass("is--visible");
        $(".initial-content").toggleClass("is--hidden");
      }
    }
  });

  // Search toggle
  $(".search__toggle").on("click", function() {
    $(".search-content").toggleClass("is--visible");
    $(".initial-content").toggleClass("is--hidden");
    // set focus on input
    setTimeout(function() {
      $(".search-content input").focus();
    }, 400);
  });

  // Smooth scrolling
  var scroll = new SmoothScroll('a[href*="#"]', {
    offset: 20,
    speed: 400,
    speedAsDuration: true,
    durationMax: 500
  });

  // Gumshoe scroll spy init
  if($("nav.toc").length > 0) {
    var spy = new Gumshoe("nav.toc a", {
      // Active classes
      navClass: "active", // applied to the nav list item
      contentClass: "active", // applied to the content

      // Nested navigation
      nested: false, // if true, add classes to parents of active link
      nestedClass: "active", // applied to the parent items

      // Offset & reflow
      offset: 20, // how far from the top of the page to activate a content area
      reflow: true, // if true, listen for reflows

      // Event support
      events: true // if true, emit custom events
    });
  }

  // add lightbox class to all image links
  $(
    "a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif'],a[href$='.webp']"
  ).has("> img").addClass("image-popup");

  // Magnific-Popup options
  $(".image-popup").magnificPopup({
    // disableOn: function() {
    //   if( $(window).width() < 500 ) {
    //     return false;
    //   }
    //   return true;
    // },
    type: "image",
    tLoading: "Loading image #%curr%...",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.'
    },
    removalDelay: 500, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open.
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: "mfp-zoom-in",
    callbacks: {
      beforeOpen: function() {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace(
          "mfp-figure",
          "mfp-figure mfp-with-anim"
        );
      }
    },
    closeOnContentClick: true,
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });

  // Add anchors for headings
  $('.page__content').find('h1, h2, h3, h4, h5, h6').each(function() {
    var id = $(this).attr('id');
    if (id) {
      var anchor = document.createElement("a");
      anchor.className = 'header-link';
      anchor.href = '#' + id;
      anchor.innerHTML = '<span class=\"sr-only\">Permalink</span><i class=\"fas fa-link\"></i>';
      anchor.title = "Permalink";
      $(this).append(anchor);
    }
  });

  // Set up Discord invite widget
  var discordInvite = discordInvite || function () {
    var i = {},
        e = "1.0";
    return {
        init: function (e) {
            e.inviteCode = void 0 !== e.inviteCode && e.inviteCode,
            e.title = void 0 !== e.title ? e.title : "",
            e.introText = void 0 !== e.introText ? e.introText : "You've been invited to join a server",
            e.joinText = void 0 !== e.joinText ? e.joinText : "Join",
            e.joinedText = void 0 !== e.joinedText ? e.joinedText : "Joined",
            e.width = void 0 !== e.width ? e.width : 400,
            e.miniMode = void 0 !== e.miniMode && e.miniMode,
            e.hideIntro = void 0 !== e.hideIntro && e.hideIntro,
            e.targetElement = void 0 !== e.targetElement ? e.targetElement : "#discordInviteBox",
            i.inviteCode = e.inviteCode,
            i.title = e.title,
            i.introText = e.introText,
            i.joinText = e.joinText,
            i.joinedText = e.joinedText,
            i.miniMode = e.miniMode,
            i.hideIntro = e.hideIntro,
            i.width = e.width,
            i.targetElement = e.targetElement
        },
        render: function () {
          if (discordCode = i.inviteCode, discordCode && "" != discordCode) {
              i.miniMode ? i.width = "auto" : "number" == typeof i.width && (i.width = i.width + "px");
              var t = '<div id="discordInvite" style="width: ' + i.width + ';"><h5 id="introText" class="noselect loadHidden">' + i.introText + '</h5><div id="discordData"><div id="serverImg" class="discordLink loadHidden" style="background: rgb(54, 57, 63) repeat scroll 50% 50% / 100% 100% padding-box padding-box;"></div><div id="discordInfo"><div id="serverNameBox" class="discordLink"><span class="noselect" id="serverName">' + i.title + '</span></div><div id="status" class="loadHidden"><div id="statusIndicators" class="noselect"><i id="onlineInd"></i><span id="numOnline">... Online</span><i id="offlineInd"></i><span id="numTotal">... Members</span></div></div></div><button type="button" class="discordLink" id="callToAction"><div id="buttonText" class="noselect">' + i.joinText + "</div></button></div></div>",
                  d = '<div id="joinedDiscord">' + i.joinedText + '<svg name="Checkmark" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" id="discordSVG"><g fill="none" fill-rule="evenodd" id="gDiscord"><polyline stroke="currentColor" stroke-width="2" points="3.5 9.5 7 13 15 5" id="discordPolyline"></polyline></g></svg></div>';
              $(i.targetElement).append(t).attr("version", e), $.ajax({
                  url: "https://discordapp.com/api/v6/invite/" + discordCode + "?with_counts=true",
                  success: function (e) {
                      e.code;
                      var t = e.approximate_member_count.toLocaleString("en") + " Members",
                          o = e.approximate_presence_count.toLocaleString("en") + " Online",
                          n = e.guild.name,
                          r = "https://cdn.discordapp.com/icons/" + e.guild.id + "/" + e.guild.icon + ".jpg";
                      $("#serverName").html(n), $("#serverImg").css("background-image", "url(" + r + ")"), $("#numTotal").html(t), $("#numOnline").html(o), $(".discordLink").click(function () {
                          $("#callToAction").html(d).attr("id", "callToAction-clicked"), url = "https://discordapp.com/invite/" + i.inviteCode, window.open(url, "_blank")
                      }), $(".loadHidden").show(), /*i.miniMode && $("#offlineInd, #numTotal").hide(),*/ i.hideIntro && $("#introText").hide()
                  },
                  error: function (i) {
                      $("#discordInvite").css("width", "auto");
                      var e = null;
                      void 0 !== i.responseJSON ? ($("#buttonText").html(i.responseJSON.message), $("#discordInfo").remove()) : ($("#discordData").remove(), e = !0), e ? $("#introText").html("ERROR: Invalid Data URL.") : $("#introText").html("An error has occurred."), $("#introText").css("margin", 0).show()
                  }
              })
          } else $(i.targetElement).html("Error: No Invite Code Provided").attr("id", "discordInviteError").css("display", "inline-block") 
        }
    } 
  }();
  
  discordInvite.init({
    inviteCode: 'QHqgE9kujZ',
    title: 'Automation Station',
    hideIntro: true,
    miniMode: false,
    width: 646
  });

  discordInvite.render();
});

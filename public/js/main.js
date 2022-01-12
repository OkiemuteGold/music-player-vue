// window.onscroll = function () {
//     var currentScrollPos = window.pageYOffset;

//     if (currentScrollPos > 20) {
//         $(".header").removeClass(".headertop");
//     } else {
//         $(".header").addClass(".headertop");
//     }
// }

$(document).ready(() => {
  // $("#home").addClass("showMenu");
  //$('#customCheck1').prop('indeterminate', true)
  var previousScroll = 0;

  $(window).scroll(() => {
    // $(".playlist_propertise").addClass("hide");
    var currentScroll = $(this).scrollTop();

    if (
      currentScroll > 0 &&
      currentScroll < $(document).height() - $(window).height()
    ) {
      if (currentScroll > previousScroll) {
        window.setTimeout(hideNav, 300);
      } else {
        window.setTimeout(showNav, 300);
      }
      previousScroll = currentScroll;
    }
  });

  function hideNav() {
    $("[data-nav-status='toggle']")
      .removeClass("is-visible")
      .addClass("is-hidden");
  }

  function showNav() {
    $("[data-nav-status='toggle']")
      .removeClass("is-hidden")
      .addClass("is-visible");
  }

  // CUT STRING FUNCTION
  function cutString(text, max) {
    return text && text.length > max
      ? text
          .slice(0, max)
          .split(" ")
          .slice(0, -1)
          .join(" ")
      : text;
  }

  // $(".music_control_title").click(() => {
  //   $(".show_playing_music").addClass("showPlaying");
  // });
  // $(".showCurrentMusic").click(() => {
  //   $(".show_playing_music").addClass("showPlaying");
  // });

  // $(".playMusic").click(() => {
  //   $(".playMusic").addClass("hide");
  //   $(".pauseMusic").removeClass("hide");
  //   $(".middle_icons").addClass("rotateplayingIcon");
  // });

  // $(".removePlaying").click(() => {
  //   $(".show_playing_music").removeClass("showPlaying");
  //   $(".playMusic").removeClass("hide");
  //   $(".pauseMusic").addClass("hide");
  // });

  // $(".pauseMusic").click(() => {
  //   $(".playMusic").removeClass("hide");
  //   $(".pauseMusic").addClass("hide");
  //   $(".middle_icons").removeClass("rotateplayingIcon");
  // });

  // $(".addToPlayListIcon").click(() => {
  //   $(".add_play_list").toggleClass("hide");
  // });
  // $(".showProperTise").click(() => {
  //   $(".music_propertise").removeClass("hide");
  //   $(".overlay_properties").removeClass("hide");
  //   $(".add_play_list").addClass("hide");
  // });

  // $(".removePropertise").click(() => {
  //   $(".music_propertise").addClass("hide");
  //   $(".overlay_properties").addClass("hide");
  //   $(".add_play_list").addClass("hide");
  // });

  // $(".showPlayListProperTise").click(() => {
  //   $(".playlist_propertise").removeClass("hide");
  // });

  // $("#songMenu").click(() => {
  //   $("#songMenu").addClass("isActiveLink");
  //   $("#artistMenu").removeClass("isActiveLink");
  //   $("#playlistMenu").removeClass("isActiveLink");
  //   $("#blacklistMenu").removeClass("isActiveLink");
  // });

  // $("#artistMenu").click(() => {
  //   $("#artistMenu").addClass("isActiveLink");
  //   $("#songMenu").removeClass("isActiveLink");
  //   $("#playlistMenu").removeClass("isActiveLink");
  //   $("#blacklistMenu").removeClass("isActiveLink");
  // });

  // $("#playlistMenu").click(() => {
  //   $("#playlistMenu").addClass("isActiveLink");
  //   $("#songMenu").removeClass("isActiveLink");
  //   $("#artistMenu").removeClass("isActiveLink");
  //   $("#blacklistMenu").removeClass("isActiveLink");
  // });

  // $("#blacklistMenu").click(() => {
  //   $("#blacklistMenu").addClass("isActiveLink");
  //   $("#songMenu").removeClass("isActiveLink");
  //   $("#artistMenu").removeClass("isActiveLink");
  //   $("#playlistMenu").removeClass("isActiveLink");
  // });

  // $(".add_new_container").click(() => {
  //   $(".add_new_container").toggleClass("rotatePlaylistIcon");
  //   $(".add_playlist_form").toggleClass("hide");
  // });

  // $(".cancelPlaylistForm").click(() => {
  //   $(".add_new_container").removeClass("rotatePlaylistIcon");
  //   $(".add_playlist_form").addClass("hide");
  // });
});

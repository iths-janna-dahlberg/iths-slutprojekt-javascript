$(document).ready(function() {
  /* For the sticky navigation */

  $(".js--section-photos").waypoint(
    function(direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "60px;"
    }
  );

  /* Navigation scroll */

  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        let target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            1000
          );
          return false;
        }
      }
    });
  });

  /* Animation in scroll */

  $(".js--wp-1").waypoint(
    function(direction) {
      $(".js--wp-1").addClass("animated fadeIn");
    },
    {
      offset: "50%"
    }
  );

  $(".js--wp-2").waypoint(
    function(direction) {
      $(".js--wp-2").addClass("animated fadeInUp");
    },
    {
      offset: "50%"
    }
  );

  /* Mobile nav */

  $(".js--nav-icon").click(function() {
    let nav = $(".js--main-nav");
    let icon = $(".js--nav-icon i");

    nav.slideToggle(200);
    if (icon.hasClass("ion-ios-menu")) {
      icon.addClass("ion-ios-close");
      icon.removeClass("ion-ios-menu");
    } else {
      icon.addClass("ion-ios-menu");
      icon.removeClass("ion-ios-close");
    }
  });
});

/* pop-up img index.html */

let openModalImages = document.querySelectorAll("[data-modal-target]");
let closeModalImages = document.querySelectorAll("[data-close-button]");
let overlay = document.getElementById("overlay");

openModalImages.forEach(img => {
  img.addEventListener("click", () => {
    let modal = document.querySelector(img.dataset.modalTarget);
    openModal(modal);
  });
});

closeModalImages.forEach(img => {
  img.addEventListener("click", () => {
    let modal = img.closest(".modal");
    closeModal(modal);
  });
});

overlay.addEventListener("click", () => {
  let modals = document.querySelectorAll(".modal.active");
  modals.forEach(modal => {
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

/* Message when sending form */

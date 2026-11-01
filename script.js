$(document).ready(function () {
  console.log("jQuery is ready!");

  // Task 1: tag, ID and class selectors, text(), and css()
  $("h1").css("letter-spacing", "-0.7px"); // tag selector
  $("#main-heading").text("Welcome to My Portfolio"); // ID selector
  $(".intro").css("line-height", "1.7"); // class selector

  $("#change-greeting").on("click", function () {
    $("#main-heading").text("Hello! Thanks for visiting my portfolio.");
    $("#main-heading").css("color", "var(--accent)");
  });

  $("#light-theme").on("click", function () {
    $("body").removeClass("dark");
  });
  $("#dark-theme").on("click", function () {
    $("body").addClass("dark");
  });

  // Task 2: hide(), show(), and toggle()
  $("#hide-status").on("click", function () {
    $("#status-box").hide();
  });
  $("#show-status").on("click", function () {
    $("#status-box").show();
  });
  $("#toggle-status").on("click", function () {
    $("#status-box").toggle();
  });

  // Task 3: fadeIn(), fadeOut(), and fadeToggle()
  $("#fade-in").on("click", function () {
    $(".gallery-item").fadeIn(500);
  });
  $("#fade-out").on("click", function () {
    $(".gallery-item").fadeOut(500);
  });
  $("#fade-toggle").on("click", function () {
    $(".gallery-item").fadeToggle(500);
  });

  // Task 4: slideUp(), slideDown(), and slideToggle()
  $(".slide-heading").on("click", function () {
    var panel = $(this).next(".slide-panel");
    if (panel.is(":visible")) {
      panel.slideUp(250);
    } else {
      panel.slideDown(250);
    }
  });

  // Task 5: append(), prepend(), and remove()
  function getNewSkill() {
    return $("#new-skill").val().trim();
  }
  $("#add-skill").on("click", function () {
    var skill = getNewSkill();
    if (skill !== "") {
      $("#skill-list").append($("<li>").text(skill));
      $("#new-skill").val("");
    }
  });
  $("#prepend-skill").on("click", function () {
    var skill = getNewSkill();
    if (skill !== "") {
      $("#skill-list").prepend($("<li>").text(skill));
      $("#new-skill").val("");
    }
  });
  $("#remove-skill").on("click", function () {
    $("#skill-list li").last().remove();
  });
  $("#new-skill").on("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      $("#add-skill").click();
    }
  });

  // Task 6: attr()
  var githubUrl = "https://github.com/";
  var linkedinUrl = "https://www.linkedin.com/";
  $("#change-link").on("click", function () {
    var currentUrl = $("#social-link").attr("href");
    if (currentUrl === githubUrl) {
      $("#social-link").attr("href", linkedinUrl).text("LinkedIn");
    } else {
      $("#social-link").attr("href", githubUrl).text("GitHub");
    }
  });

  // Task 7: val() and text() for live form preview
  $("#visitor-name").on("input", function () {
    $("#name-preview").text($(this).val() || "—");
  });
  $("#visitor-email").on("input", function () {
    $("#email-preview").text($(this).val() || "—");
  });

  // Task 8: animate() skill bars from 0 to their target widths and back
  var skillsAnimated = false;
  $("#animate-skills").on("click", function () {
    $(".bar-fill").stop(true);
    if (!skillsAnimated) {
      $(".bar-fill").each(function () {
        $(this).animate({ width: $(this).data("width") }, 900);
      });
      skillsAnimated = true;
    } else {
      $(".bar-fill").animate({ width: "0%" }, 700);
      skillsAnimated = false;
    }
  });
});

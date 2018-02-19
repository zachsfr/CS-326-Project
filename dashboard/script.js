for (var i = 0; i < 3; i++) {
    var card = document.querySelector(".my-note-card");
    var copy = card.cloneNode(true);
    var myNotes = document.querySelector("#my-notes");
    myNotes.appendChild(copy);
}

for (var i = 0; i < 3; i++) {
    var card = document.querySelector(".recent-note-card");
    var copy = card.cloneNode(true);
    var recentNotes = document.querySelector("#recent-notes");
    recentNotes.appendChild(copy);
}

for (var i = 0; i < 3; i++) {
    var card = document.querySelector(".favorite-note-card");
    var copy = card.cloneNode(true);
    var favNotes = document.querySelector("#favorite-notes");
    favNotes.appendChild(copy);
}

$(function () {
    $('[data-toggle="popover"]').popover({
        html : true,
        content: function() {
          var content = $(this).attr("data-popover-content");
          return $(content).html();
        }
    })
  })
$('.popover-dismiss').popover({
    trigger: 'focus'
  })
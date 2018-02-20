for (var i = 0; i < 3; i++) {
    var card = document.querySelector(".recently-uploded-notes-card");
    var copy = card.cloneNode(true);
    var myNotes = document.querySelector("#Recently-Uploaded-Notes");
    myNotes.appendChild(copy);
}

for (var i = 0; i < 3; i++) {
    var card = document.querySelector(".All-Uploaded-Notes-card");
    var copy = card.cloneNode(true);
    var recentNotes = document.querySelector("#All-Uploaded-Notes");
    recentNotes.appendChild(copy);
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
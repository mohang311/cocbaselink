
$(document).ready(function() {
  var pageLoaded = [];
  for (var i = 1; i <= 12; i++) {
    pageLoaded[i] = false;
    $('#m' + i).click(function() {
      var pageNum = parseInt(this.id.substring(1));
      if (!pageLoaded[pageNum]) {
        $('#content').load('page' + pageNum + '.html');
        for (var j = 1; j <= 12; j++) {
          if (j != pageNum) {
            pageLoaded[j] = false;
            $('#m' + j).removeClass('active');
          }
        }
        pageLoaded[pageNum] = true;
      }
      $(this).addClass('active');
    });
  }
  // Add the 'active' class to the 12th element
  $('#m1').addClass('active');
  // Load the content for the 12th element
  $('#content').load('page1.html');
  // Set the 'pageLoaded' flag for the 12th element to true
  pageLoaded[12] = true;
});

//= require_tree .

var SideComments = require('side-comments');

sideComments = new SideComments('.article--full', {}, []);

// Listen to "commentPosted", and send a request to your backend to save the comment.
// More about this event in the "docs" section.
sideComments.on('commentPosted', function( comment ) {
    $.ajax({
        url: '/comments',
        type: 'POST',
        data: comment,
        success: function( savedComment ) {
            // Once the comment is saved, you can insert the comment into the comment stream with "insertComment(comment)".
            sideComments.insertComment(comment);
        }
    });
});
 
// Listen to "commentDeleted" and send a request to your backend to delete the comment.
// More about this event in the "docs" section.
sideComments.on('commentDeleted', function( commentId ) {
    $.ajax({
        url: '/comments/' + commentId,
        type: 'DELETE',
        success: function( success ) {
            // Do something.
        }
    });
});
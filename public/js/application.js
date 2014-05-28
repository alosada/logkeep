$(document).ready(function() {
  bindEvents();
});


function bindEvents() {
  $('form').on('click', '#new_user', newUserForm)
  $('form').on('click', '#create_user', createUser)
}


function newUserForm(e) {
  e.preventDefault()
  var nuform = $.trim($('#new_user_form').html());
  $('#login_form').text('')
  $('#login_form').append(nuform)
}

function createUser(e) {
  e.preventDefault()
  //debugger
  var ajaxRequest = $.ajax({
    url: '/users/create',
    type: 'POST',
    data: $('form').serialize()
  })
}

function signinCallback(authResult) {
  if (authResult['status']['signed_in']) {
    // Update the app to reflect a signed in user
    debugger
    var ajaxRequest = $.ajax({
    url: '/google_login',
    type: 'POST',
    data: {token: authResult.access_token}
  })
  ajaxRequest.done(console.log('working'))
    // Hide the sign-in button now that the user is authorized, for example:
    document.getElementById('signinButton').setAttribute('style', 'display: none');
  } else {
    // Update the app to reflect a signed out user
    // Possible error values:
    //   "user_signed_out" - User is signed-out
    //   "access_denied" - User denied access to your app
    //   "immediate_failed" - Could not automatically log in the user
    console.log('Sign-in state: ' + authResult['error']);
  }
}

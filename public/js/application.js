$(document).ready(function() {
  bindEvents();
});


function bindEvents() {
  $('form').on('click', '#new_user', newUser)
  $('div.header-div').on('click', component("new-log"), dispForm)
  $(component("new-log-form-container")).on('click','#clog', createLog)
  $(component("log-list")).on('click',component("view-log"), viewLog)
  $('body').on('click', 'a.close', closePopUp)
  $('div.eve-header-div').on('click',component("new-eve"), dispEveForm)
}


function newUser(e) {
  e.preventDefault()
  var newUserForm = $.trim($('#new_user_form').html());
  $('#login_form').text('')
  $('#login_form').append(newUserForm)
}

function dispForm(e) {
  e.preventDefault()
  var postTemplate = $.trim($(component('hidden-form')).html());
  $(component('new-log-form-container')).append($(postTemplate));
  removeNewPostButton()
}

function dispEveForm(e) {
  e.preventDefault()
  var eveTemplate = $.trim($(component('eve-form')).html());
  $(component('new-eve-form-container')).append($(eveTemplate));
  //removeNewEveButton()
}

function component(comp){
  return "[data-component='"+comp+"']"
}

function createLog(e){
  e.preventDefault()
  var formStuff = $(component('new-log-form-container')).find('form')
  var ajaxReq = $.ajax({
    url: 'posts/create',
    type: 'POST',
    data: $(component('new-log-form-container')).find('form').serialize()
  })
  ajaxReq.done(newLogTasks)
}

function newLogTasks(iGot){
  prependLog(iGot)
  regenNewPostButton()
  clearNewPostForm()
}

function removeNewPostButton(){
  $(component('new-log')).remove()
}

function regenNewPostButton(){
$('div.header-div').append("<button data-component='new-log' class='button in-line float-r'>New Post</button>")
}

function clearNewPostForm(){
  $(component('new-log-form-container'))[0].innerHTML=''
}

function prependLog(log){
  $(component('log-list')).prepend(log)
}

function popUp(popup){
  $('body').prepend(popup)
}

function closePopUp(e){
  e.preventDefault
  $('#pop-up').remove()
}

function viewLog(e){
  e.preventDefault()
  var id = {id: this.name}
  var ajaxReq = $.ajax({
    url: 'logs/view',
    type: 'POST',
    data: id
  })
  ajaxReq.done(popUp)
}


////test
function test(e){
  e.preventDefault()
  debugger
}

// e.delegateTarget.getAttribute("data-component")


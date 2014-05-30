$(document).ready(function() {
  bindEvents();
});


function bindEvents() {
  $('form').on('click', '#new_user', newUser)
  $('div.header-div').on('click', component("new-log"), dispForm)
  $(component("new-log-form-container")).on('click','#clog', createLog)
  $(component("log-list")).on('click',component("view-log"), viewLog)
  $('body').on('click', 'a.close', closePopUp)
  $('body').on('click',component("new-eve"), dispEveForm)
  $('body').on('click','#ceve', createEve)
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
  removeNewEveButton()
}

function component(comp){
  return "[data-component='"+comp+"']"
}

function createLog(e){
  e.preventDefault()
  var ajaxReq = $.ajax({
    url: 'logs/create',
    type: 'POST',
    data: $(component('new-log-form-container')).find('form').serialize()
  })
  ajaxReq.done(newLogTasks)
}

function createEve(e){
  e.preventDefault
  var ajaxReq = $.ajax({
    url: 'events/create',
    type: 'POST',
    data: $(component('new-eve-form-container')).find('form').serialize()
  })
  //ajaxReq.done(newLogTasks)
}



function newLogTasks(iGot){
  prependLog(iGot)
  regenNewPostButton()
  clearNewPostForm()
}

function removeNewPostButton(){
  $(component('new-log')).remove()
}

function removeNewEveButton(){
  $(component('new-eve')).remove()
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

function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(37.784, -122.397),
    zoom: 8
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"),
      mapOptions);
}


function getLocation()
  {
  if (navigator.geolocation)
    {
    navigator.geolocation.getCurrentPosition(test);
    }
  //else{somevar.innerHTML="Geolocation is not supported by this browser.";}
  }
function showPosition(position)
  {
  x.innerHTML="Latitude: " + position.coords.latitude +
  "<br>

// e.delegateTarget.getAttribute("data-component")


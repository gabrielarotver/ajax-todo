// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
function ready() {
  $('#new_task').on('ajax:complete', newTask);

  function newTask(event, data) {
    console.log(arguments);
    console.log(data);
    $('#tasks').append(data);
    $('#task_name').val('');
  }
}

$(document).on("ready", ready);
$(document).on("ready turbolinks:load", ready);

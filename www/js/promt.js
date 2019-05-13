function pwd() {

  var pass = prompt("Please enter password!");
  if (pass == "admin") {
    alert("LOGIN SUCCESS!");
    $('.edit').hide();
  $('.block').addClass('editable');
  $('.misvis').attr('contenteditable', 'true');
  $('.prelim').attr('contenteditable', 'true');
  $('.univ').attr('contenteditable', 'true');
  $('.acad').attr('contenteditable', 'true');   
  $('.save').show();
  } 
  else {
    alert("WRONG PASSWORD!");
  $('.save').hide();
  $('.block').removeClass('editable');
  $('.misvis').removeAttr('contenteditable');
  $('.prelim').removeAttr('contenteditable');
  $('.univ').removeAttr('contenteditable');
  $('.acad').removeAttr('contenteditable');
  $('.edit').show();
  }

  
  $('.save').click(function(){
  $(this).hide();
  $('.block').removeClass('editable');
  $('.misvis').removeAttr('contenteditable');
  $('.prelim').removeAttr('contenteditable');
  $('.univ').removeAttr('contenteditable');
  $('.acad').removeAttr('contenteditable');
  $('.edit').show();
});
 
}
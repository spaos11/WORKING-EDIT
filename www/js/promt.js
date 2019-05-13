function pwd() {

  var pass = prompt("Please enter password!");
  if (pass == "admin") {
    alert("LOGIN SUCCESS!");
    $('.edit').hide();
  $('.block').addClass('editable');
  $('.misvis, .prelim, .univ, .acad, .art1, .art2, .art3, .art4, .art5, .art6, .art7, .art8, .art9, .art10, .art11, .art12, .art13, .art14, .art15, .appa, .appb, .appc, .appd, .appe, .appf, .appg, .apph, .appi, .appj, .appk, .appl, .appm').attr('contenteditable', 'true');
  $('.save').show();
  } 
  else {
    alert("WRONG PASSWORD!");
  $('.save').hide();
  $('.block').removeClass('editable');
  $('.misvis, .prelim, .univ, .acad, .art1, .art2, .art3, .art4, .art5, .art6, .art7, .art8, .art9, .art10, .art11, .art12, .art13, .art14, .art15, .appa, .appb, .appc, .appd, .appe, .appf, .appg, .apph, .appi, .appj, .appk, .appl, .appm').removeAttr('contenteditable');
  $('.edit').show();
  }

  
  $('.save').click(function(){
  $(this).hide();
  $('.block').removeClass('editable');
  $('.misvis, .prelim, .univ, .acad, art1, .art2, .art3, .art4, .art5, .art6, .art7, .art8, .art9, .art10, .art11, .art12, .art13, .art14, .art15, .appa, .appb, .appc, .appd, .appe, .appf, .appg, .apph, .appi, .appj, .appk, .appl, .appm').removeAttr('contenteditable');
  $('.edit').show();
});
 
}
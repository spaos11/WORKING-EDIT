function pwd() {

  var pass = prompt("Please enter password!");
  if (pass == "admin") {
    alert("LOGIN SUCCESS!");
    $('.edit, .editm').hide();
  $('.block').addClass('editable');
  $('.misvis, .misvist, .prelim, .univ, .acad, .art1, .art2, .art3, .art4, .art5, .art6, .art7, .art8, .art9, .art10, .art11, .art12, .art13, .art14, .art15, .appa, .appb, .appc, .appd, .appe, .appf, .appg, .apph, .appi, .appj, .appk, .appl, .appm, .art1t, .art2t, .art3t, .art4t, .art5t, .art6t, .art7t, .art8t, .art9t, .art10t, .art11t, .art12t, .art13t, .art14t, .art15t, .appat, .appbt, .appct, .appdt, .appet, .appft, .appgt, .appht, .appit, .appjt, .appkt, .applt, .appmt').attr('contenteditable', 'true');
  $('.save, .savem').show();
  } 
  else {
    alert("WRONG PASSWORD!");
  $('.save, .savem').hide();
  $('.block').removeClass('editable');
  $('.misvis, .misvist, .prelim, .univ, .acad, .art1, .art2, .art3, .art4, .art5, .art6, .art7, .art8, .art9, .art10, .art11, .art12, .art13, .art14, .art15, .appa, .appb, .appc, .appd, .appe, .appf, .appg, .apph, .appi, .appj, .appk, .appl, .appm, .art1t, .art2t, .art3t, .art4t, .art5t, .art6t, .art7t, .art8t, .art9t, .art10t, .art11t, .art12t, .art13t, .art14t, .art15t, .appat, .appbt, .appct, .appdt, .appet, .appft, .appgt, .appht, .appit, .appjt, .appkt, .applt, .appmt').removeAttr('contenteditable');
  $('.edit, .editm').show();
  }

  
  $('.save, .savem').click(function(){
  $(this).hide();
  $('.block').removeClass('editable');
  $('.misvis, .misvist, .prelim, .univ, .acad, art1, .art2, .art3, .art4, .art5, .art6, .art7, .art8, .art9, .art10, .art11, .art12, .art13, .art14, .art15, .appa, .appb, .appc, .appd, .appe, .appf, .appg, .apph, .appi, .appj, .appk, .appl, .appm, .art1t, .art2t, .art3t, .art4t, .art5t, .art6t, .art7t, .art8t, .art9t, .art10t, .art11t, .art12t, .art13t, .art14t, .art15t, .appat, .appbt, .appct, .appdt, .appet, .appft, .appgt, .appht, .appit, .appjt, .appkt, .applt, .appmt').removeAttr('contenteditable');
  $('.edit, .editm').show();
});
 
}
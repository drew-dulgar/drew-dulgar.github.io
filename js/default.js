$(document).ready(function()
{
  $('.contact-section').on('mouseenter', '.contact-item', function() 
  {
    $('.icon .fa', $(this)).addClass('contact-item-icon-hover');
  });
  
  $('.contact-section').on('mouseleave', '.contact-item', function() 
  {
    $('.icon .fa', $(this)).addClass('contact-item-icon-hover');
  });
  
});

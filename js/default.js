$(document).ready(function()
{
  $('.contact-section').on('mouseenter', '.contact-item', function() 
  {
    $('.icon .fa', $(this)).switchClass('contact-item-icon-nohover', 'contact-item-icon-hover');
  });
  
  $('.contact-section').on('mouseleave', '.contact-item', function() 
  {
    $('.icon .fa', $(this)).switchClass('contact-item-icon-hover', 'contact-item-icon-nohover');
  });
  
});

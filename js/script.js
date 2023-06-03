$(document).ready(function() {
    // Ocultar secciones al cargar la página
    $('#hobbies-content').hide();
    $('#trabajos-content').hide();
    
    // Mostrar sección de "Presentación" al hacer clic en el enlace correspondiente
    $('#presentacion').click(function() {
      $('#hobbies-content').hide();
      $('#trabajos-content').hide();
      $('#presentacion-content').show();
    });
    
    // Mostrar sección de "Hobbies" al hacer clic en el enlace correspondiente
    $('#hobbies').click(function() {
      $('#presentacion-content').hide();
      $('#trabajos-content').hide();
      $('#hobbies-content').show();
    });
    
    // Mostrar sección de "Trabajos" al hacer clic en el enlace correspondiente
    $('#trabajos').click(function() {
      $('#presentacion-content').hide();
      $('#hobbies-content').hide();
      $('#trabajos-content').show();
    });
  });
  
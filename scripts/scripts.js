$(document).ready(function() {
  
	//events on scrolling
  var checkScroll = function(){
    if ($(window).scrollTop() > $('header').outerHeight() ){
      $('header').addClass('post-hero');
    }else{
      $('header').removeClass('post-hero');
    }
  };
  checkScroll();
  $(window).scroll(function(){
    checkScroll();
  }); 

  // Portfolio modal

  // data
  var portfolioData = {
  	"sucesiones":" <ul> <li>• Sucesiones</li> <li>• Divorcios</li> <li>• Compensación económica</li> <li>• Convenios matrimoniales</li> <li>• Pactos de convivencia en la Unión convivencial</li> <li>• Responsabilidad parental</li> <li>• Cuidado personal de los hijos</li> <li>• Régimen de comunicación</li> <li>• Alimentos</li> </ul> </div>",
  	"tributario":"<ul> <li>• Asistencia jurídica en etapa de inspecciones en materia de impuestos, tasas, contribuciones y clausuras</li> <li>• Defensa de los contribuyentes y responsables en los procesos de determinación de oficio y sancionatorios ante los fiscos provinciales, municipales y nacional</li> <li>• Procedimiento ante el Tribunal Fiscal de la Nación y Tribunal Fiscal de Apelaciones de la Provincia de Buenos Aires</li> <li>• Defensa en el marco de las ejecuciones fiscales y juicios de apremio</li> <li>• Defensa en sumarios por multa, clausura y decomiso</li> <li>• Defensa en el marco de la exclusión de registros, monotributo y cancelación de la CUIT</li> <li>• Acciones declarativas de certeza e inconstitucionalidad</li> <li>• Medidas cautelares</li> <li>• Acción de amparo</li> <li>• Repetición de tributos abonados indebidamente o en exceso</li> <li>• Solicitud de devolución de saldos a favor</li> <li>• Amparo por mora</li> <li>• Consultas vinculantes ante los organismos fiscales</li> </ul> </div>",
  	"laboral":" <ul> <li>• Despidos</li> <li>• Acuerdos de desvinculación</li> <li>• Empleo no registrado</li> <li>• Empleo público</li> <li>• Diferencias salariales<li> <li>• Liquidaciones e indemnizaciones laborales</li> <li>• Licencias laborales</li> <li>• Horas extras</li> <li>• Sanciones laborales</li> <li>• Accidentes de trabajo</li> <li>• Intercambio telegráfico</li> <li>• Audiencias ante el SECLO o Ministerio de Trabajo</li> </ul></div>",
  	"civil":" <ul> <li>• Daños y perjuicios</li> <li>• Accidentes de tránsito</li> <li>• Desalojos</li> <li>• Redacción y revisión de contratos civiles y comerciales</li> <li>• Juicios por cobro de alquileres, expensas, honorarios profesionales y sumas de dinero<li> <li>• Juicios ejecutivos (pagaré, cheque e hipoteca)</li> <li>• Concurrencia a mediaciones</li> </ul></div>",
  	"propiedad":" <ul> <li>• Inscripciones de marcas, patentes, modelos y diseños ante el INPI</li> <li>• Inscripciones de obras, contratos, publicaciones, páginas web y software ante la DNDA</li>  </ul></div>",
  	"previsional":" <ul> <li>• Jubilaciones y Pensiones</li> <li>• Reajuste de haberes</li>  </ul></div>",
  };

  // Get the modal
	var modal = $("#portfolio-modal");

	// When the user clicks on the button, open the modal
	$(".portfolio-items .first").on('click', function(){
		var title = $(this).find('h3').html();
		var itemValue = $(this).data('value');
		var text = portfolioData[itemValue];
		
		modal.find('.title').html(title);
		modal.find('.text').html(text);
		modal.css('display','block');
	});

	// When the user clicks on <span> (x), close the modal
	$("#portfolio-modal .close").on('click', function(){
		modal.css('display','none');
	});

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	  if ($(event.target).attr('id') == "portfolio-modal") {
	    modal.css('display','none');
	  }
	};

	//menu-mobile
  var closeMobileMenu = function(){
    $('.menu-mobile').removeClass('open');
    $('.overlay.full').addClass('hide');
  };
  $(document).click(function(event){
    if($(event.target).closest('.menu-mobile').length === 0 && $(event.target).closest('.menu-mobile-toggle').length === 0 ) {
      closeMobileMenu();
    }
  });
  $('.menu-mobile-toggle').click(function() {
    if ($('.menu-mobile').hasClass('open')) {
      closeMobileMenu();
    }else{
      $('.menu-mobile').addClass('open');
      $('.overlay.full').removeClass('hide');
    }
  });
  $('.menu-mobile .close').click(function() {
    $('.menu-mobile').removeClass('open');
    $('.overlay.full').addClass('hide');
  });
  $('.menu-mobile a').click(function() {
    closeMobileMenu();
  });

  //nav links scroll
  $('header a:not(.social-media-link)').click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top-$('header').height()
    });
  });

  //IOS Mobile
  if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
    $('.bg-attachment-fixed').css('background-attachment','initial');
  }

});




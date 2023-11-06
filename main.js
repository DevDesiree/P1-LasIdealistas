 /*Función de js para cuando haga scroll, se quede fijado la seccion en el navbar*/
 window.addEventListener('scroll', function () {
    const sectionIds = ['home', 'equipo', 'techtools', 'contacto'];
    const menuLinks = document.querySelectorAll('nav ul li a');

    sectionIds.forEach((sectionId, index) => {
      const section = document.getElementById(sectionId);

      if (section) {
        const top = section.offsetTop;
        const height = section.clientHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
          menuLinks[index].classList.add('active');
          menuLinks[index].textContent = sectionId.toUpperCase() + '_';

        } else {
          menuLinks[index].classList.remove('active');
          menuLinks[index].textContent = sectionId.toUpperCase();

        }
      }
    });
  });

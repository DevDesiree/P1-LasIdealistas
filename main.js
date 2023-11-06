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

                if (menuLinks[index] === menuLinks[2]) {
                    menuLinks[index].classList.add('active');
                    menuLinks[index].textContent = "TECH & TOOLS" + '_';
                } else {
                    menuLinks[index].classList.add('active');
                    menuLinks[index].textContent = sectionId.toUpperCase() + '_';
                    
                }

                
            } else {
                menuLinks[index].classList.remove('active');
                menuLinks[index].textContent = sectionId.toUpperCase();

            }
            
        }
    });
});

// Obtén los elementos de los emotes para cada tarjeta
const happyEmotes = document.querySelectorAll('.emoji-container[id^="happy-emote"]');
const sadEmotes = document.querySelectorAll('.emoji-container[id^="sad-emote"]');

// Agrega un manejador de eventos a cada emote
happyEmotes.forEach((happyEmote, index) => {
  happyEmote.addEventListener('click', function () {
    if (happyEmotes[index].classList.contains('selected')) {
        // Si el emote feliz ya está seleccionado, quítale la clase 'selected' y muestra el emote triste
        happyEmotes[index].classList.remove('selected');
        sadEmotes[index].style.display = "block";
      } else {
        // Si el emote feliz no está seleccionado, agrégale la clase 'selected' y oculta el emote triste
        happyEmotes[index].classList.add('selected');
        sadEmotes[index].style.display = "none";
      }
  });
});

sadEmotes.forEach((sadEmote, index) => {
  sadEmote.addEventListener('click', function () {
    if (sadEmotes[index].classList.contains('selected')) {
        // Si el emote triste ya está seleccionado, quítale la clase 'selected' y muestra el emote feliz
        sadEmotes[index].classList.remove('selected');
        happyEmotes[index].style.display = "block";
      } else {
        // Si el emote triste no está seleccionado, agrégale la clase 'selected' y oculta el emote feliz
        sadEmotes[index].classList.add('selected');
        happyEmotes[index].style.display = "none";
      }
  });
});

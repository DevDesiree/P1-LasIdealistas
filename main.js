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

// Funcion que busca la clase emoji-container con id especifico
// Itera por cada uno y añade el evento click
// Cuando se hace click y depende la condicion se hace una cosa o otra
// Se añade una clase selected y el display de la otra none
const happyEmotes = document.querySelectorAll('.emoji-container[id^="happy-emote"]');
const sadEmotes = document.querySelectorAll('.emoji-container[id^="sad-emote"]');

happyEmotes.forEach((happyEmote, index) => {
  happyEmote.addEventListener('click', function () {
    if (happyEmotes[index].classList.contains('selected')) {
    
        happyEmotes[index].classList.remove('selected');
        sadEmotes[index].style.display = "block";
      } else {
       
        happyEmotes[index].classList.add('selected');
        sadEmotes[index].style.display = "none";
      }
  });
});

sadEmotes.forEach((sadEmote, index) => {
  sadEmote.addEventListener('click', function () {
    if (sadEmotes[index].classList.contains('selected')) {
       
        sadEmotes[index].classList.remove('selected');
        happyEmotes[index].style.display = "block";
      } else {
      
        sadEmotes[index].classList.add('selected');
        happyEmotes[index].style.display = "none";
      }
  });
});

const menu = document.querySelector('.menu__body')
const menuBtn = document.querySelector('.menu__icon')

const body = document.body;

if (menu && menuBtn) {
	menuBtn.addEventListener('click', e => {
		menu.classList.toggle('active')
		menuBtn.classList.toggle('active')
		body.classList.toggle('lock')
	})

	menu.addEventListener('click', e => {
		if (e.target.classList.contains('menu__body')) {
			menu.classList.remove('active')
			menuBtn.classList.remove('active')
			body.classList.remove('lock')
		}
	})

	menu.querySelectorAll('.menu__link').forEach(link => {
		link.addEventListener('click', () => {
			menu.classList.remove('active')
			menuBtn.classList.remove('active')
			body.classList.remove('lock')
		})
	})
}

/*===========================================*/

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
	anchor.addEventListener('click', event => {
		event.preventDefault();

		const blockID = anchor.getAttribute('href').substring(1);

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
})


/*--/ Whrite Them /--*/

document.querySelector('.themetoggle').addEventListener('click', (event) => {
	event.preventDefault();
	if (localStorage.getItem('theme') === 'white') {
	  localStorage.removeItem('theme');
	}
	else {
	  localStorage.setItem('theme', 'white')
	}
	addDarkClassToHTML()
  });
  
  function addDarkClassToHTML() {
	try {
	  if (localStorage.getItem('theme') === 'white') {
		document.querySelector('html').classList.add('white');
		document.querySelector('.themetoggle span').textContent = '';
	  }
	  else {
		document.querySelector('html').classList.remove('white');
		document.querySelector('.themetoggle span').textContent = '';
	  }
	} catch (err) { }
  }
  
  addDarkClassToHTML();

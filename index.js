// Datos de cumpleaños (extraídos del Excel)
const birthdayData = [
    {name: "Daniel Santiago Silva Buitrago", birthday: "2005-02-22", leader: "Harlem Samir Molano"},
    { name: "Adriana Rocio Jaime Pedraza", birthday: "2005-04-10", leader: "Miguel Angel Tiuzo" },
    { name: "Michel Jasbleidy Correa Ardila", birthday: "2006-03-21", leader: "Ricardo Molina" },
    { name: "Ricardo Alfonso Molina Monroy", birthday: "1974-06-13", leader: "César Fabián Lancheros" },
    { name: "Andrés Leonardo Riaño Montañez", birthday: "2025-06-17", leader: "Ricardo Alfonso Molina Monroy" },
    { name: "Richard Efrain Marcano Vargas", birthday: "2003-04-15", leader: "Diana Carolina Ayala Pulido" },
    { name: "Miguel Angel Tiuzo Garcia", birthday: "1977-12-25", leader: "Cesar Fabian Lancheros Currea" },
    { name: "Julio César Ramos Guevara", birthday: "2025-01-08", leader: "César Ibarguen" },
    { name: "Julian Collazos Guerrero", birthday: "1974-03-07", leader: "Miguel Angel Tiuzo" },
    { name: "Gabriel Mauricio Pérez Álvarez", birthday: "2025-01-14", leader: "Luis Felipe Baquero" },
    { name: "Claudia Giraldo Giraldo", birthday: "1983-02-17", leader: "Miguel Angel Tiuzo" },
    { name: "Diana Patricia Uribe Cortes", birthday: "1987-02-11", leader: "Miguel Angel Tiuzo García" },
    { name: "Cristian Camilo Roa Correa", birthday: "1998-09-18", leader: "Ricardo molina" },
    { name: "Cindy Yuliana Castro Plazas", birthday: "1988-12-15", leader: "Miguel Angel Tiuzo" },
    { name: "Luis Alfredo Arteaga Ortiz", birthday: "2025-08-10", leader: "Miguel Angel Tiuzo" },
    { name: "Pedro Javier Molina Avila", birthday: "1995-09-16", leader: "Cesar Antonio Ibarguen" },
    { name: "Erica Alexandra Soto Mejia", birthday: "2025-07-22", leader: "Miguel Angel Tiuzo Garcia" },
    { name: "Nicolás Hernández", birthday: "2025-03-27", leader: "Julio Ramós" },
    { name: "Edwin Andrés Trujillo Moreno", birthday: "1984-12-14", leader: "Cesar ibarguen" },
    { name: "Germán Eduardo Vargas Zapata", birthday: "1967-02-21", leader: "Luis Baquero" },
    { name: "Wilmer Usbaldo Rojas Gutiérrez", birthday: "2025-02-10", leader: "Julio César Ramos Guevara" },
    { name: "Cindy Johanna Valencia Gómez", birthday: "1991-05-15", leader: "Sebastian Wisk" },
    { name: "Yohan Miguel Hoyos Acosta", birthday: "2025-04-08", leader: "Ricardo molina" },
    { name: "Jonathan Arístides Viracachá Martínez", birthday: "1991-10-06", leader: "Luis Felipe Baquero Lombana" },
    { name: "Jhon Jarrinson Cuellar Lozada", birthday: "2025-02-28", leader: "Julio Cesar Ramos Guevara" },
    { name: "Laura Yolanda Ramos Ardila", birthday: "2025-03-13", leader: "Diana Carolina Ayala Pulido" },
    { name: "Diana Carolina Ayala Pulido", birthday: "2024-12-16", leader: "Cesar Fabián Lancheros Currea" },
    { name: "Ingrith Marcela Ochoa Bernal", birthday: "2025-07-21", leader: "Diana Carolina Ayala" },
    { name: "Andrés Felipe Riveros Valero", birthday: "1991-09-11", leader: "Cesar Antonio Ibarguen Ibarguen" },
    { name: "Jenniffer Blanco Castillo", birthday: "1989-07-02", leader: "Sebastian Wisk" },
    { name: "Edwin Jordy Camargo Ramirez", birthday: "1993-08-21", leader: "Ricardo Alfonso Molina Monroy" },
    { name: "Nelson Alfonso Rodriguez Bautista", birthday: "1987-10-17", leader: "Luis Baquero" },
    { name: "Kevin Nicolas Torres Arias", birthday: "2025-06-18", leader: "Luis Felipe Baquero Lombana" },
    { name: "Wilder Stiven Camargo Segura", birthday: "1993-05-27", leader: "Luis Felipe Baquero Lombana" },
    { name: "Jonathan Estiven Aponte Villamil", birthday: "1999-11-25", leader: "César Antonio Ibargüen Ibargüen" },
    { name: "Willi Mariano Roa", birthday: "2025-08-30", leader: "Luis Felipe Baquero" },
    { name: "Carlos Andres Peña Arias", birthday: "1983-10-01", leader: "Luis Felipe Baquero" },
    { name: "Sergio Luis Silva Lopez", birthday: "2025-12-08", leader: "Diana Carolina Ayala" },
    { name: "Luis Felipe Baquero Lombana", birthday: "1994-04-05", leader: "César Ibarguen" },
    { name: "Leydi Paola Montaña Castillo", birthday: "1993-09-09", leader: "Luis Felipe Baquero Lombana" },
    { name: "Silver Yaguara Rodriguez", birthday: "2025-10-30", leader: "Diana Ayala" },
    { name: "Cesar Antonio Ibarguen", birthday: "1971-07-06", leader: "Cesar Fabian Lancheros" },
    { name: "Jhon Brayan García Rúa", birthday: "1997-06-07", leader: "Julio César Ramos Guevara y César Antonio Ibargüen Ibargüen" },
    { name: "Linio Jose Campo Ruiz", birthday: "1984-11-05", leader: "Sebastián Wisk" },
    { name: "Carlos Andres Pedraza Rubiano", birthday: "1987-08-22", leader: "Sebastian Wish" },
    { name: "Brayan Stiven Reyes Rueda", birthday: "2007-03-28", leader: "Diana Carolina Ayala Pulido" },
    { name: "Dilia Cecilia Medina", birthday: "2025-04-15", leader: "Diana Carolina Ayala" },
    { name: "Nicolás López Acosta", birthday: "2025-05-20", leader: "Diana Carolina Ayala" },
    { name: "Oscar Uriel Tobar", birthday: "2025-07-25", leader: "Diana Carolina Ayala" },
    { name: "Sebastián Wisk", birthday: "2025-11-02", leader: "Cesar Fabián Lancheros" },
    { name: "Cesar Fabian Lancheros", birthday: "2025-03-04", leader: "Miguel" },
    { name: "Alex Antonio Eljach", birthday: "2025-05-08", leader: "Sebastián Wisk" },
    { name: "Juan Felipe Gómez", birthday: "2025-01-05", leader: "Sebastián Wisk" },
    { name: "Krystian Jahel Tiusaba", birthday: "2025-02-17", leader: "Cesar Fabian" }
];

// Función para cargar imágenes con manejo de errores
function loadImageWithFallback(imgElement, imageUrl, fallbackUrl) {
    const tempImg = new Image();
    tempImg.onload = function() {
        imgElement.src = imageUrl;
    };
    tempImg.onerror = function() {
        imgElement.src = fallbackUrl;
    };
    tempImg.src = imageUrl;
}

// Procesar datos para extraer solo el año 2025
const processBirthdays = () => {
    return birthdayData.map(person => {
        const dateStr = person.birthday.split(' ')[0];
        const [year, month, day] = dateStr.split('-');
        const date = new Date(year, month - 1, day);
        date.setFullYear(2025);
        
        // Asignación manual de fotos para cada persona
        let photoName;
        switch(person.name) {
            case "Daniel Santiago Silva Buitrago": photoName = "danielito.jpg"; break;
            case "Adriana Rocio Jaime Pedraza": photoName = "adriana.jpg"; break;
            case "Michel Jasbleidy Correa Ardila": photoName = "michel.jpg"; break;
            case "Ricardo Alfonso Molina Monroy": photoName = "ricardo.jpg"; break;
            case "Andrés Leonardo Riaño Montañez": photoName = "andres.jpg"; break;
            case "Richard Efrain Marcano Vargas": photoName = "richard.jpg"; break;
            case "Miguel Angel Tiuzo Garcia": photoName = "miguel.jpg"; break;
            case "Julio César Ramos Guevara": photoName = "julio.jpg"; break;
            case "Julian Collazos Guerrero": photoName = "julian.jpg"; break;
            case "Gabriel Mauricio Pérez Álvarez": photoName = "gabriel.jpg"; break;
            case "Claudia Giraldo Giraldo": photoName = "claudia.jpg"; break;
            case "Diana Patricia Uribe Cortes": photoName = "diana.jpg"; break;
            case "Cristian Camilo Roa Correa": photoName = "cristian.jpg"; break;
            case "Cindy Yuliana Castro Plazas": photoName = "cindy.jpg"; break;
            case "Luis Alfredo Arteaga Ortiz": photoName = "luis.jpg"; break;
            case "Pedro Javier Molina Avila": photoName = "pedro.jpg"; break;
            case "Erica Alexandra Soto Mejia": photoName = "erica.jpg"; break;
            case "Nicolás Hernández": photoName = "nicolas.jpg"; break;
            case "Edwin Andrés Trujillo Moreno": photoName = "edwin.jpg"; break;
            case "Germán Eduardo Vargas Zapata": photoName = "german.jpg"; break;
            case "Wilmer Usbaldo Rojas Gutiérrez": photoName = "wilmer.jpg"; break;
            case "Cindy Johanna Valencia Gómez": photoName = "cindy_j.jpg"; break;
            case "Yohan Miguel Hoyos Acosta": photoName = "yohan.jpg"; break;
            case "Jonathan Arístides Viracachá Martínez": photoName = "jonathan.jpg"; break;
            case "Jhon Jarrinson Cuellar Lozada": photoName = "jhon.jpg"; break;
            case "Laura Yolanda Ramos Ardila": photoName = "laura.jpg"; break;
            case "Diana Carolina Ayala Pulido": photoName = "diana_c.jpg"; break;
            case "Ingrith Marcela Ochoa Bernal": photoName = "ingrith.jpg"; break;
            case "Andrés Felipe Riveros Valero": photoName = "andres_f.jpg"; break;
            case "Jenniffer Blanco Castillo": photoName = "jenniffer.jpg"; break;
            case "Edwin Jordy Camargo Ramirez": photoName = "edwin_j.jpg"; break;
            case "Nelson Alfonso Rodriguez Bautista": photoName = "nelson.jpg"; break;
            case "Kevin Nicolas Torres Arias": photoName = "kevin.jpg"; break;
            case "Wilder Stiven Camargo Segura": photoName = "wilder.jpg"; break;
            case "Jonathan Estiven Aponte Villamil": photoName = "jonathan_e.jpg"; break;
            case "Willi Mariano Roa": photoName = "willi.jpg"; break;
            case "Carlos Andres Peña Arias": photoName = "carlos.jpg"; break;
            case "Sergio Luis Silva Lopez": photoName = "sergio.jpg"; break;
            case "Luis Felipe Baquero Lombana": photoName = "luis_f.jpg"; break;
            case "Leydi Paola Montaña Castillo": photoName = "leydi.jpg"; break;
            case "Silver Yaguara Rodriguez": photoName = "silver.jpg"; break;
            case "Cesar Antonio Ibarguen": photoName = "cesar.jpg"; break;
            case "Jhon Brayan García Rúa": photoName = "brayan.jpg"; break;
            case "Linio Jose Campo Ruiz": photoName = "linio.jpg"; break;
            case "Carlos Andres Pedraza Rubiano": photoName = "carlos_p.jpg"; break;
            case "Brayan Stiven Reyes Rueda": photoName = "brayan_s.jpg"; break;
            case "Dilia Cecilia Medina": photoName = "dilia.jpg"; break;
            case "Nicolás López Acosta": photoName = "nicolas_l.jpg"; break;
            case "Oscar Uriel Tobar": photoName = "oscar.jpg"; break;
            case "Sebastián Wisk": photoName = "sebastian.jpg"; break;
            case "Cesar Fabian Lancheros": photoName = "cesar_f.jpg"; break;
            case "Alex Antonio Eljach": photoName = "alex.jpg"; break;
            case "Juan Felipe Gómez": photoName = "juan.jpg"; break;
            case "Krystian Jahel Tiusaba": photoName = "krystian.jpg"; break;
            default: photoName = "default.jpg";
        }
        
        return {
            ...person,
            date: date,
            month: date.getMonth() + 1,
            day: date.getDate(),
            formattedDate: formatDate(date),
            photo: `fotos/${photoName}`
        };
    });
};

const birthdays = processBirthdays();

// Formatear fecha
function formatDate(date) {
    const options = { day: 'numeric', month: 'long' };
    return date.toLocaleDateString('es-ES', options);
}

// Mostrar calendario
function renderCalendar(filterMonths = null) {
    const calendarView = document.getElementById('calendar-view');
    calendarView.innerHTML = '';

    // Agrupar cumpleaños por mes
    const birthdaysByMonth = {};
    birthdays.forEach(person => {
        if (!filterMonths || filterMonths.includes(person.month)) {
            if (!birthdaysByMonth[person.month]) {
                birthdaysByMonth[person.month] = [];
            }
            birthdaysByMonth[person.month].push(person);
        }
    });

    // Ordenar los meses
    const sortedMonths = Object.keys(birthdaysByMonth).sort((a, b) => a - b);

    // Generar calendario para cada mes
    sortedMonths.forEach(month => {
        const monthBirthdays = birthdaysByMonth[month];
        const monthName = new Date(2025, month - 1, 1).toLocaleDateString('es-ES', { month: 'long' });
        
        const monthContainer = document.createElement('div');
        monthContainer.innerHTML = `
            <h2 class="month-title">${monthName.charAt(0).toUpperCase() + monthName.slice(1)}</h2>
            <div class="calendar-header">
                <div>Lun</div>
                <div>Mar</div>
                <div>Mié</div>
                <div>Jue</div>
                <div>Vie</div>
                <div>Sáb</div>
                <div>Dom</div>
            </div>
            <div class="calendar" id="calendar-${month}"></div>
        `;
        
        calendarView.appendChild(monthContainer);
        
        const monthCalendar = document.getElementById(`calendar-${month}`);
        const firstDay = new Date(2025, month - 1, 1).getDay();
        const daysInMonth = new Date(2025, month, 0).getDate();
        
        // Ajustar para que la semana comience en lunes
        let startingDay = firstDay === 0 ? 6 : firstDay - 1;
        
        // Días vacíos al inicio
        for (let i = 0; i < startingDay; i++) {
            const emptyDay = document.createElement('div');
            emptyDay.className = 'day-cell empty-day';
            monthCalendar.appendChild(emptyDay);
        }
        
        // Días del mes
        for (let day = 1; day <= daysInMonth; day++) {
            const dayCell = document.createElement('div');
            dayCell.className = 'day-cell';
            dayCell.innerHTML = `<div class="day-number">${day}</div>`;
            
            // Verificar si hay cumpleaños este día
            const dayBirthdays = monthBirthdays.filter(p => p.day === day);
            
            if (dayBirthdays.length > 0) {
                dayBirthdays.forEach(person => {
                    const personElement = document.createElement('div');
                    personElement.className = 'birthday-person';
                    
                    // Crear elemento de imagen
                    const imgElement = document.createElement('img');
                    imgElement.alt = person.name;
                    imgElement.style.width = '40px';
                    imgElement.style.height = '40px';
                    imgElement.style.borderRadius = '50%';
                    imgElement.style.objectFit = 'cover';
                    imgElement.style.border = '2px solid white';
                    imgElement.style.marginBottom = '3px';
                    
                    // Cargar imagen con manejo de errores
                    loadImageWithFallback(imgElement, person.photo, 'fotos/default.jpg');
                    
                    // Crear elemento de nombre
                    const nameElement = document.createElement('div');
                    nameElement.className = 'name';
                    nameElement.textContent = person.name.split(' ')[0];
                    
                    // Agregar elementos al personElement
                    personElement.appendChild(imgElement);
                    personElement.appendChild(nameElement);
                    
                    // Agregar evento de clic
                    personElement.addEventListener('click', () => openModal(person));
                    
                    // Agregar al día
                    dayCell.appendChild(personElement);
                });
            }
            
            monthCalendar.appendChild(dayCell);
        }
    });
}

// Mostrar vista de cuadrícula
function renderGrid(filterMonths = null) {
    const peopleGrid = document.getElementById('people-grid');
    peopleGrid.innerHTML = '';
    
    let filteredPeople = birthdays;
    if (filterMonths && filterMonths.length > 0) {
        filteredPeople = birthdays.filter(person => filterMonths.includes(person.month));
    }
    
    filteredPeople.sort((a, b) => {
        if (a.month !== b.month) return a.month - b.month;
        return a.day - b.day;
    });
    
    filteredPeople.forEach(person => {
        const personCard = document.createElement('div');
        personCard.className = 'person-card';
        
        // Crear elemento de imagen
        const imgElement = document.createElement('img');
        imgElement.alt = person.name;
        imgElement.style.width = '100px';
        imgElement.style.height = '100px';
        imgElement.style.borderRadius = '50%';
        imgElement.style.objectFit = 'cover';
        imgElement.style.border = '3px solid var(--primary-color)';
        imgElement.style.marginBottom = '10px';
        imgElement.style.boxShadow = '0 5px 10px rgba(0, 0, 0, 0.1)';
        
        // Cargar imagen con manejo de errores
        loadImageWithFallback(imgElement, person.photo, 'fotos/default.jpg');
        
        // Crear elementos de nombre y cumpleaños
        const nameElement = document.createElement('div');
        nameElement.className = 'name';
        nameElement.textContent = person.name;
        
        const birthdayElement = document.createElement('div');
        birthdayElement.className = 'birthday';
        birthdayElement.textContent = person.formattedDate;
        
        // Agregar elementos al personCard
        personCard.appendChild(imgElement);
        personCard.appendChild(nameElement);
        personCard.appendChild(birthdayElement);
        
        // Agregar evento de clic
        personCard.addEventListener('click', () => openModal(person));
        
        // Agregar al grid
        peopleGrid.appendChild(personCard);
    });
}

// Abrir modal con información de la persona
function openModal(person) {
    const modal = document.getElementById('person-modal');
    const imgElement = document.getElementById('modal-person-img');
    
    // Cargar imagen con manejo de errores
    loadImageWithFallback(imgElement, person.photo, 'fotos/default.jpg');
    
    document.getElementById('modal-person-name').textContent = person.name;
    document.getElementById('modal-person-birthday').textContent = person.formattedDate;
    document.getElementById('modal-person-leader').textContent = `Líder: ${person.leader}`;
    
    modal.style.display = 'flex';
    
    // Configurar botón de celebración
    const celebrationBtn = modal.querySelector('.celebration-btn');
    celebrationBtn.onclick = () => {
        createConfetti();
        setTimeout(() => {
            modal.style.display = 'none';
        }, 2000);
    };
}

// Cerrar modal
document.querySelector('.close-modal').addEventListener('click', () => {
    document.getElementById('person-modal').style.display = 'none';
});

// Cerrar modal al hacer clic fuera
window.addEventListener('click', (e) => {
    if (e.target === document.getElementById('person-modal')) {
        document.getElementById('person-modal').style.display = 'none';
    }
});

// Crear efecto de confeti
function createConfetti() {
    const celebration = document.getElementById('celebration');
    celebration.innerHTML = '';
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = Math.random() * 10 + 5 + 'px';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        celebration.appendChild(confetti);
    }
    
    // Globos
    for (let i = 0; i < 20; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.animationDuration = Math.random() * 10 + 10 + 's';
        balloon.style.animationDelay = Math.random() * 5 + 's';
        balloon.style.width = Math.random() * 30 + 20 + 'px';
        balloon.style.height = Math.random() * 40 + 30 + 'px';
        celebration.appendChild(balloon);
    }
}

// Crear confeti permanente en el título
function createTitleConfetti() {
    const container = document.getElementById('confetti-container');
    container.innerHTML = '';
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = -Math.random() * 100 + 'px';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = Math.random() * 10 + 5 + 'px';
        confetti.style.animationDuration = Math.random() * 5 + 3 + 's';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(confetti);
    }
}

// Celebración automática de 10 segundos
function createAutoCelebration() {
    const celebration = document.getElementById('celebration');
    celebration.innerHTML = '';
    
    // Confeti
    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = Math.random() * 10 + 5 + 'px';
        confetti.style.animationDuration = Math.random() * 5 + 5 + 's';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        celebration.appendChild(confetti);
    }
    
    // Globos
    for (let i = 0; i < 30; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.animationDuration = Math.random() * 15 + 10 + 's';
        balloon.style.animationDelay = Math.random() * 5 + 's';
        balloon.style.width = Math.random() * 40 + 30 + 'px';
        balloon.style.height = Math.random() * 50 + 40 + 'px';
        celebration.appendChild(balloon);
    }
    
    // Detener la celebración después de 10 segundos
    setTimeout(() => {
        celebration.innerHTML = '';
    }, 10000);
}

// Cambiar vista entre calendario y cuadrícula
function setupViewToggle() {
    const viewBtns = document.querySelectorAll('.view-btn');
    viewBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            viewBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            if (btn.dataset.view === 'calendar') {
                document.getElementById('calendar-view').classList.remove('hidden');
                document.getElementById('grid-view').classList.add('hidden');
                renderCalendar(currentFilter);
            } else {
                document.getElementById('calendar-view').classList.add('hidden');
                document.getElementById('grid-view').classList.remove('hidden');
                renderGrid(currentFilter);
            }
        });
    });
}

// Filtrar por mes
let currentFilter = null;
function setupMonthFilters() {
    const monthBtns = document.querySelectorAll('.month-btn');
    monthBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('active');
            
            const activeMonths = Array.from(document.querySelectorAll('.month-btn.active'))
                .map(b => parseInt(b.dataset.month));
            
            currentFilter = activeMonths.length > 0 ? activeMonths : null;
            
            if (document.querySelector('.view-btn.active').dataset.view === 'calendar') {
                renderCalendar(currentFilter);
            } else {
                renderGrid(currentFilter);
            }
        });
    });
    
    // Botón de reset
    document.querySelector('.reset-btn').addEventListener('click', () => {
        monthBtns.forEach(btn => btn.classList.remove('active'));
        currentFilter = null;
        
        if (document.querySelector('.view-btn.active').dataset.view === 'calendar') {
            renderCalendar();
        } else {
            renderGrid();
        }
    });
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    createTitleConfetti(); // Confeti permanente en el título
    createAutoCelebration(); // Celebración automática de 10 segundos
    renderCalendar();
    setupViewToggle();
    setupMonthFilters();
});
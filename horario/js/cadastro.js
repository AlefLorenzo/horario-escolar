// Capturando os elementos do DOM
const form = document.getElementById('scheduleForm');
const classList = document.getElementById('classList');
const viewSchedulesBtn = document.getElementById('viewSchedules');

// Array para armazenar os horários cadastrados
let schedules = JSON.parse(localStorage.getItem('schedules')) || [];

// Função para lidar com o envio do formulário
form.addEventListener('submit', function(e) {
e.preventDefault();

  // Captura os dados do formulário
const turma = document.getElementById('turma').value;
const turno = document.getElementById('turno').value;
const curso = document.getElementById('curso').value;
const diaSemana = document.getElementById('diaSemana').value;
const professor = document.getElementById('professor').value;
const materia = document.getElementById('materia').value;
const inicio = document.getElementById('inicio').value;
const termino = document.getElementById('termino').value;

  // Cria um objeto com os dados do horário
const newSchedule = { turma, turno, curso, diaSemana, professor, materia, inicio, termino };

  // Adiciona o novo horário ao array
schedules.push(newSchedule);

  // Armazena os horários no localStorage
localStorage.setItem('schedules', JSON.stringify(schedules));

  // Atualiza a lista de turmas
updateClassList();

  // Limpa o formulário
form.reset();
});

// Função para atualizar a lista de turmas na sidebar
function updateClassList() {
    classList.innerHTML = '';

    const turmas = [...new Set(schedules.map(schedule => schedule.turma))]; // Filtra turmas únicas

    turmas.forEach((turma) => {
        const li = document.createElement('li');
        li.classList.add('cursor-pointer', 'hover:bg-gray-200', 'p-2', 'rounded');
        li.textContent = turma;
        classList.appendChild(li);
});
}

// Evento para visualizar os horários
viewSchedulesBtn.addEventListener('click', function() {
  window.location.href = 'horarios.html'; // Redireciona para a página de horários
});

// Atualiza a lista de turmas ao carregar a página
updateClassList();

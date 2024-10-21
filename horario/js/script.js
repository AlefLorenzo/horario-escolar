// Capturando os elementos do DOM
const form = document.getElementById('scheduleForm');
const classList = document.getElementById('classList');
const scheduleTable = document.getElementById('scheduleTable');

// Array para armazenar os horários cadastrados
let schedules = [];

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

  // Cria um objeto com os dados do horário
const newSchedule = { turma, turno, curso, diaSemana, professor, materia };

  // Adiciona o novo horário ao array
    schedules.push(newSchedule);

    // Atualiza a lista de turmas e a tabela de horários
    updateClassList();
    updateScheduleTable();

  // Limpa o formulário
form.reset();
});

// Função para atualizar a lista de turmas na sidebar
function updateClassList() {
    classList.innerHTML = '';

    schedules.forEach((schedule) => {
        const listItem = document.createElement('li');
        listItem.classList.add('cursor-pointer', 'p-2', 'bg-gray-200', 'rounded');
        listItem.textContent = `${schedule.turma} - ${schedule.turno}`;
        listItem.addEventListener('click', () => {
            filterSchedules(schedule.turma);
        });
        classList.appendChild(listItem);
});
}

// Função para atualizar a tabela de horários
function updateScheduleTable() {
    scheduleTable.innerHTML = '';

schedules.forEach((schedule) => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td class="border px-4 py-2">${schedule.turma}</td>
        <td class="border px-4 py-2">${schedule.turno}</td>
        <td class="border px-4 py-2">${schedule.curso}</td>
        <td class="border px-4 py-2">${schedule.diaSemana}</td>
        <td class="border px-4 py-2">${schedule.professor}</td>
        <td class="border px-4 py-2">${schedule.materia}</td>
    `;
    scheduleTable.appendChild(row);
});
}

// Função para filtrar horários por turma
function filterSchedules(turma) {
    scheduleTable.innerHTML = '';

const filteredSchedules = schedules.filter(schedule => schedule.turma === turma);

filteredSchedules.forEach((schedule) => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td class="border px-4 py-2">${schedule.turma}</td>
        <td class="border px-4 py-2">${schedule.turno}</td>
        <td class="border px-4 py-2">${schedule.curso}</td>
        <td class="border px-4 py-2">${schedule.diaSemana}</td>
        <td class="border px-4 py-2">${schedule.professor}</td>
        <td class="border px-4 py-2">${schedule.materia}</td>
    `;
    scheduleTable.appendChild(row);
});
}

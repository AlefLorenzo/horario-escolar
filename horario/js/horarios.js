// Capturando os elementos do DOM
const scheduleTable = document.getElementById('scheduleTable');
const goBackBtn = document.getElementById('goBack');

// Recupera os horários armazenados no localStorage
const schedules = JSON.parse(localStorage.getItem('schedules')) || [];

// Função para exibir os horários na tabela
function displaySchedules() {
    schedules.forEach(schedule => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="border px-4 py-2">${schedule.turma}</td>
            <td class="border px-4 py-2">${schedule.turno}</td>
            <td class="border px-4 py-2">${schedule.curso}</td>
            <td class="border px-4 py-2">${schedule.diaSemana}</td>
            <td class="border px-4 py-2">${schedule.professor}</td>
            <td class="border px-4 py-2">${schedule.materia}</td>
            <td class="border px-4 py-2">${schedule.inicio}</td>
            <td class="border px-4 py-2">${schedule.termino}</td>
    `;
    scheduleTable.appendChild(row);
});
}

// Botão para voltar à página de cadastro
goBackBtn.addEventListener('click', function() {
  window.location.href = 'index.html'; // Redireciona para a página de cadastro
});

// Exibe os horários ao carregar a página
displaySchedules();

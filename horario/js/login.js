// Lista de usuários com seus papéis
const users = [
    { username: 'gerenciador', password: '123456', role: 'gerenciador' },
    { username: 'usuario', password: '123456', role: 'usuario' }
];

  // Função para salvar o usuário logado no localStorage
function loginUser(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
}

  // Função para redirecionar com base no papel do usuário
function redirectToRolePage(role) {
    if (role === 'gerenciador') {
      window.location.href = 'index.html'; // Gerenciador vai para a página de cadastro
    } else {
      window.location.href = 'horarios.html'; // Usuário comum vai para a página de visualização
    }
}

  // Lógica de login
const form = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        loginUser(user);
        redirectToRolePage(user.role);
    } else {
        errorMessage.classList.remove('hidden');
    }
});

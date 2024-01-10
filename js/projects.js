function toggleProjects() {
    var personalProjects = document.querySelector('.personal-projects');
    var institucionalProjects = document.querySelector('.institucional-projects');
    var projectTitle = document.getElementById('projectTitle');

    // Alternar a visibilidade dos projetos
    personalProjects.style.display = personalProjects.style.display === 'none' ? 'block' : 'none';
    institucionalProjects.style.display = institucionalProjects.style.display === 'none' ? 'block' : 'none';

    // Alterar o título com base na visibilidade atual
    projectTitle.innerText = personalProjects.style.display === 'block' ? 'Projetos Pessoais' : 'Projetos Institucionais';

    // Alterar o texto do botão com base na visibilidade atual
    document.querySelector('button').innerText = personalProjects.style.display === 'block' ? 'Mostrar Projetos Institucionais' : 'Mostrar Projetos Pessoais';
}
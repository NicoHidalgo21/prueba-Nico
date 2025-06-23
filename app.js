document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('taskForm');
    const taskList = document.getElementById('tasks');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtener los valores del formulario
        const taskName = document.getElementById('taskName').value;
        const dueDate = document.getElementById('dueDate').value;
        const description = document.getElementById('description').value;
        const taskType = document.getElementById('taskType').value;
        const priorityElements = document.getElementsByName('priority');
        let priorityValue = '';
        
        for (let i = 0; i < priorityElements.length; i++) {
            if (priorityElements[i].checked) {
                priorityValue = priorityElements[i].value;
                break;
            }
        }

        // Validar que todos los campos estén completos
        if (!taskName || !dueDate || !description || !taskType || !priorityValue) {
            alert('Por favor, complete todos los campos.');
            return;
        }


});
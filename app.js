document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formTarea');
    const taskList = document.getElementById('taskList');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const nombreTarea = document.getElementById("nombre").value.trim();
      const fechaEntrega = document.getElementById("fecha").value;
      const descripcionTarea = document.getElementById("descripcion").value.trim();
      const tipoTarea = document.getElementById("tipo").value;
  
      const prioridadRadios = document.getElementsByName("prioridad");
      let prioridad = '';
      for (let i = 0; i < prioridadRadios.length; i++) {
        if (prioridadRadios[i].checked) {
          prioridad = prioridadRadios[i].value;
          break;
        }
      }
  
      if (!nombreTarea || !fechaEntrega || !descripcionTarea || !tipoTarea || !prioridad) {
        alert("Por favor, complete todos los campos.");
        return;
      }
  
      const taskCard = document.createElement("div");
      taskCard.classList.add("task-card");
  
      taskCard.innerHTML = `
        <h3>${nombreTarea}</h3>
        <p><strong>Fecha de entrega:</strong> ${fechaEntrega}</p>
        <p><strong>Descripción:</strong> ${descripcionTarea}</p>
        <p><strong>Tipo:</strong> ${tipoTarea}</p>
        <p class="priority ${prioridad}"><strong>Prioridad:</strong> ${prioridad}</p>
      `;
  
      taskList.appendChild(taskCard);
      form.reset();
    });
  });
  
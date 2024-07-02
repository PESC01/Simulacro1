async function checkCode() {
  const code = document.getElementById('accessCode').value;
  try {
      const response = await fetch('/check-code', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ code: code })
      });

      if (!response.ok) {
          throw new Error('Network response was not ok');
      }

      const data = await response.json();
      
     
      if (data.valid) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('quiz').style.display = 'block';
        loadQuestions();
    } else {
        alert('Código inválido o ya usado.');
    }
} catch (error) {
    console.error('Error fetching data:', error);
    alert('Error al verificar el código. Por favor, intenta nuevamente más tarde.');
}
}


const questions = [
    {
        type: 'subtitle',
        subtitle: "Constitución Política del Estado"
    },
    {
        type: 'question',
        question: "Según el Artículo 1, ¿cómo se constituye Bolivia?",
        options: [
            "A) Como un Estado Federal",
            "B) Como un Estado Unitario Social de Derecho Plurinacional Comunitario",
            "C) Como una República Presidencialista",
            "D) Como una Monarquía Constitucional"
        ],
        correctAnswer: 1
    },
    {
        type: 'question',
        question: "¿Cuál de los siguientes NO es un idioma oficial del Estado boliviano según el Artículo 5?",
        options: [
            "A) Castellano",
            "B) Aymara",
            "C) Quechua",
            "D) Español"
        ],
        correctAnswer: 3
    },
    {
        type: 'question',
        question: "De acuerdo al Artículo 6, ¿cuál es la capital de Bolivia?",
        options: [
            "A) La Paz",
            "B) Santa Cruz",
            "C) Sucre",
            "D) Cochabamba"
        ],
        correctAnswer: 2
    },
    {
        type: 'question',
        question: "Según el Artículo 8, ¿cuál de los siguientes NO es un principio ético-moral promovido por el Estado?",
        options: [
            "A) Ama qhilla",
            "B) Suma qamaña",
            "C) Ñandereko",
            "D) Viva la Patria"
        ],
        correctAnswer: 3
    },
    {
        type: 'question',
        question: "De acuerdo al Artículo 11, ¿cuál de las siguientes NO es una forma de democracia reconocida en Bolivia?",
        options: [
            "A) Directa y participativa",
            "B) Representativa",
            "C) Comunitaria",
            "D) Parlamentaria"
        ],
        correctAnswer: 3
    },
    {
        type: 'subtitle',
        subtitle: "Ley N° 004 de Lucha contra la corrupción, enriquecimiento ilícito e investigación de fortunas "
    },
    {
        type: 'question',
        question: "¿Cuál es el objeto principal de la Ley de Lucha Contra la Corrupción según el Artículo 1?",
        options: [
            "A) Sancionar únicamente a servidores públicos corruptos",
            "B) Prevenir, investigar, procesar y sancionar actos de corrupción",
            "C) Recuperar el patrimonio del Estado",
            "D) Todas las anteriores"
        ],
        correctAnswer: 3
    },
    {
        type: 'question',
        question: "Según el Artículo 2, ¿qué se define como corrupción?",
        options: [
            "A) Solo el requerimiento de objetos de valor por parte de un servidor público",
            "B) Únicamente la aceptación de dádivas por parte de personas naturales",
            "C) El ofrecimiento u otorgamiento de beneficios a cambio de acciones que afecten los intereses del Estado",
            "D) Exclusivamente el enriquecimiento ilícito de funcionarios públicos"
        ],
        correctAnswer: 2
    },
    {
        type: 'question',
        question: "¿Cuál de los siguientes NO es un principio que rige la Ley según el Artículo 4?",
        options: [
            "A) Suma Qamaña (Vivir bien)",
            "B) Ama Suwa (No seas ladrón)",
            "C) Transparencia",
            "D) Confidencialidad"
        ],
        correctAnswer: 3
    },
    {
        type: 'question',
        question: "De acuerdo al Artículo 5, ¿a quiénes se aplica esta Ley?",
        options: [
            "A) Solo a servidores públicos actuales",
            "B) Únicamente a entidades del nivel central del Estado",
            "C) A servidores públicos, ex servidores públicos y personas privadas que causen daño económico al Estado",
            "D) Exclusivamente a miembros de las Fuerzas Armadas y Policía Boliviana"
        ],
        correctAnswer: 2
    },
    {
        type: 'question',
        question: "Según el Artículo 6, ¿quién preside el Consejo Nacional de Lucha Contra la Corrupción, Enriquecimiento Ilícito y Legitimación de Ganancias Ilícitas?",
        options: [
            "A) El Ministro de Gobierno",
            "B) El Titular del Ministerio de Transparencia Institucional y Lucha Contra la Corrupción",
            "C) El Procurador General del Estado",
            "D) Un representante de la Sociedad Civil Organizada"
        ],
        correctAnswer: 1
    },
    {
        type: 'subtitle',
        subtitle: " Ley N° 070, de la Educación “Avelino Siñani-Elizardo Pérez "
    },
    {
        type: 'question',
        question: "Según el Artículo 28, ¿qué es la Educación Superior de Formación Profesional?",
        options: [
            "A) Un espacio de formación básica",
            "B) Un espacio de formación técnica exclusivamente",
            "C) Un espacio de formación profesional, recuperación, generación y recreación de conocimientos y saberes",
            "D) Un espacio de formación exclusivamente teórica"
        ],
        correctAnswer: 2
    },
    {
        type: 'question',
        question: "De acuerdo al Artículo 29, ¿cuál de los siguientes NO es un objetivo de la Educación Superior de Formación Profesional?",
        options: [
            "A) Formar profesionales con compromiso social y conciencia crítica",
            "B) Desarrollar investigación, ciencia, tecnología e innovación",
            "C) Garantizar el acceso democrático al conocimiento",
            "D) Promover la competencia individual sobre el trabajo colaborativo"
        ],
        correctAnswer: 3
    },
    {
        type: 'question',
        question: "¿Cuál de las siguientes NO es parte de la estructura de la Educación Superior de Formación Profesional según el Artículo 30?",
        options: [
            "A) Formación de Maestras y Maestros",
            "B) Formación Técnica y Tecnológica",
            "C) Formación Artística",
            "D) Formación Militar"
        ],
        correctAnswer: 3
    },
    {
        type: 'question',
        question: "Según el Artículo 32, ¿cuál de las siguientes características NO corresponde a la naturaleza de la Formación Superior de Maestras y Maestros?",
        options: [
            "A) Única",
            "B) Intracultural, intercultural y plurilingüe",
            "C) Fiscal y gratuita",
            "D) Homogénea en su implementación curricular"
        ],
        correctAnswer: 3
    },
    {
        type: 'question',
        question: "De acuerdo al Artículo 33, ¿cuál es uno de los objetivos de la Formación Superior de Maestras y Maestros?",
        options: [
            "A) Formar profesionales conformistas y poco críticos",
            "B) Desarrollar la formación integral con alto nivel académico",
            "C) Promover la especialización temprana en una única área",
            "D) Fomentar el desconocimiento de la realidad sociocultural del país"
        ],
        correctAnswer: 1
    },
    
    {
        type: 'subtitle',
        subtitle: "Ley N° 348, Integral para garantizar a las mujeres una vida libre de violencia."
    },

    {
        type: 'question',
        question: "Según el Artículo 32, ¿cuál es uno de los objetivos de las medidas de protección?",
        options: [
            "A) Reconciliar a la pareja",
            "B) Castigar al agresor",
            "C) Interrumpir e impedir un hecho de violencia contra las mujeres",
            "D) Promover la mediación familiar"
        ],
        correctAnswer: 2
    },
    {
        type: 'question',
        question: "De acuerdo al Artículo 33, ¿qué principio deben aplicar los procedimientos judiciales o administrativos de protección a mujeres en situación de violencia?",
        options: [
            "A) Principio de celeridad",
            "B) Principio de trato digno",
            "C) Principio de imparcialidad",
            "D) Principio de publicidad"
        ],
        correctAnswer: 1
    },
    {
        type: 'question',
        question: "Según el Artículo 35, ¿cuál de las siguientes NO es una medida de protección que puede dictar la autoridad competente?",
        options: [
            "A) Ordenar la salida del agresor del domicilio conyugal",
            "B) Prohibir al agresor enajenar bienes comunes",
            "C) Obligar a la mujer a permanecer en el domicilio conyugal",
            "D) Suspender temporalmente al agresor del régimen de visitas con sus hijos"
        ],
        correctAnswer: 2
    },
    {
        type: 'question',
        question: "De acuerdo al Artículo 36, en caso de feminicidio, ¿quién acompaña el proceso de custodia de los hijos menores?",
        options: [
            "A) El Ministerio de Justicia",
            "B) La Policía Nacional",
            "C) La Defensoría de la Niñez y Adolescencia",
            "D) El Tribunal Supremo de Justicia"
        ],
        correctAnswer: 2
    },
    {
        type: 'question',
        question: "Según el Artículo 37, ¿quién tiene la facultad de declarar alerta contra la violencia hacia las mujeres a nivel nacional?",
        options: [
            "A) El Órgano Judicial",
            "B) El Órgano Ejecutivo, a través del Ente Rector",
            "C) El Ministerio Público",
            "D) Las Entidades Territoriales Autónomas"
        ],
        correctAnswer: 1
    },
    {
        type: 'subtitle',
        subtitle: "Ley N° 045, Contra el racismo y toda forma de discriminación"
    },
    {
        type: 'question',
        question: "Según el Artículo 281 bis, ¿cuál es la pena privativa de libertad para actos de racismo?",
        options: [
          "A) De uno a cinco años",
          "B) De tres a siete años",
          "C) De cinco a diez años",
          "D) De dos a seis años"
        ],
        correctAnswer: 1
      },
      {
        type: 'question',
        question: "¿Cuál de las siguientes NO es una circunstancia agravante para los delitos de racismo y discriminación?",
        options: [
          "A) Que el hecho sea cometido por un servidor público",
          "B) Que el hecho sea cometido con violencia",
          "C) Que el hecho sea cometido por un particular en un servicio público",
          "D) Que el hecho sea cometido en un evento deportivo"
        ],
        correctAnswer: 3
      },
      {
        type: 'question',
        question: "¿Cuál es la pena para el delito de discriminación según el Artículo 281 ter?",
        options: [
          "A) De tres a siete años",
          "B) De dos a seis años",
          "C) De uno a cinco años",
          "D) De cuatro a ocho años"
        ],
        correctAnswer: 2
      },
      {
        type: 'question',
        question: "¿Qué sanción se aplica a quien difunda ideas basadas en la superioridad o el odio racial?",
        options: [
          "A) Pena privativa de libertad de uno a cinco años",
          "B) Multa de cuarenta a ciento cincuenta días",
          "C) Pena privativa de libertad de tres a siete años",
          "D) Prestación de trabajo de cuarenta días a dieciocho meses"
        ],
        correctAnswer: 0
      },
      {
        type: 'question',
        question: "¿Qué ocurre si una persona se retracta de insultos o agresiones verbales por motivos racistas antes de la imputación formal?",
        options: [
          "A) Se reduce la pena a la mitad",
          "B) Se aplica una multa en lugar de prisión",
          "C) La acción penal queda extinguida",
          "D) Se requiere una disculpa pública"
        ],
        correctAnswer: 2
      },
      {
        type: 'subtitle',
        subtitle: "Ley N° 548, del Código, Niña, Niño y Adolescente."
    },
    {
        type: 'question',
        question: "¿Cuál es el objeto principal del Código Niña, Niño y Adolescente según el Artículo 1?",
        options: [
          "A) Implementar un sistema de justicia juvenil",
          "B) Reconocer, desarrollar y regular el ejercicio de los derechos de la niña, niño y adolescente",
          "C) Establecer sanciones para quienes vulneren los derechos de los menores",
          "D) Definir las responsabilidades de los padres y tutores"
        ],
        correctAnswer: 1
      },
      {
        type: 'question',
        question: "Según el Artículo 5, ¿hasta qué edad se considera a una persona sujeto de derechos de este Código?",
        options: [
          "A) Hasta los 16 años cumplidos",
          "B) Hasta los 17 años cumplidos",
          "C) Hasta los 18 años cumplidos",
          "D) Hasta los 21 años cumplidos"
        ],
        correctAnswer: 2
      },
      {
        type: 'question',
        question: "¿Qué rango de edad comprende la etapa de la adolescencia según el Código?",
        options: [
          "A) Desde los 10 hasta los 16 años",
          "B) Desde los 11 hasta los 17 años",
          "C) Desde los 12 hasta los 18 años cumplidos",
          "D) Desde los 13 hasta los 19 años"
        ],
        correctAnswer: 2
      },
      {
        type: 'question',
        question: "De acuerdo al Artículo 7, ¿qué se presume en caso de duda sobre la edad de una persona?",
        options: [
          "A) Que es mayor de edad",
          "B) Que es menor de 18 años",
          "C) Que es adolescente",
          "D) Que es niño o niña"
        ],
        correctAnswer: 1
      },
      {
        type: 'question',
        question: "Según el Artículo 10, ¿cómo deben ser los procesos judiciales o administrativos que involucren a niñas, niños o adolescentes?",
        options: [
          "A) Rápidos",
          "B) Confidenciales",
          "C) Gratuitos",
          "D) Simplificados"
        ],
        correctAnswer: 2
      },
      {
        type: 'subtitle',
        subtitle: "Decreto Supremo N° 04688, del Reglamento del Escalafón Nacional del Servicio de Educación"
    },
    {
        type: 'question',
        question: "Según el Artículo 4°, ¿cuáles son los dos sectores que comprende el servicio de Educación?",
        options: [
          "A) Público y privado",
          "B) Urbano y rural",
          "C) Docente y administrativo",
          "D) Primario y secundario"
        ],
        correctAnswer: 2
      },
      {
        type: 'question',
        question: "¿Cuál es el rango de edad requerido para ingresar en el sector docente según el Artículo 5°?",
        options: [
          "A) No menos de 16 ni más de 45 años",
          "B) No menos de 18 ni más de 50 años",
          "C) No menos de 21 ni más de 55 años",
          "D) No menos de 20 ni más de 60 años"
        ],
        correctAnswer: 1
      },
      {
        type: 'question',
        question: "De acuerdo al Artículo 7°, ¿cuántas clases de maestros se reconocen en mérito al grado de preparación y experiencia profesional?",
        options: [
          "A) Dos",
          "B) Tres",
          "C) Cuatro",
          "D) Cinco"
        ],
        correctAnswer: 1
      },
      {
        type: 'question',
        question: "Según el Artículo 8°, ¿quiénes son considerados maestros normalistas?",
        options: [
          "A) Los que tienen más de 10 años de experiencia",
          "B) Los que obtienen un certificado profesional tras seguir un curso regular de formación pedagógica",
          "C) Los que ingresan al servicio docente de forma provisional",
          "D) Los que aprueban un examen de capacidad después de 10 años de servicio"
        ],
        correctAnswer: 1
      },
      {
        type: 'question',
        question: "De acuerdo al Artículo 9°, ¿qué grado mínimo de instrucción se requiere para un maestro interino que enseñará en el ciclo secundario?",
        options: [
          "A) Diploma de Bachiller",
          "B) Título universitario",
          "C) Técnico titular",
          "D) Certificado de formación pedagógica"
        ],
        correctAnswer: 1
      },
      {
        type: 'subtitle',
        subtitle: "Decretos Supremos N° 1302 y N° 1320"
    },
    {
        type: 'question',
        question: "Según el Decreto Supremo N° 1302, ¿quiénes tienen la obligación de denunciar y coadyuvar en la acción penal contra directores, docentes o administrativos sindicados de delitos contra estudiantes?",
        options: [
          "A) Los padres de familia y los estudiantes",
          "B) Los Directores Departamentales de Educación y el Ministerio de Educación",
          "C) El Ministerio Público y la Policía Nacional",
          "D) Los directores de unidades educativas"
        ],
        correctAnswer: 1
      },
      {
        type: 'question',
        question: "¿Qué medida se toma contra un director, docente o administrativo que sea imputado formalmente por delitos contra estudiantes?",
        options: [
          "A) Destitución inmediata",
          "B) Suspensión de funciones con goce de haberes",
          "C) Suspensión de funciones sin goce de haberes",
          "D) Traslado a otra unidad educativa"
        ],
        correctAnswer: 2
      },
      {
        type: 'question',
        question: "En caso de sobreseimiento o sentencia absolutoria, ¿qué sucede con el director, docente o administrativo suspendido?",
        options: [
          "A) Se mantiene la suspensión",
          "B) Es restituido en sus funciones sin reposición de haberes",
          "C) Es restituido en sus funciones con reposición de la totalidad de sus haberes devengados",
          "D) Se le asigna un nuevo cargo"
        ],
        correctAnswer: 2
      },
      {
        type: 'question',
        question: "¿Qué entidad es responsable de desarrollar un plan específico para enfrentar la violencia, maltrato y abuso en el ámbito educativo?",
        options: [
          "A) El Ministerio de Justicia",
          "B) Las Direcciones Departamentales de Educación",
          "C) El Ministerio de Educación",
          "D) El Ministerio Público"
        ],
        correctAnswer: 2
      },
      {
        type: 'question',
        question: "¿Cuál de las siguientes NO es una acción contemplada en el Plan para una Educación sin Violencia?",
        options: [
          "A) Capacitación y difusión de estrategias de prevención",
          "B) Desarrollo de lineamientos curriculares con contenido de prevención",
          "C) Establecer lineamientos para un sistema de seguimiento y monitoreo",
          "D) Implementación de castigos físicos para estudiantes violentos"
        ],
        correctAnswer: 3
      },
      {
        type: 'subtitle',
        subtitle: "esolución Suprema N° 212414, del Reglamento de faltas y sanciones del Magisterio y Personal Docente y Administrativo"
    },
    {
        type: 'question',
        question: "¿Qué tipo de faltas se clasifican en el reglamento?",
        options: [
          "A) Graves, muy graves y extremas",
          "B) Leves, graves y muy graves",
          "C) Menores, intermedias y mayores",
          "D) Administrativas, docentes y directivas"
        ],
        correctAnswer: 1
      },
      {
        type: 'question',
        question: "¿Cuál de las siguientes NO es una falta leve según el reglamento?",
        options: [
          "A) La suspensión de labores por cumpleaños",
          "B) La negligencia en el cuidado del mobiliario escolar",
          "C) El consumo de cigarrillos en ambientes escolares",
          "D) La extorsión a los alumnos ofreciendo calificaciones"
        ],
        correctAnswer: 3
      },
      {
        type: 'question',
        question: "¿Qué sanción corresponde a las faltas graves?",
        options: [
          "A) Amonestación en privado",
          "B) Retiro definitivo del ejercicio del Magisterio",
          "C) Suspensión de funciones sin goce de haber de 15 a 60 días",
          "D) Descuento de uno a cinco días de haber"
        ],
        correctAnswer: 2
      },
      {
        type: 'question',
        question: "¿Quién preside el Tribunal Disciplinario Nacional?",
        options: [
          "A) El Ministro de Educación y Cultura",
          "B) El Director General de Educación",
          "C) El Presidente de la República",
          "D) El Secretario General del Sindicato de Maestros"
        ],
        correctAnswer: 1
      },
      {
        type: 'question',
        question: "¿Cuál es el plazo para interponer un recurso de apelación contra un fallo disciplinario?",
        options: [
          "A) 24 horas",
          "B) 3 días",
          "C) 5 días",
          "D) 15 días"
        ],
        correctAnswer: 1
      }


];

function loadQuestions() {
  const questionsContainer = document.getElementById('questions');
  questionsContainer.innerHTML = '';
  questions.forEach((q, index) => {
      if (q.type === 'subtitle') {
          const subtitleHtml = `
              <div class="subtitle">
                  <h2>${q.subtitle}</h2>
              </div>
          `;
          questionsContainer.innerHTML += subtitleHtml;
      } else if (q.type === 'question') {
          const questionHtml = `
              <div class="question">
                  <p><strong>Pregunta ${index + 1}:</strong> ${q.question}</p>
                  <div class="options">
                      ${q.options.map((option, i) => `
                          <label>
                              <input type="radio" name="q${index}" value="${i}">
                              ${option}
                          </label>
                      `).join('')}
                  </div>
              </div>
          `;
          questionsContainer.innerHTML += questionHtml;
      }
  });
}

function submitExam() {
  let score = 0;
  let questionNumber = 1;
  let answersHtml = '<h3>Respuestas correctas:</h3>';
  questions.forEach((q, index) => {
      if (q.type === 'question') {
          const selected = document.querySelector(`input[name="q${index}"]:checked`);
          const userAnswer = selected ? parseInt(selected.value) : -1;
          if (userAnswer === q.correctAnswer) {
              score++;
          }
          answersHtml += `
              <p><strong>Pregunta ${questionNumber}:</strong> ${q.question}</p>
              <ul>
                  ${q.options.map((option, i) => `
                      <li class="${i === q.correctAnswer ? 'correct' : (i === userAnswer && i !== q.correctAnswer ? 'incorrect' : '')}">${option}</li>
                  `).join('')}
              </ul>
          `;
          questionNumber++;
      }
  });
  const resultPercentage = (score / questions.filter(q => q.type === 'question').length) * 100;
  document.getElementById('result').innerHTML = `Tu puntuación: ${score}/${questions.filter(q => q.type === 'question').length} (${resultPercentage.toFixed(2)}%)`;
  document.getElementById('correctAnswers').innerHTML = answersHtml;
  const examForm = document.getElementById('quiz');
  const resultForm = document.getElementById('resultForm');
  if (examForm) {
      examForm.style.display = 'none';
  }
  if (resultForm) {
      resultForm.style.display = 'block';
  }
}

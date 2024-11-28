alert("Bienvenido a FinanzaVersity: para tu mejora financiera, un paso hacia el futuro y una estabilidad económica. Siempre te apoyaremos en todo lo que necesites.");

// Función para mostrar el menú y obtener la elección del usuario
function mostrarMenu() {
    const opciones = "Seleccione un tema:\n1. Introducción a las finanzas personales\n2. Presupuesto y ahorro\n3. Conceptos básicos de inversión\n4. Salir del Menú";
    const eleccion = prompt(opciones);
    return eleccion;
}

// Función para evaluar la situación del usuario
function evaluarSituacion() {
    const pocoAhorro = prompt('¿Tiene poco ahorro? (si/no)').toLowerCase() === 'si';
    const tieneDeudas = prompt('¿Tiene deudas? (si/no)').toLowerCase() === 'si';
    const tieneDeudasModeradas = prompt('¿Tiene deudas moderadas? (si/no)').toLowerCase() === 'si';
    return { pocoAhorro, tieneDeudas, tieneDeudasModeradas };
}

// Función para mostrar la introducción al tema seleccionado
function mostrarTema(eleccion) {
    switch (eleccion) {
        case '1':
            alert("Introducción a las finanzas personales:\nLas finanzas personales implican la gestión del dinero y las decisiones de inversión de una persona. Incluyen el presupuesto, el ahorro, las inversiones y la gestión del riesgo financiero.");
            alert("Introducción a las finanzas personales:\n\n" +
                  "Entender la diferencia entre ingresos y gastos es el primer paso para una salud financiera sólida.\n" +
                  " - Ingresos: Todo el dinero que recibes, ya sea de tu salario, inversiones, negocios, etc.\n" +
                  " - Egresos: Todo el dinero que gastas, como en alimentos, vivienda, entretenimiento, etc.\n" +
                  " - Ahorro: La parte de tus ingresos que reservas para el futuro o para emergencias.\n" +
                  " - Deuda: El dinero que has pedido prestado y necesitas devolver, como préstamos o tarjetas de crédito.\n\n" +
                  "Mantener un equilibrio positivo entre ingresos y gastos, y gestionar adecuadamente el ahorro y la deuda, es esencial para una buena salud financiera.");
            break;
        case '2':
            alert("Presupuesto y ahorro:\nEl presupuesto es una herramienta clave para gestionar tus ingresos y gastos. Ahorrar significa reservar una parte de tus ingresos para futuros gastos o emergencias, lo cual es crucial para la estabilidad financiera.");
            
            let ingresos = parseFloat(prompt("¿Cuáles son tus ingresos mensuales?"));
            let gastos = parseFloat(prompt("¿Cuánto gastas al mes?"));
            let gastosHormigas = parseFloat(prompt("¿Cuánto gastas en pequeños (gastos hormiga) cada mes?"));
            let tieneDeudas = confirm("¿Tienes deudas actualmente?");
            let ahorroPorcentaje = parseFloat(prompt("¿Cuánto porcentaje de tus ingresos destinas al ahorro? (0-100%)"));
            let metaAhorro = parseFloat(prompt("¿Cuál es tu meta de ahorro?"));

            if (isNaN(ingresos) || isNaN(gastos) || isNaN(gastosHormigas) || isNaN(ahorroPorcentaje) || isNaN(metaAhorro)) {
                alert("Por favor, asegúrate de ingresar números válidos en todas las preguntas.");
            } else {
                
                let ahorroMensual = (ahorroPorcentaje / 100) * ingresos;
                let gastosTotales = gastos + gastosHormigas;

                
                let balance = ingresos - gastosTotales - ahorroMensual;

                
                let saludFinanciera = "buena"; 

                if (balance > 0 && !tieneDeudas) {
                    saludFinanciera = "Buena"; 
                } else if (balance > 0 && tieneDeudas) {
                    saludFinanciera = "Moderada"; 
                } else if (balance <= 0 && tieneDeudas) {
                    saludFinanciera = "Mala"; 
                }

                // Calcular el tiempo estimado para alcanzar la meta de ahorro
                let mesesParaMeta = metaAhorro / ahorroMensual;
                if (isFinite(mesesParaMeta) && mesesParaMeta >= 0) {
                    mesesParaMeta = Math.max(mesesParaMeta, 0); 
                } else {
                    mesesParaMeta = Infinity; 
                }

                
                alert("Salud financiera: " + saludFinanciera);

                // Mostrar reporte final
                let reporteFinal = `Reporte Final de Finanzas Personales:

                1. Información Básica:
                - Ingreso mensual: $${ingresos.toFixed(2)}
                - Gasto total mensual (incluye gastos hormiga): $${gastosTotales.toFixed(2)}
                - Ahorro mensual: $${ahorroMensual.toFixed(2)}
                - Meta de ahorro: $${metaAhorro.toFixed(2)}

                2. Resumen Financiero:
                - Balance mensual (dinero que te queda después de gastos y ahorro): $${balance.toFixed(2)}
                - Salud financiera: ${saludFinanciera}
                - Tiempo estimado para alcanzar tu meta de ahorro: ${
                    mesesParaMeta === Infinity ? "No es posible con tu ahorro actual." : mesesParaMeta.toFixed(1) + " meses"
                }

                3. Recomendaciones:
                ${balance < 0 ? "- Gastas más de lo que ganas, reduce tus gastos.\n" : ""}
                ${ahorroPorcentaje < 20 ? "- Intenta ahorrar al menos el 20% de tus ingresos.\n" : ""}
                ${gastosHormigas > 0 ? "- Disminuye los pequeños gustos para ahorrar más rápido.\n" : ""}
                ${tieneDeudas ? "- Prioriza pagar tus deudas lo antes posible.\n" : "- ¡Bien hecho! No tienes deudas, sigue así."}
                
                4. Consejos para mejorar tu salud financiera:
                - Haz un seguimiento detallado de tus gastos hormiga y trata de reducirlos.
                - Si tienes deudas, evalúa la posibilidad de refinanciarlas o prioriza el pago de las deudas con mayor tasa de interés.
                - Si no estás ahorrando el 20% de tus ingresos, busca formas de ajustar tu presupuesto para lograrlo.

                Conclusión:
                - Tu salud financiera está en una condición *${saludFinanciera}*. Es importante que sigas las recomendaciones y ajustes tus hábitos para mejorar tu situación financiera.

                ¡Gracias por utilizar nuestra calculadora financiera! Sigue gestionando tu dinero de manera inteligente.`;
                alert(reporteFinal);
            }
            break;
        case '3':
            alert("Conceptos básicos de inversión:\nInvertir implica usar tu dinero para comprar activos que se espera aumenten de valor con el tiempo. Conceptos básicos incluyen la diversificación.");
            
            const situacion = evaluarSituacion(); 
            let consejos = "Conceptos básicos de inversión y consejos prácticos de finanzas personales:\n\n" + 
            "Aquí hay algunos consejos prácticos de finanzas personales:\n\n"; 

            if (situacion.pocoAhorro) {
                consejos += " - Implementa la regla del 50/30/20: 50% para necesidades, 30% para gustos y 20% para ahorro e inversión.\n";
            } 
            
            if (situacion.tieneDeudas) { 
                consejos += " - Prioriza el pago de deudas con mayor tasa de interés y busca consolidar tus compromisos financieros.\n"; 
            }

            if (situacion.tieneDeudasModeradas) {
                consejos += " - Crea un presupuesto mensual y cúmplelo: Esto te ayudará a controlar tus gastos y ahorrar más dinero.\n" + 
                    " - Establece un fondo de emergencia: Ahorra suficiente dinero para cubrir al menos tres a seis meses de gastos esenciales.\n";
            }

            alert(consejos);
            break;
        case '4':
            alert("Gracias por visitar FinanzaVersity. ¡Hasta pronto!");
            break;
        default:
            alert("Opción no válida. Por favor, selecciona un número entre 1 y 4.");
    }
}

// Ejecutar el menú inicial
let eleccion;
do {
    eleccion = mostrarMenu();
    if (eleccion !== '4') {
        mostrarTema(eleccion);
    }
} while (eleccion !== '4');
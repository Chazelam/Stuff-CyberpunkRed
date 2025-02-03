let stats = [1, 2, 3, 4, 5, 6,7, 8, 9, 0];


// Создает пустую ячейку
function createStatCellNull() {
    let cell = document.createElement("div");
    cell.classList.add("stat__cell");
    return cell;
}


// Добавляет ячейку на игровое поле
function appendCell(cell) {
    let field = document.getElementById("statField");
    field.appendChild(cell);
}

// Привязывает обработчик клика к каждой костяшке
function loadStats() {
    for (let i = 0; i < stats.length; ++i) {
        let cell = createStatCellNull(); // Создаем пустую ячейку
        // cell.innerHTML = stats[i]
        appendCell(cell);            // Добавляем ячейку на поле
    }
}

loadStats()
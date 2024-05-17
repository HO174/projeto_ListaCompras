document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const tabela = document.getElementById('tabela').getElementsByTagName('tbody')[0];
    const adicionarProdutoBtn = document.getElementById('adicionarProduto');
    const deletarBtn = document.getElementById('deletar');

    let itemCount = 1;

    adicionarProdutoBtn.addEventListener('click', () => {
        itemCount++;
        const newRow = tabela.insertRow();
        
        const cellSelect = newRow.insertCell(0);
        const cellItem = newRow.insertCell(1);
        const cellQuantidade = newRow.insertCell(2);
        const cellProduto = newRow.insertCell(3);

        cellSelect.innerHTML = '<input type="checkbox" class="select-item">';
        cellItem.textContent = itemCount;
        cellQuantidade.innerHTML = '<input type="number" name="quantidade" min="1" required>';
        cellProduto.innerHTML = '<input type="text" name="produto" required>';
    });

    deletarBtn.addEventListener('click', () => {
        const checkboxes = document.querySelectorAll('.select-item');
        checkboxes.forEach((checkbox, index) => {
            if (checkbox.checked) {
                tabela.deleteRow(index);
                itemCount--;
            }
        });

        // Renumerar os itens
        const rows = tabela.rows;
        for (let i = 0; i < rows.length; i++) {
            rows[i].cells[1].textContent = i + 1;
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica para processar os dados do formulário
        alert('Formulário enviado com sucesso!');
    });
});

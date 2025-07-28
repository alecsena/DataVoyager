document.addEventListener('DOMContentLoaded', () => {
    const analyzeBtn = document.getElementById('analyze-btn');
    analyzeBtn.addEventListener('click', () => {
        // Mock data for the widgets
        const summaryData = {
            totalDocs: 1500000,
            uniqueTerms: 25000,
            mostFrequent: 'governo'
        };

        const cirrusData = [
            { text: 'governo', size: 10 },
            { text: 'brasil', size: 9 },
            { text: 'dados', size: 8 },
            { text: 'pesquisa', size: 7 },
            { text: 'análise', size: 6 },
            { text: 'texto', size: 5 },
        ];

        const trendsData = [
            { date: '2025-01', value: 120 },
            { date: '2025-02', value: 150 },
            { date: '2025-03', value: 180 },
            { date: '2025-04', value: 160 },
            { date: '2025-05', value: 200 },
        ];

        const contextsData = [
            'O ...<strong>governo</strong>... anunciou novas medidas para a economia.',
            'A análise de dados do ...<strong>governo</strong>... revelou tendências importantes.',
            'O portal de dados abertos do ...<strong>governo</strong>... foi atualizado.',
        ];

        const collocatesData = [
            { term: 'federal', count: 150 },
            { term: 'aberto', count: 120 },
            { term: 'dados', count: 110 },
        ];

        // Populate widgets with mock data
        document.getElementById('summary-content').innerHTML = `
            <p>Total de Documentos: ${summaryData.totalDocs.toLocaleString()}</p>
            <p>Termos Únicos: ${summaryData.uniqueTerms.toLocaleString()}</p>
            <p>Termo Mais Frequente: ${summaryData.mostFrequent}</p>
        `;

        const cirrusContent = document.getElementById('cirrus-content');
        cirrusContent.innerHTML = '';
        cirrusData.forEach(item => {
            const span = document.createElement('span');
            span.textContent = item.text;
            span.style.fontSize = `${item.size * 4}px`;
            span.style.margin = '5px';
            span.style.cursor = 'pointer';
            span.addEventListener('click', () => {
                alert(`Filtering by "${item.text}"`);
            });
            cirrusContent.appendChild(span);
        });

        const trendsContent = document.getElementById('trends-content');
        trendsContent.innerHTML = '<ul>' + trendsData.map(item => `<li>${item.date}: ${item.value}</li>`).join('') + '</ul>';

        document.getElementById('contexts-content').innerHTML = contextsData.map(item => `<p>${item}</p>`).join('');

        document.getElementById('collocates-content').innerHTML = '<ul>' + collocatesData.map(item => `<li>${item.term} (${item.count})</li>`).join('') + '</ul>';
    });
});

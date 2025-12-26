document.addEventListener('DOMContentLoaded', () => {
    let functionsData = [];
    let favorites = JSON.parse(localStorage.getItem('sql-favorites')) || [];

    const searchInput = document.getElementById('search-input');
    const alphabetBar = document.getElementById('alphabet-bar');
    const favoritesSection = document.getElementById('middle-section');
    const favoritesBody = document.getElementById('favorites-body');
    const accordionContainer = document.getElementById('accordion-container');
    const backToTopBtn = document.getElementById('back-to-top');
    const modal = document.getElementById('function-modal');
    const closeModalBtn = document.querySelector('.close-modal');

    // 1. Initialize Alphabet Bar
    const initAlphabetBar = () => {
        const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        alphabetBar.innerHTML = alphabets.map(char =>
            `<button class="alpha-btn" data-letter="${char}">${char}</button>`
        ).join('');

        alphabetBar.addEventListener('click', (e) => {
            if (e.target.classList.contains('alpha-btn')) {
                const letter = e.target.getAttribute('data-letter');
                scrollToLetter(letter);
            }
        });
    };

    // 2. Fetch Data
    const fetchData = () => {
        if (typeof SQL_FUNCTIONS_DATA !== 'undefined') {
            functionsData = SQL_FUNCTIONS_DATA;
        } else {
            console.error('SQL_FUNCTIONS_DATA missing');
            functionsData = [];
        }
        renderLists();
    };

    // 3. Render Lists
    const renderLists = (filteredData = functionsData) => {
        renderAllFunctions(filteredData);
        renderFavorites();
    };

    const renderAllFunctions = (data) => {
        accordionContainer.innerHTML = '';

        // Group by category
        const categories = {};
        data.forEach(f => {
            if (!categories[f.category]) categories[f.category] = [];
            categories[f.category].push(f);
        });

        for (const [catName, catFuncs] of Object.entries(categories)) {
            const item = document.createElement('div');
            item.className = 'accordion-item active'; // Expand by default

            const header = document.createElement('div');
            header.className = 'accordion-header';
            header.innerHTML = `<h3>${catName}</h3><span class="accordion-indicator">▼</span>`;

            const content = document.createElement('div');
            content.className = 'accordion-content';

            if (catName === 'PostgreSQL 함수') {
                // Nested categorization
                const subCats = {};
                catFuncs.forEach(f => {
                    if (!subCats[f.sub_category]) subCats[f.sub_category] = [];
                    subCats[f.sub_category].push(f);
                });

                for (const [subName, subFuncs] of Object.entries(subCats)) {
                    const subItem = document.createElement('div');
                    subItem.className = 'sub-category active';

                    const subHeader = document.createElement('div');
                    subHeader.className = 'sub-header';
                    subHeader.innerHTML = `<span>${subName}</span><span class="accordion-indicator">▼</span>`;

                    const subContent = document.createElement('div');
                    subContent.className = 'sub-content';
                    subContent.appendChild(createTable(subFuncs));

                    subHeader.addEventListener('click', () => {
                        subItem.classList.toggle('active');
                    });

                    subItem.appendChild(subHeader);
                    subItem.appendChild(subContent);
                    content.appendChild(subItem);
                }
            } else {
                content.appendChild(createTable(catFuncs));
            }

            header.addEventListener('click', () => {
                item.classList.toggle('active');
            });

            item.appendChild(header);
            item.appendChild(content);
            accordionContainer.appendChild(item);
        }
    };

    const createTable = (funcs) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'table-wrapper';
        const table = document.createElement('table');
        table.innerHTML = `
            <thead>
                <tr>
                    <th>No.</th>
                    <th>⭐</th>
                    <th>함수명</th>
                    <th>기능 설명</th>
                </tr>
            </thead>
            <tbody></tbody>
        `;
        const tbody = table.querySelector('tbody');
        funcs.forEach((func, idx) => {
            const isFav = favorites.includes(func.id);
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${idx + 1}</td>
                <td>
                    <button class="star-btn ${isFav ? 'active' : ''}" data-id="${func.id}">
                        ${isFav ? '★' : '☆'}
                    </button>
                </td>
                <td><a class="func-link" data-id="${func.id}">${func.name}</a></td>
                <td>${func.description}</td>
            `;
            tbody.appendChild(row);
        });
        wrapper.appendChild(table);
        return wrapper;
    };

    const renderFavorites = () => {
        const favData = functionsData.filter(f => favorites.includes(f.id));
        // Sort favorites alphabetically
        favData.sort((a, b) => a.name.localeCompare(b.name));

        if (favData.length === 0) {
            favoritesSection.classList.add('hidden');
            return;
        }

        favoritesSection.classList.remove('hidden');
        favoritesBody.innerHTML = '';
        favData.forEach((func, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>
                    <button class="star-btn active" data-id="${func.id}">★</button>
                </td>
                <td><a class="func-link" data-id="${func.id}">${func.name}</a></td>
                <td>${func.description}</td>
            `;
            favoritesBody.appendChild(row);
        });
    };

    // 4. Search Functionality
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = functionsData.filter(f =>
            f.name.toLowerCase().includes(term) ||
            f.description.toLowerCase().includes(term)
        );
        renderAllFunctions(filtered);
    });

    // 4.1 Clear Search
    const clearSearchBtn = document.getElementById('clear-search');
    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        renderAllFunctions(functionsData);
        searchInput.focus();
    });

    // 5. Favorites Toggle
    document.addEventListener('click', (e) => {
        const starBtn = e.target.closest('.star-btn');
        if (starBtn) {
            const id = parseInt(starBtn.getAttribute('data-id'));
            if (favorites.includes(id)) {
                favorites = favorites.filter(favId => favId !== id);
            } else {
                favorites.push(id);
            }
            localStorage.setItem('sql-favorites', JSON.stringify(favorites));
            renderLists();
        }

        const funcLink = e.target.closest('.func-link');
        if (funcLink) {
            const id = parseInt(funcLink.getAttribute('data-id'));
            showModal(id);
        }
    });

    // 6. Modal Logic
    const highlightSQL = (text) => {
        if (!text) return '';
        const keywords = ['SELECT', 'FROM', 'WHERE', 'GROUP BY', 'ORDER BY', 'OVER', 'AS', 'AND', 'OR', 'WHEN', 'THEN', 'ELSE', 'END', 'CASE', 'IN', 'LISTAGG', 'TABLE'];
        let highlighted = text;

        // Keywords
        keywords.forEach(kw => {
            const regex = new RegExp(`\\b${kw}\\b`, 'g');
            highlighted = highlighted.replace(regex, `<span class="hl-keyword">${kw}</span>`);
        });

        // Functions (Word followed by parenthesis)
        highlighted = highlighted.replace(/(\w+)(?=\()/g, '<span class="hl-func">$1</span>');

        // Strings
        highlighted = highlighted.replace(/'([^']*)'/g, '<span class="hl-string">\'$1\'</span>');

        return highlighted;
    };

    const formatResult = (result) => {
        if (!result) return '';
        // Simple markdown table parser for example_result
        if (result.trim().startsWith('|')) {
            const lines = result.trim().split('\n').filter(l => l.trim() !== '');
            let html = '<div class="table-wrapper"><table class="result-table"><thead>';

            let headerProcessed = false;
            lines.forEach((line) => {
                if (line.includes('---')) return; // Skip separator

                const cells = line.split('|').map(c => c.trim()).filter((c, idx, arr) => {
                    // Filter out empty strings at start and end of row
                    return !((idx === 0 || idx === arr.length - 1) && c === '');
                });

                if (!headerProcessed) {
                    html += '<tr>' + cells.map(c => `<th>${c}</th>`).join('') + '</tr></thead><tbody>';
                    headerProcessed = true;
                } else {
                    html += '<tr>' + cells.map(c => `<td>${c}</td>`).join('') + '</tr>';
                }
            });
            html += '</tbody></table></div>';
            return html;
        }
        return `<p>${result}</p>`;
    };

    const showModal = (id) => {
        const func = functionsData.find(f => f.id === id);
        if (!func) return;

        document.getElementById('modal-title').textContent = `${func.name} 상세 정보`;
        document.getElementById('modal-desc').textContent = func.description;
        document.getElementById('example-query').innerHTML = highlightSQL(func.example_query);
        document.getElementById('example-result').innerHTML = formatResult(func.example_result);

        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scroll
    };

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    closeModalBtn.addEventListener('click', closeModal);

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // 7. Alphabet Navigation
    const scrollToLetter = (letter) => {
        const allLinks = Array.from(accordionContainer.querySelectorAll('.func-link'));
        const firstFunc = allLinks.find(link => {
            const name = link.textContent.trim();
            return name.toUpperCase().startsWith(letter);
        });

        if (firstFunc) {
            // Expand parents if collapsed
            let parent = firstFunc.closest('.sub-category');
            if (parent) parent.classList.add('active');

            let topParent = firstFunc.closest('.accordion-item');
            if (topParent) topParent.classList.add('active');

            const offset = 180; // Increased: account for sticky header + accordion header
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = firstFunc.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    // 8. Back to Top
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.opacity = '1';
        } else {
            backToTopBtn.style.opacity = '0';
        }
    });

    // Initialize
    initAlphabetBar();
    fetchData();
});

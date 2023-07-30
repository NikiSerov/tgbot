Telegram.WebApp.ready();
Telegram.WebApp.expand();

Telegram.WebApp.MainButton.setText('Мой заказ').show().onClick(function () {
    const data = "DOROWA BANDIT"
    Telegram.WebApp.sendData(data);
    Telegram.WebApp.close();
});


Telegram.WebApp.BackButton.isVisible(true);
Telegram.WebApp.BackButton.show();

const products = [
    {
        name: '1800х450х450 IP31 без бок панелей RAL7035',
        price: '13.900',
        id: 'product1'
    },
    {
        name: '1800х600х450 IP31 без бок панелей RAL7035',
        price: '14.600',
        id: 'product2'
    },
    {
        name: '1800х800х450 IP31 без бок панелей RAL7035',
        price: '14.800',
        id: 'product3'
    },
    {
        name: '1800х1000х450 IP31 без бок панелей RAL7035',
        price: '15.800',
        id: 'product4'
    },
    {
        name: '2000х450х450 IP31 без бок панелей RAL7035',
        price: '15.100',
        id: 'product5'
    },
    {
        name: '2000х600х600 IP31 без бок панелей RAL7035',
        price: '16.700',
        id: 'product6'
    },
    {
        name: '2000х600х450 IP31 без бок панелей RAL7035',
        price: '15.900',
        id: 'product7'
    },
    {
        name: '2000х800х600 IP31 без бок панелей RAL7035',
        price: '18.560',
        id: 'product8'
    },
    {
        name: '2000х800х450 IP31 без бок панелей RAL7035',
        price: '17.840',
        id: 'product9'
    },
    {
        name: '2000х1000х450. IP31 без бок панелей RAL7035',
        price: '18.900',
        id: 'product10'
    },
    {
        name: '1800х450х450. IP54 без бок панелей RAL7035',
        price: '15.900',
        id: 'product11'
    },
    {
        name: '1800х600х450. IP54 без бок панелей RAL7035',
        price: '16.700',
        id: 'product12'
    },
    {
        name: '1800х800х450. IP54 без бок панелей RAL7035',
        price: '17.400',
        id: 'product13'
    },
    {
        name: '1800х1000х450. IP54 без бок панелей RAL7035',
        price: '19.500',
        id: 'product14'
    },
    {
        name: '2000х450х450. IP54 без бок панелей RAL7035',
        price: '16.900',
        id: 'product15'
    },
    {
        name: '2000х600х450. IP54 без бок панелей RAL7035',
        price: '17.900',
        id: 'product16'
    },
    {
        name: '2000х800х450. IP54 без бок панелей RAL7035',
        price: '18.400',
        id: 'product17'
    },
    {
        name: '2000х1000х450. IP54 без бок панелей RAL7035',
        price: '19.600',
        id: 'product18'
    },
    {
        name: '2000х1000х600. IP54 без бок панелей RAL7035',
        price: '20.900',
        id: 'product19'
    }
]


const createCardHTML = ({id, name, price}) => {
    return `<div class="card" id="${id}">
    <div class="card-image-wrapper">
        <img class="card-image" src="https://i.ibb.co/87MgLXd/shkaf.webp" alt="shkaf" />
    </div>
    <div class="card-main">
        <h2 class="card-name">${name}</h2>
        <span class="card-price">${price}₽</span>
    </div>
    <div class="card-foot">
        <button class="add-btn" data-id="${id}">Добавить</button>
    </div>
</div>`;
}

// LS - localStorage

const setProductInLS = (id) => {
    const product = products.find(product => product.id === id);
    const ls = localStorage.getItem('card');
    
    if (ls) {
        const localCard = JSON.parse(ls);
        const newLocalCard = JSON.stringify([...localCard, product]);
        localStorage.setItem('card', newLocalCard)
    } else {
        const localCard = JSON.stringify([product]);
        localStorage.setItem('card', localCard)
    }
}

const removeProductFromLS = (id) => {
    const localCard = JSON.parse(localStorage.getItem('card'));
    const newLocalCard = localCard.filter(product => product.id !== id);
    localStorage.setItem('card', JSON.stringify(newLocalCard));
}

const handleAddClick = (e) => {
   const btn = e.target;
   const id = btn.getAttribute('data-id');
   Telegram.WebApp.selectionChanged();

   if (btn.classList.contains('remove')) {
        removeProductFromLS(id);
        btn.classList.add('animateClick');
        btn.classList.remove('remove');
        btn.textContent = 'Добавить';
        setTimeout(() => {
            btn.classList.remove('animateClick')
        }, 310);
   } else {
        setProductInLS(id)
        btn.classList.add('remove', 'animateClick');
        btn.textContent = 'Убрать';
        setTimeout(() => {
            btn.classList.remove('animateClick')
        }, 310);
   }
}

const renderCards = async () => {
    const cardsContainer = document.querySelector('.cards-container');
    const cardsHTML = await products.reduce((acc, cv) => {
        return acc + createCardHTML({...cv});
    }, '');

    cardsContainer.innerHTML = cardsHTML;

    const addBtns = document.querySelectorAll(".add-btn");
    
    addBtns.forEach((btn) => {
        btn.addEventListener('click', handleAddClick);
    });
}

renderCards();
Telegram.WebApp.ready();
Telegram.WebApp.expand();

Telegram.WebApp.MainButton.setText('Мой заказ').show().onClick(function () {
    const data = "DOROWA BANDIT"
    Telegram.WebApp.sendData(data);
    Telegram.WebApp.close();
});


Telegram.WebApp.BackButton.isVisible(true);
Telegram.WebApp.BackButton.show();
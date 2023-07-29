Telegram.WebApp.ready();
Telegram.WebApp.MainButton.setText('Мой заказ').show().onClick(function () {
    const data = "DOROWA BANDIT"
    Telegram.WebApp.sendData(data);
    Telegram.WebApp.close();
});
var hay = "1";
function AppViewModel() {

    this.productList= ['Тёмная материя', 'Сингулярность концентрированная', 'Базоновый экстракт',
    'Дейтерий обогащенный', 'Нейтрино'];

    this.selectedProduct= ko.observable();

    this.fullName = ko.computed(function() {
        return this.selectedProduct() + "123";
    }, this);

    this.unitOfMeasure = "кг";

    this.choosingProduct = function () {
        console.log(this.selectedProduct())
    }
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());
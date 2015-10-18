// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {
    this.productName = ko.observable("Выберите товар ... ");
    this.choosingDarkmatter = function() {
        console.log(1)
        var currentVal = this.productName();        // Read the current value
        this.productName("Тёмная материя "); // Write back a modified value
    };
    this.choosingSingularity = function() {
        console.log(1)
        var currentVal = this.productName();        // Read the current value
        this.productName("Сингулярность концентрированная "); // Write back a modified value
    };
    this.choosingExtract = function() {
        console.log(1)
        var currentVal = this.productName();        // Read the current value
        this.productName("Базоновый экстракт "); // Write back a modified value
    };
    this.choosingDeuterium = function() {
        console.log(1)
        var currentVal = this.productName();        // Read the current value
        this.productName("Дейтерий обогощный "); // Write back a modified value
    };
    this.choosingNeutrino = function() {
        console.log(1)
        var currentVal = this.productName();        // Read the current value
        this.productName("Нейтрино "); // Write back a modified value
    };

}

// Activates knockout.js
ko.applyBindings(new AppViewModel());
function AppViewModel() {

    this.productList= ['Тёмная материя', 'Сингулярность концентрированная', 'Базоновый экстракт',
    'Дейтерий обогащенный', 'Нейтрино'];

    this.selectedProduct= ko.observable();

    this.fullName = ko.computed(function() {
        return this.selectedProduct() + "123";
    }, this);

    this.unitOfMeasure = ko.observable("гр");
    this.productCost = ko.observable(0);
    this.productCostShow = ko.observable("0 р");
    this.productAmount = ko.observable(1);

    this.productSum = ko.computed(function () {
        return this.productCost() * this.productAmount() + " р";
    }, this);

    this.initAlert = function () {
        $(".alert").removeClass("hidden").show();
        $(".alert").addClass("block").show();
    };
    this.closeAlert = function () {
        $(".alert").addClass("hidden").show();
        $(".alert").removeClass("block").show();
    }
    this.choosingProduct = function () {

        if(this.selectedProduct() == this.productList[0]){
            this.unitOfMeasure("гр");
            this.productAmount(1);
            this.productCost(690);
            this.productCostShow(this.productCost() + " р");
        }

        if(this.selectedProduct() == this.productList[1]) {
            this.unitOfMeasure("мл");
            this.productAmount(1);
            this.productCost(666);
            this.productCostShow(this.productCost() + " р");
        }

        if(this.selectedProduct() == this.productList[2]){
            this.unitOfMeasure("мл");
            this.productAmount(1);
            this.productCost(40);
            this.productCostShow(this.productCost() + " р");
        }

        if(this.selectedProduct() == this.productList[3]){
            this.unitOfMeasure("мг");
            this.productAmount(1);
            this.productCost(9990);
            this.productCostShow(this.productCost() + " р");
        }

        if(this.selectedProduct() == this.productList[4]){
            this.unitOfMeasure("шт");
            this.productAmount(1);
            this.productCost(1);
            this.productCostShow(this.productCost() + " р");
        }
    };
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());

/*
 if (!isNaN(this.productAmount())){
 console.log("yes")
 }else{
 console.log("no");
 console.log(this.productAmount());
 }
 */
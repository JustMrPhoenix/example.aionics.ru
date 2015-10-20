function AppViewModel() {

    this.productList= ['Тёмная материя', 'Сингулярность концентрированная', 'Базоновый экстракт',
    'Дейтерий обогащенный', 'Нейтрино'];

    this.selectedProduct= ko.observable("");

    this.fullName = ko.computed(function() {
        return this.selectedProduct() + "123";
    }, this);

    this.unitOfMeasure = ko.observable("гр");
    this.productCost = ko.observable(0);
    this.productCostShow = ko.observable("0 р");
    this.productAmount = ko.observable(1);
    this.productAmountIsSelected = ko.observable(false);
    this.alertText = ko.observable("Неизвестная ошибка");

    this.adressCountry = ko.observable("");
    this.adressIndex = ko.observable("");
    this.adressRegion = ko.observable("");
    this.adressCity = ko.observable("");
    this.adressStreet = ko.observable("");
    this.adressHouse = ko.observable("");
    this.adressApartment = ko.observable("");


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

    this.productAmountlostSel = function() {
        if (!isNaN(this.productAmount())){
            console.log("yes")
        }else{
            console.log("no");
            this.alertText("Неверно указано количество")
            this.initAlert();
            this.productAmount(1)
        }
    };

    this.chosenProduct = ko.computed(function(){
        return this.selectedProduct() + " "  + this.productAmount() + this.unitOfMeasure();
    }, this);

    this.adress = ko.computed(function(){
        var tempIndex;
        var tempCountry;
        var tempRegion;
        var tempCity;
        var tempStreet;
        var tempHouse;
        var tempApartment;

        if( this.adressIndex() ) {tempIndex = this.adressIndex()+", "}  else {tempIndex = ""}
        if( this.adressCountry() ) {tempCountry = this.adressCountry()+", "}  else {tempCountry = ""}
        if( this.adressRegion() ) {tempRegion = this.adressRegion()+", "}  else {tempRegion = ""}
        if( this.adressCity() ) {tempCity = "г." + this.adressCity()+", "}  else {tempCity = ""}
        if( this.adressStreet() ) {tempStreet = "ул." + this.adressStreet()+", "}  else {tempStreet = ""}
        if( this.adressHouse() ) {tempHouse = "№" + this.adressHouse()+"-"}  else {tempHouse = ""}
        if( this.adressApartment() ) {tempApartment = this.adressApartment()}  else {tempApartment = ""}

        return tempIndex + tempCountry + tempRegion + tempCity + tempStreet + tempHouse + tempApartment;
    }, this);

}

// Activates knockout.js
ko.applyBindings(new AppViewModel());

/*

 */
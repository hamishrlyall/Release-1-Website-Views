function Postcard(pSoldierID) {

    // this will need to be replaced with an api call based on the soldeier id passed in
    this.json = '{"postcard":[' +
        '{"name":"Charles Lilley", "born":"3 January 1901 Tocumwal, NSW", "fate": "Returned to Australia 1 November, Died 16 June 1982, Heidelberg", "service": "Field Artillery Brigade 8, Battery 29" }]}';

    obj = JSON.parse(this.json);

    this.id = pSoldierID;
    this.name = obj.Postcard[0].name;
    this.born = obj.postcard[0].born;
    this.fate = obj.postcard[0].fate;
    this.service = obj.postcard[0].service;

    // example of a method in a javascript prototype
    //this.doSomething = function () { };

}
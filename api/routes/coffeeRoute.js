"use strict";

import { CoffeeController as coffee, } from "../controllers/coffeeController";

const CoffeeRoute = (app) => {

    app.route("/coffee").get(coffee.listAllCoffees);

    app.route("/coffee").post(coffee.createCoffee);

    app.route("/coffee/:coffeeId").get(coffee.readCoffee);

    app.route("/coffee/:coffeeId").put(coffee.updateCoffee);

    app.route("/coffee/:coffeeId").delete(coffee.deleteCoffee);

};

export default CoffeeRoute;

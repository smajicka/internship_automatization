import { ElementLocator } from "../element-locator";

export class ProductPage{

    itemImage = new ElementLocator("id", "image-block");
    addToCart = new ElementLocator ("name", "Submit");
    minusButton = new ElementLocator ("class", "btn btn-default button-minus product_quantity_down");
    plusButton = new ElementLocator ("class", "btn btn-default button-plus product_quantity_up");
}
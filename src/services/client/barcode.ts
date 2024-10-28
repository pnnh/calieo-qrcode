import JsBarcode from "jsbarcode";

export function textToBarCode(domSelector: string, text: string) {
    JsBarcode(domSelector, text);
}

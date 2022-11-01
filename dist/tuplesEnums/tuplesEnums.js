"use strict";
let rgbColor = [255, 255, 255];
const goodResp = [200, "OK"];
// goodResp[0]="200"
goodResp.push(123);
const reponses = [
    [200, "ok"],
    [404, "Not found"],
];
// Enums
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 2] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 3] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
const myStatus = OrderStatus.DELIVERED;
function isDelivered(status) {
    return status === OrderStatus.DELIVERED;
}
isDelivered(myStatus);
isDelivered(OrderStatus.RETURNED);
var ArrowKeys;
(function (ArrowKeys) {
    ArrowKeys["UP"] = "UP";
    ArrowKeys["DOWN"] = "DOWN";
    ArrowKeys["LEFT"] = "LEFT";
    ArrowKeys["RIGHT"] = "RIGHT";
})(ArrowKeys || (ArrowKeys = {}));
let move = "UP";
if (move === ArrowKeys.LEFT) {
    console.log(true);
}

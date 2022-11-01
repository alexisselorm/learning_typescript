let rgbColor: [number, number, number] = [255, 255, 255];

type HTTPResponse = [number, string];

const goodResp: HTTPResponse = [200, "OK"];
// goodResp[0]="200"
goodResp.push(123);

const reponses: HTTPResponse[] = [
  [200, "ok"],
  [404, "Not found"],
];

// Enums
enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}
const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}
isDelivered(myStatus);
isDelivered(OrderStatus.RETURNED);

enum ArrowKeys {
  UP = "UP",
  DOWN = "DOWN",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}

let move = "UP";
if (move === ArrowKeys.LEFT) {
  console.log(true);
}

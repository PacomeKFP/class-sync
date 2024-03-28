import { Socket, io } from "socket.io-client";
import { toast } from "sonner";
import { BidInterface } from "../../../src_old/interfaces/bid";

export class SocketClient {
  static serverURL: string = "http://localhost:3000";
  socket: Socket = io(SocketClient.serverURL);

  constructor() {
    this.socket.on("placing bid", () => {
      toast.info("Un utilisateur est en train de faire une offre");
    });
    this.socket.on("bid placed", (bid) => {
      console.log("bid placed", bid);
    });
    this.socket.on("bid rejected", () => console.log("bid rejected"));
  }

  connect() {
    this.socket = io(SocketClient.serverURL);
  }

  placeBid(lotId: string, userMail: string, amount: number) {
    this.socket.emit("place bid", { lotId, userMail, amount });
  }

  bidPlaced(bid: BidInterface<string>) {
    this.socket.emit("bid placed", bid);
  }
}

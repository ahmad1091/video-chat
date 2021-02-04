const socket = io("/");
const myPerr = new Peer(undefined, {
  host: "/",
  port: "3001",
});
socket.emit("join-room", ROOM_ID, 10);
socket.on("user-onnected", (userId) => {
  console.log(userId);
});

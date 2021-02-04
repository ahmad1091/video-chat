const socket = io("/");

socket.emit("join-room", ROOM_ID, 10);
socket.on("user-onnected", (userId) => {
  console.log(userId);
});

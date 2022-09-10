export default function LikePost(data, id) {
  if (data.reaction < 1) {
    console.log("update_like");
    const url = "https://fb-be.herokuapp.com/post/like/" + id;
    fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    });
  }
}

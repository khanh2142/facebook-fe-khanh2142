export default function UnLikePost(data, id) {
  if (data.reaction >= 1) {
    console.log("delete_like");
    const url = "https://fb-be.herokuapp.com/post/remove/" + id;
    fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    });
  }
}

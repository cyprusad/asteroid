var postsData = [
  {
    title: "I thought of giving a talk about this stuff.",
    author: "Sai Warang",
    url: "http://www.saiwarang.com"
  },
  {
    title: "Meanwhile, elsewhere, people are tackling real problems.",
    author: "Sai Warang",
    url: "http://www.cnn.com"
  },
  {
    title: "I am out of stuff to say. I am so pooped",
    author: "Sai Warang",
    url: "http://localhost:3000"
  },
  {
    title: "We need some diversity of opinion here...",
    author: "Sai Warang",
    url: "http://twitter.com/cyprusad"
  }
];
Template.postsList.helpers({
  posts: postsData
});

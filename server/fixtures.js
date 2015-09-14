if (Posts.find().count() === 0) {
  Posts.insert(
    {
      title: "I thought of giving a talk about this stuff.",
      author: "Sai Warang",
      url: "http://www.saiwarang.com"
    }
  );
  Posts.insert(
    {
      title: "Meanwhile, elsewhere, people are tackling real problems.",
      author: "Sai Warang",
      url: "http://www.cnn.com"
    }
  );
  Posts.insert(
    {
      title: "I am out of stuff to say. I am so pooped",
      author: "Sai Warang",
      url: "http://localhost:3000"
    }
  );
  Posts.insert(
    {
      title: "We need some diversity of opinion here...",
      author: "Sai Warang",
      url: "http://twitter.com/cyprusad"
    }
  );
}

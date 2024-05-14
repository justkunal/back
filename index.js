require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;

const githubData = {
  login: "justkunal",
  id: 97599925,
  node_id: "U_kgDOBdFBtQ",
  avatar_url: "https://avatars.githubusercontent.com/u/97599925?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/justkunal",
  html_url: "https://github.com/justkunal",
  followers_url: "https://api.github.com/users/justkunal/followers",
  following_url:
    "https://api.github.com/users/justkunal/following{/other_user}",
  gists_url: "https://api.github.com/users/justkunal/gists{/gist_id}",
  starred_url: "https://api.github.com/users/justkunal/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/justkunal/subscriptions",
  organizations_url: "https://api.github.com/users/justkunal/orgs",
  repos_url: "https://api.github.com/users/justkunal/repos",
  events_url: "https://api.github.com/users/justkunal/events{/privacy}",
  received_events_url: "https://api.github.com/users/justkunal/received_events",
  type: "User",
  site_admin: false,
  name: "Kunal",
  company: null,
  blog: "",
  location: "New Delhi",
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 29,
  public_gists: 0,
  followers: 2,
  following: 2,
  created_at: "2022-01-12T10:47:49Z",
  updated_at: "2024-05-11T09:41:12Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/login", (req, res) => {
  res.send("<h1>please login</h1>");
});

app.get("/github", (req, res) => {
  res.json({ githubData });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

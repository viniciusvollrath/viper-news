module.exports = (render, model) => render`
<h1>About this site</h1>
<p>
  Hacker News clones are the new TodoMVC.
  <a href="https://svelte-hn.now.sh/">Svelte</a> has one,
  and most you can see here has been forked from it,
  <a href='https://vue-hn.now.sh'>Vue</a> has one,
  <a href='https://next-news.now.sh'>Next</a> has one,
  <a href='https://react-hn.appspot.com'>React</a> and
  <a href='https://preact-hn.appspot.com'>Preact</a> have theirs.
  And now, <strong>viperHTML</strong> has one.
</p>
<p>
  <a href="https://github.com/WebReflection/viperHTML">viperHTML</a> is the isomorphic version of <a href="https://github.com/WebReflection/hyperHTML">hyperHTML</a>,
  a new just-in-time template literals compiler that targets DOM nodes on the client and string interpolations on the server.

  The result is a natural, fast, compact and easy way to create Web apps, offering a solution for your project views.
  It plays well with both vanilla JS and frameworks, and it's widely compatible for boh browsers and servers.
</p>
<p>
  This app is designed to test viperHTML's ideas and see if there are any essential features that we're missing,
  and to act as an example for people looking to build their own viperHTML based apps.
  You can see the <a href='https://github.com/WebReflection/viper-news'>source code</a>.
</p>`;

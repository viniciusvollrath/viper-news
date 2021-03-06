module.exports = (render, model) => render`
<nav>
  <div class='icon'><span>🐍</span></div>
  <ul>${model.stories.map(story => `
    <li>
      <a  class="${model.story === story  ? 'selected' : ''}"
          href="/${story}/1"> ${story === 'job' ? 'jobs' : story} </a>
    </li>
    `).concat(`
    <li class='about'>
      <a  class="${model.story === 'about'  ? 'selected' : ''}"
          href="/about"> about </a>
    </li>
  `)}</ul>
  </ul>
</nav>`;

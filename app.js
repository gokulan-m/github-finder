const titleInput = document.getElementById('titleInput');
const urlInput = document.getElementById('urlInput');
const addBtn = document.getElementById('addBtn');
const linksContainer = document.getElementById('linksContainer');

let links = JSON.parse(localStorage.getItem('myLinks')) || [
  { title: 'GitHub', url: 'https://github.com' },
  { title: 'LinkedIn', url: 'https://linkedin.com' }
];

function renderLinks() {
  linksContainer.innerHTML = '';
  links.forEach((link, index) => {
    const item = document.createElement('div');
    item.className = 'link-item';
    item.innerHTML = `
      <a href="${link.url}" target="_blank">${link.title}</a>
      <button class="del-btn" onclick="deleteLink(${index})">Delete</button>
    `;
    linksContainer.appendChild(item);
  });
  localStorage.setItem('myLinks', JSON.stringify(links));
}

addBtn.addEventListener('click', () => {
  const title = titleInput.value.trim();
  const url = urlInput.value.trim();

  if (!title || !url) {
    alert('Please enter title and URL');
    return;
  }

  links.push({ title, url });
  titleInput.value = '';
  urlInput.value = '';
  renderLinks();
});

window.deleteLink = function(index) {
  links.splice(index, 1);
  renderLinks();
};

renderLinks();
const widget = `<a
id="arii"
href="https://wecare.helloarii.com/e/midtown-website"
onclick="window.open(this.href, 'new', 'width=1280,height=720'); return false;"
>
<div class="arii-button">
  <div class="flex-container">
    <div class="wrapper">
      <img src="https://uploads-ssl.webflow.com/646e756c4526f6fa246bdca4/6525a4bfcbde82f3e02b3ed9_Midtownlogo_White-icon.png" alt="Midtown Logo" width="60px" />
    </div>
    <div class="wrapper">
      <p>Digital Guest</p>
      <p>Experience</p>
    </div>
  </div>
</div>
</a>`;

// Check and see if page is in iFrame
if (window.location == window.parent.location) {
  document.body.innerHTML += widget;
}

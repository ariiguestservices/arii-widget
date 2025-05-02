const widget = `<a
id="arii"
href="https://wecare.helloarii.com/e/vwdemo"
onclick="window.open(this.href, 'new', 'width=1280,height=720'); return false;"
>
<div class="arii-button">
  <div class="flex-container">
    <div class="wrapper">
      <img src="https://cdn.prod.website-files.com/646e756c4526f6fa246bdca4/6474f49c8e3b2665bea7d61b_arii-webclip.png" alt="Arii Logo" width="60px" />
    </div>
    <div class="wrapper">
      <p>Discover The System</p>
  </div>
</div>
</a>`;

// Check and see if page is in iFrame
if (window.location == window.parent.location) {
  document.body.innerHTML += widget;
}

const widget = `<a
id="arii"
href="https://wecare.helloarii.com/e/midtowndemo"
onclick="window.open(this.href, 'new', 'width=1280,height=720'); return false;"
>
<div class="arii-button">
  <div class="flex-container">
    <div class="wrapper">
      <img src="https://uploads-ssl.webflow.com/646e756c4526f6fa246bdca4/64f756c471356c6fdf7d6ebc_Chat-digital-customer-service.svg" alt="chat bubble" width="25px" />
    </div>
    <div class="wrapper">
      <p>Guest Experience</p>
    </div>
  </div>
</div>
</a>`;

document.body.innerHTML += widget;

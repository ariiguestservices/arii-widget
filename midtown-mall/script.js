const widget = `<a
id="arii"
href="https://wecare.helloarii.com/e/midtowndemo"
onclick="window.open(this.href, 'new', 'width=1280,height=720'); return false;"
>
<div class="arii-button">
  <div class="flex-container">
    <div class="wrapper">
      <img src="https://uploads-ssl.webflow.com/646e756c4526f6fa246bdca4/6512fe2d457e6979d96becd4_chat-icon.png" alt="chat bubble" width="25px" />
    </div>
    <div class="wrapper">
      <p>Digital Guest Experience</p>
    </div>
  </div>
</div>
</a>`;

document.body.innerHTML += widget;

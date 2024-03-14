<template>
  <footer id="main-footer" class="footer">
    <div class="content has-text-centered">
      <p>
        Portfolio website made with  <i class="fa-solid fa-heart heart" />  by <a href="https://hugolnx.github.io/">Hugo Roque</a>.
      </p>
      <p>
        Use the <a href="https://github.com/hugolnx/hugolnx.github.io">source code</a> to make your own website.
        <i class="fa-solid fa-smile-wink emoticon" /> <i class="fa-solid fa-thumbs-up emoticon" />
      </p>
    </div>
  </footer>
</template>

<style lang="scss">
@import '../../css/bulma-custom.scss';

#main-footer {
  display: flex;
  flex-flow: column nowrap;
  min-height: 100px;
  align-items: center;
  justify-content: end;
  background-color: $main-footer-background-color;

  .heart {
    color: $danger;
  }

  .emoticon {
    color: $link;
  }
}
</style>

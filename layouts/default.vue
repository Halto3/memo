<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <header>
          <h1>メモ</h1>
        </header>
      </div>
    </div>
    <div class="row">
      <div class="col-md-2 border">
        <p>Sidebar</p>
      </div>
      <div class="col-md-10 border">
        <Nuxt />
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <footer></footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultPage',
}
</script>

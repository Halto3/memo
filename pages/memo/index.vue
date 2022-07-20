<template>
  <div>
    <div class="row">
      <div class="col-md-9">
        <ul class="list-group">
          <li v-for="memo in memos" :key="memo.id" class="list-group-item p-1">
            <button
              type="button"
              class="btn btn-light w-100"
              :value="memo.id"
              @click="moveDetails"
            >
              {{ memo.title }}
            </button>
          </li>
        </ul>
      </div>
      <div class="col-md-3"></div>
    </div>
    <div class="row">
      <div class="col-md-12 d-flex justify-content-end">
        <button type="button" class="btn btn-primary">新規登録</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'MemoIndexPage',
  async asyncData({ $axios }) {
    const memos = await $axios.$get('http://localhost:3000/api/memo/')
    return { memos }
  },
  data(): {
    memos: any
  } {
    return {
      memos: [],
    }
  },
  methods: {
    moveDetails(e) {
      this.$router.push(`/memo/details/${e.target.value}`)
    },
  },
})
</script>

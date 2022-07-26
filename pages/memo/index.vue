<template>
  <div>
    <div class="row memo-list">
      <div class="col-md-12">
        <ul class="list-group">
          <li v-for="memo in memos" :key="memo.id" class="list-group-item p-1">
            <div class="row">
              <div class="col-md-10">
                <button
                  type="button"
                  class="btn btn-light w-100"
                  :value="memo.id"
                  @click="moveDetails"
                >
                  {{ memo.title }}
                </button>
              </div>
              <div class="col-md-2 d-flex justify-content-end">
                <button
                  type="button"
                  class="btn btn-danger"
                  :value="memo.id"
                  @click="deleteMemo"
                >
                  削除
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 d-flex justify-content-end">
        <button type="button" class="btn btn-primary" @click="moveRegister">
          新規登録
        </button>
      </div>
    </div>
    <div
      id="modalDelete"
      class="modal fade"
      tabindex="-1"
      aria-labelledby="modalDeleteLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="modalDeleteLabel" class="modal-title">削除</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p>本当に削除しますか?</p>
          </div>
          <div class="moda-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              閉じる
            </button>
            <button type="button" class="btn btn-danger">削除</button>
          </div>
        </div>
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
    moveRegister(e) {
      this.$router.push('/memo/register/')
    },
    async deleteMemo(e) {
      const result = await this.$axios.post(
        'http://localhost:3000/api/memo/delete',
        {
          id: e.target.value,
        }
      )
      this.memos = result.data
    },
  },
})
</script>

<style scoped>
.memo-list {
  min-height: 350px;
}
</style>

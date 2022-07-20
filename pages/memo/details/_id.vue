<template>
  <div>
    <form>
      <div class="row">
        <div class="col-md-12">
          <p>
            <input
              v-model="memo.title"
              type="text"
              name="title"
              placeholder="メモタイトルを入力してください"
              required="true"
              class="form-control"
            />
          </p>
        </div>
      </div>
      <div class="row mb-1">
        <div class="col-md-12">
          <textarea
            v-model="memo.detail"
            name="detail"
            rows="10"
            cols="50"
            placeholder="メモ詳細を入力してください"
            class="form-control"
          ></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <button type="button" class="btn btn-primary">戻る</button>
        </div>
        <div class="col-md-6"></div>
        <div class="col-md-3 d-flex justify-content-end">
          <button type="button" class="btn btn-primary">更新</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'MemoDetailsIdPage',
  async asyncData({ $axios }) {},
  data() {
    return {
      memo: {
        id: '1',
        title: 'Title1',
        detail: 'Detail1',
      },
    }
  },
})
</script>

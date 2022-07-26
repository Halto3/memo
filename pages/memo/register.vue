<template>
  <div>
    <form>
      <div class="row">
        <div class="col-md-12">
          <input
            v-model="memo.title"
            type="text"
            name="title"
            placeholder="タイトルを入力してください"
            required="true"
            class="form-control"
          />
          <p v-if="hasErrorInTitle" class="text-danger">
            タイトルは32文字以内で入力してください
          </p>
        </div>
      </div>
      <div class="row mb-1">
        <div class="col-md-12">
          <textarea
            v-model="memo.detail"
            name="detail"
            rows="15"
            cols="50"
            placeholder="詳細を入力してください"
            class="form-control"
          ></textarea>
          <p v-if="hasErrorInDetail" class="text-danger">
            詳細は1024文字以内で入力してください
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <button type="button" class="btn btn-primary" @click="backList">
            戻る
          </button>
        </div>
        <div class="col-md-6"></div>
        <div class="col-md-3 d-flex justify-content-end">
          <button
            type="button"
            class="btn btn-primary"
            :disabled="disableRegister"
            @click="registerMemo"
          >
            新規登録
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'MemoRegisterPage',
  data(): {
    memo: any
  } {
    return {
      memo: {},
    }
  },
  computed: {
    hasErrorInTitle() {
      if (this.memo.title != null) {
        return this.memo.title.length > 32
      } else {
        return false
      }
    },
    hasErrorInDetail() {
      if (this.memo.detail != null) {
        return this.memo.detail.length > 1024
      } else {
        return false
      }
    },
    disableRegister() {
      if (this.memo.title != null && this.memo.detail != null) {
        if (this.memo.title.length > 32) {
          return true
        } else if (this.memo.detail.length > 1024) {
          return true
        } else {
          return false
        }
      } else {
        return false
      }
    },
  },
  methods: {
    backList(e) {
      this.$router.push('/memo/')
    },
    async registerMemo(e) {
      const result = await this.$axios.$post(
        'http://localhost:3000/api/memo/register',
        {
          memo: this.memo,
        }
      )

      this.$router.push('/memo/')
    },
  },
})
</script>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { fetching } from './utils'

const router = useRouter()
const pinChecked = ref(true)
const pinCode = ref('')
const pinCodeClone = ref('')

const onSubmit = async () => {
  const form = {
    "pinEnabled": boolToInt(pinChecked),
    "pinCode": pinCode.value,
  }
  console.log(form)
  const result = await fetching('operate_pin=' + JSON.stringify(form) + '&')
};
const onClickLeft = () => router.go(-1)
function boolToInt(v) {
  if (v.value === true)
    return 1
  return 0
}
</script>

<template>
  <div>
    <van-nav-bar :border="false" :fixed="true" :placeholder="true" :safe-area-inset-top="true" title="PIN Setting"
      left-arrow @click-left="onClickLeft" />
    <br />

    <van-cell-group>
      <van-cell center title="PIN Enabled">
        <template #right-icon>
          <van-switch inactive-color="#EEE" v-model="pinChecked" size="24" />
        </template>
      </van-cell>

      <van-field v-model="pinCode" type="digit" label="PIN Code" right-icon="warning-o" placeholder="PIN Code" />
      <van-field v-model="pinCodeClone" type="digit" label="Confirm" right-icon="warning-o"
        placeholder="PIN Code Confirm" />

    </van-cell-group>
    <br />
    <van-button block color="rgba(255,255,255,0.3)" @click="onSubmit">
      Save
    </van-button>
  </div>
</template>

<style lang="less">
</style>

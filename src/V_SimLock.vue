<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router'
import { fetching } from './utils'
import { Dialog } from 'vant';

const router = useRouter()
const simLockCode = ref('')
const get_simlock_status = ref(await fetching('get_simlock_status=1&'))
const remain = ref(get_simlock_status.value.maxTrials - get_simlock_status.value.trials)

const onSubmit = async () => {
  const form = {}
  console.log(form)
  const result = await fetching('unlock_simlock=' + simLockCode + '&')
  if (!result || result?.result != 'ok') {
    Dialog({ message: result?.message || "Very Big Exception" });
    get_simlock_status.value = await fetching('get_simlock_status=1&')
    remain.value = get_simlock_status.value.maxTrials - get_simlock_status.value.trials
    simLockCode.value = ''
    return;
  }
  router.push('/')
};
</script>

<template>
  <div>
    <van-nav-bar :border="false" :fixed="true" :placeholder="true" :safe-area-inset-top="true"
      title="MOBI SimLock Page" />
    <br />

    <van-cell-group inset>
      <van-field label="Unlock Code" :error-message="`Trial Times Remain: ${remain}`" v-model="simLockCode" type="text"
        placeholder="Enter Unlock Code" />
    </van-cell-group>

    <br />
    <van-button block color="#4d68ee" @click="onSubmit">
      Unlock SIM
    </van-button>

  </div>
</template>

<style lang="less">
:root {
  --van-field-placeholder-text-color: rgba(255, 255, 255, 0.3);
}
</style>

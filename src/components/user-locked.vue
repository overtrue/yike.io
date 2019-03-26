<template>
  <div class="box text-center text-danger">
    <h1>
      <account-off-icon />
    </h1> 该账户已被冻结
  </div>
</template>

<script>
import AccountOffIcon from '$icons/AccountOff'
export default {
  name: 'user-locked',
  components: { AccountOffIcon }
}
</script>

<template>
  <div class="flex justify-center">
    <form class="bg-white flex flex-col p-2 w-96 shadow-2xl" @submit.prevent="onSubmit">
      <label for="email" class="p-2 text-left">Email address</label>
      <input
        type="text"
        class="border-2 p-4"
        id="email"
        name="email"
        autocomplete="email"
        v-model="loginForm.email"
      />

      <p v-if="$v.email.$dirty && $v.email.$error" class="mt-1 text-right text-red">
        This field is required
      </p>

      <label for="password" class="p-2 text-left">Password</label>
      <input
        type="password"
        class="border-2 p-4"
        id="password"
        name="password"
        autocomplete="password"
        v-model="loginForm.password"
      />

      <p v-if="$v.password.$dirty && $v.password.$error" class="mt-1 text-right text-red">
        This field is required
      </p>

      <button type="submit" class="bg-green mt-4 p-4 color-white font-medium uppercase">
        Log in
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { login } from '@/services/authentication.service'
import useVuelidate from '@vuelidate/core'
import { email, required } from '@vuelidate/validators'
import { reactive } from 'vue'

interface LoginForm {
  password: string
  email: string
}

const loginForm = reactive<LoginForm>({
  password: '',
  email: ''
})

const rules = {
  email: { required, email, $autoDirty: true },
  password: { required, $autoDirty: true }
}

const $v = useVuelidate<LoginForm>(rules, loginForm)

function onSubmit() {
  $v.value.$touch()

  if ($v.$invalid) {
    return
  }

  login()
}
</script>

<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
            id="email"
            type="text"
            v-model.trim="email"
            :class="{invalid: (email.$dirty && email.required) || (email.email)}"
        >
        <label for="email">Email</label>
        <small
            class="helper-text invalid"
            v-if="(email.$dirty && email.required)"
            >Field Email should not be empty!!!</small>
        <small
            class="helper-text invalid"
            v-else-if="(email.$dirty && email.email)"
        >Enter correct email!!!</small>
      </div>
      <div class="input-field">
        <input
            id="password"
            type="password"
            v-model.trim="password"
            :class="{invalid: (password.$dirty && password.required) || (password.minLength)}"
        >
        <label for="password">Пароль</label>
        <small
            class="helper-text invalid"
            v-if="password.$dirty && password.required"
        >Enter your password!
        </small>
        <small
            class="helper-text invalid"
            v-else-if="password.$dirty && password.minLength"
        >
          The password must be 6 characters, now it is {{password.length}}
        </small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button
            class="btn waves-effect waves-light auth-submit"
            type="submit"
        >
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <router-link to="/register">Зарегистрироваться</router-link>
      </p>
    </div>
  </form>
</template>
<script>

import {email, required, minLength} from '@vuelidate/validators'

export default {
  name: 'login',
  data: () => ({
    email: '',
    password: ''
  }),
  validations: {
    email: {email, required},
    password: {required, minLength: minLength(6)}
  },
  methods: {
    submitHandler() {
       if(this.$invalid){
         this.$touch()
         return
       }
    }
  }
}
</script>
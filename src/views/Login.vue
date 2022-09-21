<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
            id="email"
            type="text"
            v-model.trim="email"
            :class="{invalid: ($emit.email.$dirty && !$emit.email.required) || ($emit.email.email)}"
        >
        <label for="email">Email</label>
        <small
            class="helper-text invalid"
            v-if="($emit.email.$dirty && !$emit.email.required)"
            >Field Email should not be empty!!!</small>
        <small
            class="helper-text invalid"
            v-else-if="($emit.email.$dirty && !$emit.email.email)"
        >Enter correct email!!!</small>
      </div>
      <div class="input-field">
        <input
            id="password"
            type="password"
            v-model.trim="password"
            :class="{invalid: ($emit.password.$dirty && !$emit.password.required) || ($emit.password.minLength)}"
        >
        <label for="password">Пароль</label>
        <small
            class="helper-text invalid"
            v-if="$emit.password.$dirty && !$emit.password.required"
        >Enter your password!
        </small>
        <small
            class="helper-text invalid"
            v-else-if="$emit.password.$dirty && !$emit.password.minLength"
        >
          The password must be {{$emit.password.$params.minLength.min}} characters, now it is {{$emit.password.length}}
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
import messages from '@/utils/messages'

export default {
  name: 'login',
  data: () => ({
    email: '',
    password: '',
    name: '',
    agree: false
  }),
  validations: {
    email: {email, required},
    password: {required, minLength: minLength(6)}
  },
  mounted() {
    if(messages[this.$route].query.message){
      this.$message(messages[this.$route].query.message)
    }
  },
  methods: {
    submitHandler() {
       if(this.$emit.$invalid){
         this.$emit.$touch() //most change
         return
       }
       const formData = {
         email: this.email,
         password: this.password,
         name: this.name //added
       }
    }
  }
}
</script>
<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
            id="email"
            type="text"
            v-model.trim="email"
            :class="{invalid: ($el.email.$dirty && !$el.email.required) || ($el.email.email)}"
        >
        <label for="email">Email</label>
        <small
            class="helper-text invalid"
            v-if="($el.email.$dirty && !$el.email.required)"
            >Field Email should not be empty!!!</small>
        <small
            class="helper-text invalid"
            v-else-if="($el.email.$dirty && !$el.email.email)"
        >Enter correct email!!!</small>
      </div>
      <div class="input-field">
        <input
            id="password"
            type="password"
            v-model.trim="password"
            :class="{invalid: ($el.password.$dirty && !$el.password.required) || ($el.password.minLength)}"
        >
        <label for="password">Пароль</label>
        <small
            class="helper-text invalid"
            v-if="$el.password.$dirty && !$el.password.required"
        >Enter your password!
        </small>
        <small
            class="helper-text invalid"
            v-else-if="$el.password.$dirty && !$el.password.minLength"
        >
          The password must be {{$el.password.$params.minLength.min}} characters, now it is {{$el.password.length}}
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
       if(this.$el.$invalid){
         this.$el.$touch() //most change
         return
       }
       const formData = {
         email: this.email,
         password: this.password
       }
    }
  }
}
</script>
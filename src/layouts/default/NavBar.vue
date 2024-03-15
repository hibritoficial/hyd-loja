<template>
  <v-app-bar height="74" class="bg-white">

    <v-row class="align-center d-flex justify-space-between">
      <v-col cols="4" sm="3" md="2" class="pl-5">
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn color="sentenary" v-bind="props" icon="mdi-menu">
            </v-btn>
          </template>
          <v-list>
            <v-list-item class="text-sentenary" :href="item.click" @click="redirecionarPara(item)" v-for="(item, index) in itemsMobile"
              :key="index" :value="index">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>

      <v-col cols="4" sm="3" md="2">
        <div class="d-flex">
          <v-img src="/logohydro.png" min-width="68" max-width="68" :class="smAndDown ? 'mr-2' : 'ml-12 mr-5'" />
          <v-img src="/logoleudo.png" min-width="68" max-width="68" />
        </div>
      </v-col>
     

      <v-col cols="4" sm="3" md="2" align="right" class="pr-5">
        <v-dialog width="500">
          <template v-slot:activator="{ props }">
            <v-btn icon="mdi-account-circle" color="sentenary" v-bind="props"></v-btn>
          </template>
          <template v-slot:default="{ isActive }">
            <v-card title="Cadastrar-se">
              <v-card-text>
                <v-form v-model="valid">
                  <v-container>
                    <v-row>
                      <v-col cols="12" md="11">
                        <v-text-field v-model="nome" :rules="nomeRules" label="Nome" color="secondary"
                          hint="Informe seu nome" prepend-icon="mdi-account-circle-outline"></v-text-field>
                      </v-col>

                      <v-col cols="12" md="11">
                        <v-text-field v-model="Email" :rules="emailRules" label="Email" placeholder="email@email.com.br"
                          hint="Informe seu E-mail" color="green" prepend-icon="mdi-email"></v-text-field>
                      </v-col>

                      <v-col cols="12" md="11">
                        <v-text-field v-model="Senha" :rules="senhaRules" label="Senha" color="secondary"
                          hint="Informe sua senha" prepend-icon="mdi-form-textbox-password"></v-text-field>
                      </v-col>

                      <v-col cols="12" md="11">
                        <v-text-field v-model="RepitirSenha" :rules="repitirsenhaRules" label="Repitir Senha"
                          color="secondary" hint="Informe sua senha novamente"
                          prepend-icon="mdi-form-textbox-password"></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                  <v-checkbox v-model="checkbox" class="font2"
                    label="Li e concordo com os Termos de Uso e Política de Privacidade." required></v-checkbox>
                </v-form>

                <v-card-actions class="d-flex justify-center">
                  <v-btn class="bg-sentenary rounded-pill w-100" text="Cadastrar" @click="isActive.value = false"></v-btn>
                </v-card-actions>
              </v-card-text>
            </v-card>
          </template>
        </v-dialog>

        
            <v-btn icon="mdi-shopping-outline" color="sentenary" v-bind="props" text="Open Dialog"> </v-btn>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<style scoped>
.font {
  font-family: 'Plus Jakarta Sans', sans-serif;
  opacity: 0.8;
  font-size: 11px;
}
</style>

<script setup>
import { useDisplay } from 'vuetify';
import { ref } from 'vue';


const { smAndDown } = useDisplay()
const checkbox = ref(false);
const valid = ref(false);

const itemsMobile = [
  { title: 'O Produto', click: '#oproduto' },
  { title: 'Linha Sais', click: '#linhasais' },
  { title: 'Linha Liquidos', click: '#linhaliquidos' }
]




const nome = ref('');
const nomeRules = ref([
  value => {
    if (value) return true;
    return 'É necessário inserir um Nome.';
  },
  value => {
    if (value?.length <= 50) return true;
    return 'Insira um nome de no minimo 3 letras.';
  },
]);

const Email = ref('');
const emailRules = ref([
  value => {
    if (value) return true;
    return 'É necessário inserir um E-mail.';
  },
  value => {
    if (/.+@.+\..+/.test(value)) return true;
    return 'E-mail deve ser válido.';
  },
]);

const Senha = ref('');
const senhaRules = ref([
  value => {
    if (value) return true;
    return 'É necessário inserir uma Senha.';
  },
  value => {
    if (/.+@.+\..+/.test(value)) return true;
    return 'A senha deve ser válida.';
  },
]);

const RepitirSenha = ref('');
const repitirsenhaRules = ref([
  value => {
    if (value) return true;
    return 'É necessário repitir a Senha.';
  },
  value => {
    if (/.+@.+\..+/.test(value)) return true;
    return 'A senha deve ser válida.';
  },
]);
</script>

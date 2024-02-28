<template>
  <v-app-bar height="70" class="bg-white">

    <v-row class="align-center d-flex justify-space-between">
      <v-col cols="2" md="4" lg="4" class="d-none d-lg-block align-right pl-10">
        <v-btn href="#linhasais" color="sentenary" class="font font-weight-bold rounded-pill bg-white"
          style="border-width: 2px; border-color: #E457AF;">Linha Sais</v-btn>

        <v-btn href="#linhaliquidos" color="sentenary" class="font font-weight-bold rounded-pill mx-8 bg-white"
          style="border-width: 2px; border-color: #E457AF;">Linha Liquidos</v-btn>

        <v-btn href="#oproduto" color="sentenary" class="font font-weight-bold rounded-pill bg-white"
          style="border-width: 2px; border-color: #E457AF;">O
          PRODUTO</v-btn>
      </v-col>

      <v-col cols="4" sm="5" class="pl-5 d-lg-none">
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn color="blue" v-bind="props" icon="mdi-menu">
            </v-btn>
          </template>
          <v-list>
            <v-list-item :href="item.click" @click="redirecionarPara(item)" v-for="(item, index) in itemsMobile"
              :key="index" :value="index">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>

      <v-col cols="4" sm="" lg="5" >
        <v-img src="/logohydro.png" max-width="100" :class="smAndDown ? '' : 'ml-12'" />
      </v-col>

      <v-col cols="4" sm="2" lg="1">
        <v-dialog width="500">
          <template v-slot:activator="{ props }">
            <v-btn icon="mdi-account-circle" color="blue" v-bind="props"></v-btn>
          </template>
          <template v-slot:default="{ isActive }">
            <v-card title="Cadastrar-Se">
              <v-card-text>
                <v-form v-model="valid">
                  <v-container>
                    <v-row>
                      <v-col cols="12" md="10">
                        <v-text-field v-model="nome" :rules="nomeRules" label="Nome" color="secondary"
                          hint="Informe seu nome" prepend-icon="mdi-account-circle-outline"></v-text-field>
                      </v-col>

                      <v-col cols="12" md="10">
                        <v-text-field v-model="Email" :rules="emailRules" label="Email" placeholder="email@email.com.br"
                          hint="Informe seu E-mail" color="green" prepend-icon="mdi-email"></v-text-field>
                      </v-col>

                      <v-col cols="12" md="10">
                        <v-text-field v-model="Senha" :rules="senhaRules" label="Senha" color="secondary"
                          hint="Informe sua senha" prepend-icon="mdi-form-textbox-password"></v-text-field>
                      </v-col>

                      <v-col cols="12" md="10">
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

        <v-dialog width="500">
          <template v-slot:activator="{ props }">
            <v-btn icon="mdi-shopping-outline" color="blue" v-bind="props" text="Open Dialog"> </v-btn>
          </template>
          <template v-slot:default="{ isActive }">
            <v-card title="CARRINHO DE COMPRAS" class="bg-black">
              <v-card-text>
                <v-chip class="d-flex justify-center align-center">O carrinho de compras está vazio.</v-chip>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="bg-primary" text="Fechar" @click="isActive.value = false"></v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
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

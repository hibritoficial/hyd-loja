<template>
  <v-app class="bg-quartiary">
    <NavBar />
    <SobreVue />

    <div id="linhasais" class="font mt-16" align="center">
      <h2 class="fontrosas">LINHA SAIS</h2>
    </div>

    <v-row class="d-flex mt-16 w-100 mx-0 mb-16">
      <v-col cols="12" sm="6" md="3" align="center">
        <v-card max-width="300" class="elevation-24 pb-4" align="center">
          <v-img src="/floraçao.jpg" height="300px" cover></v-img>

          <v-card-title>
          Floração e Caudex
          </v-card-title>

          <v-card-subtitle>
            <h2>R$ 00,00</h2>
          </v-card-subtitle>
          
          <div class="mt-8 d-flex justify-space-between px-4">
          <v-btn class="elevation-24 bg-secondary">COMPRAR</v-btn>
          <v-btn class="elevation-24 bg-terciary">DESCRIÇÃO</v-btn>
        </div>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="3" align="center">
        <v-card max-width="300" class="elevation-24 pb-4" align="center">
          <v-img src="/crescimento.jpg" height="300px" cover></v-img>

          <v-card-title>
            Crescimento e Caudex
          </v-card-title>

          <v-card-subtitle>
            <h2>R$ 00,00</h2>
          </v-card-subtitle>
          
          <div class="mt-8 d-flex justify-space-between px-4">
          <v-btn class="elevation-24 bg-secondary">COMPRAR</v-btn>
          <v-btn class="elevation-24 bg-terciary">DESCRIÇÃO</v-btn>
        </div>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3" align="center">
        <v-card max-width="300" class="elevation-24 pb-4" align="center">
          <v-img src="/bombado.jpg" height="300px" cover></v-img>

          <v-card-title>
            Caudex Bombado
          </v-card-title>

          <v-card-subtitle>
            <h2>R$ 00,00</h2>
          </v-card-subtitle>
          
          <div class="mt-8 d-flex justify-space-between px-4">
          <v-btn class="elevation-24 bg-secondary">COMPRAR</v-btn>
          <v-btn class="elevation-24 bg-terciary">DESCRIÇÃO</v-btn>
        </div>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="3" align="center">
        <v-card max-width="300" class="elevation-24 pb-4" align="center">
          <v-img src="/teste.jpg" height="300px" cover></v-img>

          <v-card-title>
            Caudex Bombado
          </v-card-title>

          <v-card-subtitle>
            <h2>R$ 00,00</h2>
          </v-card-subtitle>
          
          <div class="mt-8 d-flex justify-space-between px-4">
          <v-btn class="elevation-24 bg-secondary">COMPRAR</v-btn>
          <v-btn class="elevation-24 bg-terciary">DESCRIÇÃO</v-btn>
        </div>
        </v-card>
      </v-col>
    </v-row>
 
    
    <OProduto />
    <Linhaliquidos />
  </v-app>
</template>
  
<style scoped>
.fontrosas {
  font-family: "Caveat", cursive;
}
</style>
  
  
<script setup>
import NavBar from './NavBar.vue'
import SobreVue from  './Sobre.vue'
import Linhaliquidos from './Linhaliquidos.vue'
import OProduto from './OProduto.vue' 
import { useDisplay } from 'vuetify';

const { smAndDown } = useDisplay()
</script>
  
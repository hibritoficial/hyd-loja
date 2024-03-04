<template>
  <v-app class="bg-quartiary">
    <NavBar />
    <SobreVue />

    <div id="linhasais" class="font mt-16" align="center">
      <h2 class="fontrosas">LINHA SAIS</h2>
    </div>

    <v-row class="d-flex mt-16 w-100 mx-0 mb-16">
      <v-col cols="12" sm="6" md="4" align="center">
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
            <v-dialog max-width="500">
              <template v-slot:activator="{ props: activatorProps }">
                <v-btn class="elevation-24 bg-terciary" v-bind="activatorProps" color="surface-variant" text="Descrição"
                  variant="flat"></v-btn>
              </template>

              <template v-slot:default="{ isActive }">
                <v-card title="FLORAÇÃO E CAUDEX" class="bg-terciary">
                  <v-card-text>
                    <li>
                      09-38-15+Ca
                    </li>
                    <p class="mt-4">Apresenta máxima eficiência nas adubações, trazendo assim todo o potencial de
                      florações, bulbos
                      e folhas saudáveis e vigorosas, além de fornecer o cálcio, elemento essencial às rosas do
                      deserto.</p>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn class="bg-secondary" text="Voltar" @click="isActive.value = false"></v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
          </div>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="4" align="center">
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
            <v-dialog max-width="500">

              <template v-slot:activator="{ props: activatorProps }">
                <v-btn class="elevation-24 bg-terciary" v-bind="activatorProps" color="surface-variant" text="Descrição"
                  variant="flat"></v-btn>
              </template>

              <template v-slot:default="{ isActive }">
                <v-card title="CRESCIMENTO E CAUDEX" class="bg-terciary">
                  <v-card-text>
                    <li>
                      25-12-13+Mg
                    </li>
                    <p class="mt-4">Máxima eficiência na adubação/fertilização de mudas, pós-replantio, proporcionando
                      todo o potencial de novas vegetações com plantas vigorosas e saudáveis.</p>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn class="bg-secondary" text="Voltar" @click="isActive.value = false"></v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="4" align="center">
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
            <v-dialog max-width="500">

              <template v-slot:activator="{ props: activatorProps }">
                <v-btn class="elevation-24 bg-terciary" v-bind="activatorProps" color="surface-variant" text="Descrição"
                  variant="flat"></v-btn>
              </template>

              <template v-slot:default="{ isActive }">
                <v-card title="CAUDEX BOMBADO" class="bg-terciary">
                  <v-card-text>
                    <li>
                      11-00-43+B
                    </li>
                    <p class="mt-4">Formulação rica em potássio, elemento essencial ao desenvolvimento dos bulbos e
                      aumento da resistência da planta contra a ação de intempéries e pragas. Traz ainda o boro, que
                      proporciona uma rápida absorção do fertilizante, auxiliando a manter os sistemas de condução de
                      seivas com total fluidez.</p>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn class="bg-secondary" text="Voltar" @click="isActive.value = false"></v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
          </div>
        </v-card>
      </v-col>
    </v-row>


    <OProduto />
    <Linhaliquidos />
    <Footer />
  </v-app>
</template>

<style scoped>
.fontrosas {
  font-family: "Caveat", cursive;
}
</style>


<script setup>
import NavBar from './NavBar.vue'
import SobreVue from './Sobre.vue'
import Linhaliquidos from './Linhaliquidos.vue'
import OProduto from './OProduto.vue'
import Footer from './Footer.vue'
import { useDisplay } from 'vuetify';

const { smAndDown } = useDisplay()
</script>
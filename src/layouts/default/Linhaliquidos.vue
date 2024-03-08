<template>
  <v-main>
    <div id="linhaliquidos" class="font mt-8" align="center">
      <h1 class="fontrosas">LINHA LIQUIDOS</h1>
    </div>

    <v-row class="d-flex w-100 mx-0 mt-16 mb-16">
      <v-col cols="12" sm="6" md="4" align="center">
        <v-card max-width="300" class="elevation-24 pb-4" align="center">
          <v-img src="/raiz.jpg" height="300px" cover></v-img>

          <v-card-title>
            Raizes Fortes e Saudáveis
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
                <v-card title="RAIZES FORTES" class="bg-terciary">
                  <v-card-text>
                    <li>
                      Enraizador
                    </li>
                    <p class="mt-4">Produto elaborado com nutrientes especiais, quelatizados em EDDHA, disponibilizando
                      às plantas zinco, ferro, cobalto e molibdênio, possibilitando o enraizamento e fortalecimento das
                      raízes.</p>

                      <p class="mt-5">
                        <v-icon size="x-large">mdi-youtube</v-icon> <a href="https://www.youtube.com/watch?v=YfS16AD0x0M" target="_blank" class="text-secondary">Clique aqui</a> e saiba como usar.
                       </p>
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
          <v-img src="/fwz.jpg" height="300px" cover></v-img>

          <v-card-title>
            Fungicida de Contato FWZ
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
                <v-card title="FUNGICIDA FWZ" class="bg-terciary">
                  <v-card-text>
                    <p class="mt-4">Contém em sua formulação o cobre e o zinco, elementos usados há muito tempo como
                      fungicida/bactericida.</p>

                      <p class="mt-5">
                        <v-icon size="x-large">mdi-youtube</v-icon> <a href="https://www.youtube.com/watch?v=TH4Aj62aNWo" target="_blank" class="text-secondary">Clique aqui</a> e saiba como usar.
                       </p>
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
          <v-img src="/oleoneem.jpg" height="300px" cover></v-img>

          <v-card-title>
            Inseticida Natural
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
                <v-card title="ÓLEO DE NEEM" class="bg-terciary">
                  <v-card-text>
                    <p class="mt-4">Inseticida de contato à base de óleo de neem, produto natural, com ótima
                      funcionalidade no controle das pragas em geral. Age diretamente na superfície das folhas e caules,
                      além da camada abaixo da cutícula.</p>

                      <p class="mt-5">
                        <v-icon size="x-large">mdi-youtube</v-icon> <a href="https://www.youtube.com/watch?v=Ja7_TdmW1dQ" target="_blank" class="text-secondary">Clique aqui</a> e saiba como usar.
                       </p>
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
          <v-img src="/cochonilha.jpg" height="300px" cover></v-img>

          <v-card-title>
            Mata Cochonilhas
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
                <v-card title="MATA COCHONILHAS" class="bg-terciary">
                  <v-card-text>
                    <p class="mt-4">
                      Indicado no combate/controle de cochonilhas.</p>

                      <p class="mt-5">
                        <v-icon size="x-large">mdi-youtube</v-icon> <a href="https://www.youtube.com/watch?v=2PqLENb9evA&t=161s" target="_blank" class="text-secondary">Clique aqui</a> e saiba como usar.
                       </p>
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
          <v-img src="/enxofre.jpg" height="300px" cover></v-img>

          <v-card-title>
            Enxofre
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
                <v-card title="ENXOFRE" class="bg-terciary">
                  <v-card-text>
                    <p class="mt-4">Produto à base de enxofre, excelente para controle de ácaros, oídio e falsa ferrugem.</p>

                    <p class="mt-5">
                      <v-icon size="x-large">mdi-youtube</v-icon> <a href="https://www.youtube.com/watch?v=gx-HOSawmW8" target="_blank" class="text-secondary">Clique aqui</a> e saiba como usar.
                     </p>
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
  </v-main>
</template>

<style scoped>
.fontrosas {
  font-family: "Caveat", cursive;
}
</style>


<script setup>

</script>

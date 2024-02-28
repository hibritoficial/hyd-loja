<template>
    <div class="w-100 mt-16">
        <v-img src="/intro.jpg" cover>
            <div class="intro w-100 h-100 pt-16 pb-16" align="center">
                <h1 class="fontrosas text-sentenary">ROSAS DO DESERTO</h1>
                <h3 class="text-white">FLORIDAS E SAUDÁVEIS</h3>
                <h5 class="text-quintenary">Linha Leudo Júnior</h5>
                <v-btn class="bg-transparent mt-10 text-white rounded-pill" style="border-width: 2px; border-color: #E457AF;;">CONHECER</v-btn>
            </div>
        </v-img>
    </div>
</template>

<style scoped>
.intro {
    background-color: rgba(0, 0, 0, 0.801);
}

.fontrosas {
    font-family: "Caveat", cursive;
}
</style>

<script setup>
import { useDisplay } from 'vuetify';

const { smAndDown } = useDisplay()
</script>
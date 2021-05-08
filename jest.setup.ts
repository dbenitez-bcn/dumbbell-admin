import "reflect-metadata";
import { container } from "./src/core/Container";
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
container
    .unbindAll();
<template>
    <div id="spa">
      <h2>{{ title }}</h2>
      <p id="objectBody">{{ text }}</p>
      <div class="spa_input">
        <div class="id_box">
          <label>ID:</label>
          <input type="number" v-model="id" :min="1" :max="100" :disabled="loading" @input="mostrarElemento">
        </div>
        <div class="contador_box">
          <button @click="loadData" :disabled="loading" class="button" id="cargar">Cargar</button>
          <div class="contador_span">
            <label>Contador:</label>
            <p>{{ counter }}</p>
          </div>
        </div>
      </div>
      <button @click="next" :disabled="loading" class="spa button" id="next">&gt;</button>
      <button @click="previous" :disabled="loading" class="spa button" id="previous">&lt;</button>
    </div>
</template>
  
<script>
import axios from "axios";

export default {
  data() {
    return {
      title: "Título del componente",
      text: "Texto del componente",
      id: 1,
      counter: 0,
      loading: false,
      post: null,
      elemento: 1
    };
  },
  methods: {
    loadData() {
      this.loading = true;
      setTimeout(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          this.posts = response.data; 
          this.counter++;
          this.title = this.posts[1].title;
          this.text = this.posts[1].body;
          this.id = 1;
          this.elemento = 1;
        })
        .catch(error => {
          console.error(error);
        });
        this.loading = false;
      }, 1000);
    },
    next() {
      if (this.posts != null) {
        if (this.id < this.posts.length - 1){
          this.id++;
          this.title = this.posts[this.id].title;
          this.text = this.posts[this.id].body;
          this.elemento = this.id;
        } else {
          console.log("No se puede ir mas alla de 100")
        }
      } else {
        console.log("No se ha hecho un request a la api")
      }
    },
    previous() {
      if (this.posts != null) {
        if (this.id > 1){
          this.id--;
          this.title = this.posts[this.id].title;
          this.text = this.posts[this.id].body;
          this.elemento = this.id;
        } else {
          console.log("No se puede ir mas alla de 1")
        }
      } else {
        console.log("No se ha hecho un request a la api")
      }
    },
    mostrarElemento() {
      if (this.id >= 1 && this.id <= 100) {
        if (this.posts != null) {
          this.title = this.posts[this.id].title;
          this.text = this.posts[this.id].body;
          this.elemento = this.id;
        } else {
          console.log("No se ha hecho un request a la api")
        }
      } else {
        console.log("No se puede ir mas alla de 100 o de 1")
        this.id = this.elemento;
      }
    }
  }
};
</script>

<style src="./MySpa.css" scoped></style>

  
  
  
  
  
  
  
<template>
  <div id="myapp">
     <div class="wrapper">
        <!-- Sidebar  -->
        <nav id="sidebar" v-bind:class="[isActive ? 'active' : 'none']">
            <div class="sidebar-header">
                <img @click="homeTab()" src="./images/Logo-koperasi-plain.png" width="80px" height="60px">
            </div>

            <ul class="list-unstyled components" style="border-bottom:none">
                <li>
                    <a href="#" @click="toggleClass()">  
                        expand
                    </a>
                </li>
                <li>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle" >
                        simpanan
                    </a>
                    <ul class="collapse list-unstyled" id="pageSubmenu">
                        <li>
                            <a @click="simpananTab()" href="#">Home</a>
                        </li>
                        <li>
                            <a @click="pokokTab()" href="#">Pokok</a>
                        </li>
                        <li>
                            <a @click="wajibTab()" href="#">Wajib</a>
                        </li>
                        <li>
                            <a @click="sukarelaTab()" href="#">Sukarela</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a @click="listTab()" href="#">
                        
                        Anggota
                    </a>
                </li>
                <!-- <li>
                    <a @click="formTab()" href="#">   
                        daftar
                    </a>
                </li>
                <li>
                    <a href="#" @click="toggleClass()">  
                        
                    </a>
                </li> -->
            </ul>

           
        </nav>
        <home v-bind:class="[homeActive ? 'hide' : 'none']"/>
        <user-list v-bind:class="[listActive ? 'hide' : 'none']"/>
        <user-form v-bind:class="[formActive ? 'hide' : 'none']"/>
        <simpanan-home v-bind:class="[simpananActive ? 'hide' : 'none']"/>
        <simpanan-pokok v-bind:class="[pokokActive ? 'hide' : 'none']"/>
        <simpanan-wajib v-bind:class="[wajibActive ? 'hide' : 'none']"/>
        <simpanan-sukarela v-bind:class="[sukarelaActive ? 'hide' : 'none']"/>
        <!-- Page Content  -->
        
    </div>
  </div>
</template>

<script>
// function
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// view
import home from "./component/home.vue"
import userList from "./component/list.vue";
import userForm from "./component/form.vue";
import simpananHome from "./component/simpanan.vue";
import simpananPokok from "./component/pokok.vue";
import simpananWajib from "./component/wajib.vue";
import simpananSukarela from "./component/sukarela.vue";

// image
import koperasi from './images/Logo-koperasi.png';
import { truncate } from 'fs';


export default {
    components: {
        home,
        userList,
        userForm,
        simpananHome,
        simpananPokok,
        simpananWajib,
        simpananSukarela
    },
    data(){
        return{
            isActive: true,
            homeActive:false,
            listActive:true,
            formActive:true,
            simpananActive:true,
            pokokActive:true,
            wajibActive:true,
            sukarelaActive:true
        }     
    },
    methods: {
    toggleClass: function(event){
       // Check value
       if(this.isActive){
         this.isActive = false;
       }else{
         this.isActive = true;
       }

    },
    homeTab: function(event){
        this.homeActive=false;
        this.listActive=true,
        this.formActive=true,
        this.simpananActive=true,
        this.pokokActive=true,
        this.wajibActive=true,
        this.sukarelaActive=true
    },
    listTab: function(event){
        this.homeActive=true;
        this.listActive=false,
        this.formActive=true,
        this.simpananActive=true,
        this.pokokActive=true,
        this.wajibActive=true,
        this.sukarelaActive=true
    },
    formTab: function(event){
        this.homeActive=true;
        this.listActive=true,
        this.formActive=false,
        this.simpananActive=true,
        this.pokokActive=true,
        this.wajibActive=true,
        this.sukarelaActive=true
    },
    simpananTab: function(event){
        this.homeActive=true;
        this.listActive=true,
        this.formActive=true,
        this.simpananActive=false,
        this.pokokActive=true,
        this.wajibActive=true,
        this.sukarelaActive=true
    },
    pokokTab: function(event){
        this.homeActive=true;
        this.listActive=true,
        this.formActive=true,
        this.simpananActive=true,
        this.pokokActive=false,
        this.wajibActive=true,
        this.sukarelaActive=true
    },
    wajibTab: function(event){
        this.homeActive=true;
        this.listActive=true,
        this.formActive=true,
        this.simpananActive=true,
        this.pokokActive=true,
        this.wajibActive=false,
        this.sukarelaActive=true
    },
    sukarelaTab: function(event){
        this.homeActive=true;
        this.listActive=true,
        this.formActive=true,
        this.simpananActive=true,
        this.pokokActive=true,
        this.wajibActive=true,
        this.sukarelaActive=false
    },

  }
}
</script>
<style lang="scss">
.hide{
    display: none;
}
</style>
<template>
  <div>
     
    <div id="content" >

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <h3 >Selamat datang</h3>
                </div>
            </nav>
            
            <div class="container">  
               <div class="card-deck">
                   <div class="card text-white bg-success mb-3" style="max-width: 22rem;" >
                    <div class="row card-header">
                        <div class="col-4"><img class="card-img-top " src="../images/bag.png" alt="Card image cap"></div>
                        <div class="col-8"><h4>simpanan</h4><h7>Daftarkan simpanan anda sekarang</h7></div>
                    </div>
                    <div class="card-body text-white text-right">
                        <font-awesome-icon :icon="['fas', 'arrow-right']" class="icon alt " style="font-size:2em;" />
                    </div>
                    </div>
                    <div class="card text-white bg-success mb-3" style="max-width: 22rem;">
                    <div class="row card-header">
                        <div class="col-4"><img class="card-img-top " src="../images/list-view.png" alt="Card image cap"></div>
                        <div class="col-8"><h4>Daftar Anggota</h4><h7>Daftar seluruh anggota yang sudah bergabung</h7></div>
                    </div>
                    <div class="card-body text-white text-right">
                        <font-awesome-icon :icon="['fas', 'arrow-right']" class="icon alt " style="font-size:2em;" />
                    </div>
                    </div>
                    <div class="card text-white bg-success mb-3" style="max-width: 22rem;">
                    <div class="row card-header">
                        <div class="col-4"><img class="card-img-top " src="../images/list-add.png" alt="Card image cap"></div>
                        <div class="col-8"><h4>Pendaftaran</h4><h7>Form pendaftaran anggota koperasi</h7></div>
                    </div>
                    <div class="card-body text-white text-right">
                        <font-awesome-icon :icon="['fas', 'arrow-right']" class="icon alt " style="font-size:2em;" />
                    </div>
                    </div>
                
                </div>
            </div>
            
     </div>
     
  </div>
</template>

<script>
// function
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// view
import home from "./home.vue"
import userList from "./list.vue";
import userForm from "./form.vue";
import simpananHome from "./simpanan.vue";
import simpananPokok from "./pokok.vue";
import simpananWajib from "./wajib.vue";
import simpananSukarela from "./sukarela.vue";


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

</style>
<template>
  <div id="myapp">
     <div class="wrapper">
        <!-- Sidebar  -->
        <nav id="sidebar" v-bind:class="[isActive ? 'active' : 'none']">
            <div class="sidebar-header">
                <center><img @click="homeTab()" src="./images/Logo-koperasi-plain.png" width="100px" height="80px"></center>
            </div>

            <ul class="list-unstyled components" style="border-bottom:none">
                <li>
                    <a href="#" @click="toggleClass()" >  
                        <div class="minimize"><font-awesome-icon :icon="['fas', 'list']" class="icon alt " style="font-size:1em;" /> menu</div>
                        <div class="maximize"><font-awesome-icon :icon="['fas', 'list']" class="icon alt " style="font-size:30px;" /></div>
                    </a>
                </li>
                <li>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle" >
                        <div class="minimize"><font-awesome-icon :icon="['fas', 'money-bill-wave']" class="icon alt " style="font-size:1em;" /> simpanan</div>
                        <div class="maximize"><font-awesome-icon :icon="['fas', 'money-bill-wave']" class="icon alt " style="font-size:30px;" /></div>
                        
                    </a>
                    <ul class="collapse list-unstyled" id="pageSubmenu">
                        <li >
                            
                            <div class="minimize"><a v-bind:class="[ simpananActive ? 'none' : 'activeTab']" @click="simpananTab()" href="#"><font-awesome-icon :icon="['fas', 'home']" class="icon alt " style="font-size:1em;" /> Home</a></div>
                            <div class="maximize"><a v-bind:class="[ simpananActive ? 'none' : 'activeTab']" @click="simpananTab()" href="#"><font-awesome-icon :icon="['fas', 'home']" class="icon alt " style="font-size:20px;" /> </a></div>
                            
                        </li>
                        <li >
                            <div class="minimize"><a v-bind:class="[ pokokActive ? 'none' : 'activeTab']" @click="pokokTab()" href="#"><font-awesome-icon :icon="['fas', 'shield-alt']" class="icon alt " style="font-size:1em;" /> Pokok</a></div>
                            <div class="maximize"><a v-bind:class="[ pokokActive ? 'none' : 'activeTab']" @click="pokokTab()" href="#"><font-awesome-icon :icon="['fas', 'shield-alt']" class="icon alt " style="font-size:20px;" /> </a></div>
                            
                        </li>
                        <li >
                            <div class="minimize"><a v-bind:class="[ wajibActive ? 'none' : 'activeTab']" @click="wajibTab()" href="#"><font-awesome-icon :icon="['fas', 'money-bill-alt']" class="icon alt " style="font-size:1em;" /> Wajib</a></div>
                            <div class="maximize"><a v-bind:class="[ wajibActive ? 'none' : 'activeTab']" @click="wajibTab()" href="#"><font-awesome-icon :icon="['fas', 'money-bill-alt']" class="icon alt " style="font-size:20px;" /> </a></div>
                            
                        </li>
                        <li >
                            <div class="minimize"><a v-bind:class="[ sukarelaActive ? 'none' : 'activeTab']" @click="sukarelaTab()" href="#"><font-awesome-icon :icon="['fas', 'hand-holding-usd']" class="icon alt " style="font-size:1em;" /> Sukarela</a></div>
                            <div class="maximize"><a v-bind:class="[ sukarelaActive ? 'none' : 'activeTab']" @click="sukarelaTab()" href="#"><font-awesome-icon :icon="['fas', 'hand-holding-usd']" class="icon alt " style="font-size:20px;" /> </a></div>
                            
                        </li>
                    </ul>
                </li>
                <li>
                    <a @click="listTab()" href="#" v-bind:class="[ listActive ? 'none' : 'activeTab']">
                        <div class="minimize"><font-awesome-icon :icon="['fas', 'users']" class="icon alt " style="font-size:1em;" /> Anggota</div>
                        <div class="maximize"><font-awesome-icon :icon="['fas', 'users']" class="icon alt " style="font-size:30px;" /> </div>
                        
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

        <!-- home -->
        <div id="content" v-bind:class="[homeActive ?  'hide':'none']">

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <h3 >Selamat datang</h3>
                </div>
            </nav>
            
            <div class="container">  
               <div class="card-deck">
                   <div class="card text-white bg-success mb-3" style="max-width: 22rem;" @click="listTab()">
                    <div class="row card-header">
                        <div class="col-4"><img class="card-img-top " src="./images/bag.png" alt="Card image cap"></div>
                        <div class="col-8"><h4>Pendaftaran Simpanan</h4><h7>Daftarkan simpanan anda sekarang</h7></div>
                    </div>
                    <div class="card-body text-white text-right">
                        <font-awesome-icon :icon="['fas', 'arrow-right']" class="icon alt " style="font-size:2em;" />
                    </div>
                    </div>
                    <div class="card text-white bg-success mb-3" style="max-width: 22rem;" @click="listTab()">
                    <div class="row card-header">
                        <div class="col-4"><img class="card-img-top " src="./images/list-view.png" alt="Card image cap"></div>
                        <div class="col-8"><h4>Anggota Terdaftar    </h4><h7>Daftar seluruh anggota terdaftar</h7></div>
                    </div>
                    <div class="card-body text-white text-right">
                        <font-awesome-icon :icon="['fas', 'arrow-right']" class="icon alt " style="font-size:2em;" />
                    </div>
                    </div>
                    <div class="card text-white bg-success mb-3" style="max-width: 22rem;" @click="formTab()">
                    <div class="row card-header">
                        <div class="col-4"><img class="card-img-top " src="./images/list-add.png" alt="Card image cap"></div>
                        <div class="col-8"><h4>Pendaftaran Anggota</h4><h7>Form pendaftaran anggota koperasi</h7></div>
                    </div>
                    <div class="card-body text-white text-right">
                        <font-awesome-icon :icon="['fas', 'arrow-right']" class="icon alt " style="font-size:2em;" />
                    </div>
                    </div>
                
                </div>
            </div>
            
     </div>
    
    <!-- tab home simpanan -->
    <div id="content" v-bind:class="[simpananActive ?  'hide':'none']">

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <h3>Selamat datang</h3>
                </div>
            </nav>
            
            <div class="container">  
               <div class="card-deck">
                   <div class="card text-white bg-success mb-3" style="max-width: 22rem;">
                    <div class="row card-header">
                        <div class="col-4"><img class="card-img-top " src="./images/shield.png" alt="Card image cap"></div>
                        <div class="col-8"><h4>Simpanan pokok</h4><h7>Setor simpanan anda sebagai simpanan pokok</h7></div>
                    </div>
                    <div class="card-body text-white text-right" @click="pokokTab()">
                        <font-awesome-icon :icon="['fas', 'arrow-right']" class="icon alt " style="font-size:2em;" />
                    </div>
                    </div>
                    <div class="card text-white bg-success mb-3" style="max-width: 22rem;" >
                    <div class="row card-header">
                        <div class="col-4"><img class="card-img-top " src="./images/arrows.png" alt="Card image cap"></div>
                        <div class="col-8"><h4>Simpanan wajib</h4><h7>Setor simpanan anda sebagai simpanan wajib</h7></div>
                    </div>
                    <div class="card-body text-white text-right" @click="wajibTab()">
                        <font-awesome-icon :icon="['fas', 'arrow-right']" class="icon alt " style="font-size:2em;" />
                    </div>
                    </div>
                    <div class="card text-white bg-success mb-3" style="max-width: 22rem;">
                    <div class="row card-header">
                        <div class="col-4"><img class="card-img-top " src="./images/bag.png" alt="Card image cap"></div>
                        <div class="col-8"><h4>Simpanan sukarela</h4><h7>Setor simpanan anda sebagai simpanan sukarela</h7></div>
                    </div>
                    <div class="card-body text-white text-right" @click="sukarelaTab()">
                        <font-awesome-icon :icon="['fas', 'arrow-right']" class="icon alt " style="font-size:2em;" />
                    </div>
                    </div>
                
                </div>
            </div>
            
     </div>

        <user-list v-bind:class="[listActive ? 'hide' : 'none']"/>
        <user-form v-bind:class="[formActive ? 'hide' : 'none']"/>

        <simpanan-pokok v-bind:class="[pokokActive ? 'hide' : 'none']"/>
        <simpanan-wajib v-bind:class="[wajibActive ? 'hide' : 'none']"/>
        <simpanan-sukarela v-bind:class="[sukarelaActive ? 'hide' : 'none']"/>

        <simpanan-pokok v-bind:class="[sPokokActive ? 'hide' : 'none']"/>
        <simpanan-wajib v-bind:class="[sWajibActive ? 'hide' : 'none']"/>
        <simpanan-sukarela v-bind:class="[sSukarelaActive ? 'hide' : 'none']"/>
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
            sukarelaActive:true,
            sPokokActive:true,
            sWajibActive:true,
            sSukarelaActive:true
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
        this.sukarelaActive=true,
        this.sPokokActive=true,
        this.sWajibActive=true,
        this.sSukarelaActive=true
    },
    listTab: function(event){
        this.homeActive=true;
        this.listActive=false,
        this.formActive=true,
        this.simpananActive=true,
        this.pokokActive=true,
        this.wajibActive=true,
        this.sukarelaActive=true,
        this.sPokokActive=true,
        this.sWajibActive=true,
        this.sSukarelaActive=true
    },
    formTab: function(event){
        this.homeActive=true;
        this.listActive=true,
        this.formActive=false,
        this.simpananActive=true,
        this.pokokActive=true,
        this.wajibActive=true,
        this.sukarelaActive=true,
        this.sPokokActive=true,
        this.sWajibActive=true,
        this.sSukarelaActive=true
    },
    simpananTab: function(event){
        this.homeActive=true;
        this.listActive=true,
        this.formActive=true,
        this.simpananActive=false,
        this.pokokActive=true,
        this.wajibActive=true,
        this.sukarelaActive=true,
        this.sPokokActive=true,
        this.sWajibActive=true,
        this.sSukarelaActive=true
    },
    pokokTab: function(event){
        this.homeActive=true;
        this.listActive=true,
        this.formActive=true,
        this.simpananActive=true,
        this.pokokActive=false,
        this.wajibActive=true,
        this.sukarelaActive=true,
        this.sPokokActive=true,
        this.sWajibActive=true,
        this.sSukarelaActive=true
    },
    wajibTab: function(event){
        this.homeActive=true;
        this.listActive=true,
        this.formActive=true,
        this.simpananActive=true,
        this.pokokActive=true,
        this.wajibActive=false,
        this.sukarelaActive=true,
        this.sPokokActive=true,
        this.sWajibActive=true,
        this.sSukarelaActive=true
    },
    sukarelaTab: function(event){
        this.homeActive=true;
        this.listActive=true,
        this.formActive=true,
        this.simpananActive=true,
        this.pokokActive=true,
        this.wajibActive=true,
        this.sukarelaActive=false,
        this.sPokokActive=true,
        this.sWajibActive=true,
        this.sSukarelaActive=true
    },

  }
}
</script>
<style lang="scss">
.hide{
    display: none;
}
.activeTab{
    background-color: #2b994b;
}
</style>
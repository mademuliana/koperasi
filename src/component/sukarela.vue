<template>
  <div>
      <div id="content">

            <nav class="navbar " style="margin-bottom: 0px">
                <div class="container-fluid">
                   <h4>Daftar Simpanan Sukarela</h4>
                 </div>
            </nav>

            <nav class="navbar" style=" background-color: #33ab56;   border-bottom-left-radius: 15px; border-bottom-right-radius: 15px;">
                 <div class="container-fluid">
                   <p style="color: white;">klik pada masing-masing judul tabel untuk mengurutkan berdasarkan judul tersebut</p>
                 </div> 
            </nav>
            
            
        <b-modal id="bv-modal-example-sukarela" hide-footer title="Data setoran">
          <p class="">tolong isi semua data dibawah ini dengan sebenar-benarnya</p>
          <div class="d-block">
            <form @submit.prevent="add">
              <input type="hidden" v-model="form.id">
              <input type="hidden" v-model="form.tanggal_setoran" >
              <input type="hidden" v-model="form.jenis_setoran" value="sukarela">
              <div class="form-group">
                <input class="form-control" placeholder="Nomor KTA" type="text" v-model="form.kta">
              </div>
              <div class="form-group">
                <input class="form-control" placeholder="Nama lengkap" type="text" v-model="form.penyetor">
              </div>
              <div class="form-group">
                <input class="form-control" placeholder="Jumlah setoran" type="number" v-model="form.jumlah_setoran">
              </div>
                <input type="text" v-model="form.status" style="display:none">
                <b-button class="btn-success" block type="submit">simpan</b-button>
            </form>
          </div>
         
        </b-modal>

         <b-modal id="bv-modal-example-sukarela-update" hide-footer title="Data setoran">
          <p class="">tolong isi semua data dibawah ini dengan sebenar-benarnya</p>
          <div class="d-block">
            <form @submit.prevent="add">
              <input type="hidden" v-model="form.id">
              <input type="hidden" v-model="form.tanggal_setoran" >
              <input type="hidden" v-model="form.jenis_setoran" value="sukarela">
              <div class="form-group">
                <input class="form-control" placeholder="Nomor KTA" type="text" v-model="form.kta">
              </div>
              <div class="form-group">
                <input class="form-control" placeholder="Nama lengkap" type="text" v-model="form.penyetor">
              </div>
              <div class="form-group">
                <input class="form-control" placeholder="Jumlah setoran" type="number" v-model="form.jumlah_setoran">
              </div>
                <input type="text" v-model="form.status" style="display:none">
                <b-button class="mt-3" block type="submit" v-show="updateSubmit" @click="update(form)">perbaharui</b-button>
            </form>
          </div>
         
        </b-modal>
         <div class="row"  style="padding-bottom:10px" >
           <div class="col" style="padding-left:30px">
             <div class="row">
              <div class="col-xs-2">
                <button class="btn btn-primary right button" id="show-btn" @click="$bvModal.show('bv-modal-example-sukarela')"><font-awesome-icon icon="plus" /> Tambah</button>
              </div>
             </div>
           </div>
           <div class="col" style="margin-left:47%">
             <div class="row" >
                 <div class="col-lg-9">
                <input class="form-control"  id="ex1" type="text">
              </div>
              <div class="col">
                <button class="btn btn-primary button" id="show-btn"><font-awesome-icon :icon="['fas', 'search']" class="icon alt"/></button>
              </div>
             </div>
           </div>
        </div>

        <table class="table table-bordered t-width" style="table-layout: fixed">
            <thead>
            <tr >
                <th class="thead-link" @click="sort('kta')">Id KTA</th>
                <th class="thead-link" @click="sort('penyetor')">Penyetor</th>
                <th class="thead-link" @click="sort('tanggal_setoran')">Tanggal setoran</th>
                <th class="thead-link" @click="sort('jumlah_setoran')">Jumlah yang disetor</th>
                <th class="thead-link" @click="sort('total_setoran')">Total setoran</th>
                <th class="thead-link" style="text-align:center">Edit</th>
            </tr>
            </thead>
            <tbody>
                <tr  v-for="sukarela in sortedSukarela" :key="sukarela.id"  >
                    <td>{{sukarela.kta}}</td>
                    <td>{{sukarela.penyetor}}</td>
                    <td>{{sukarela.tanggal_setoran}}</td>
                    <td>{{sukarela.jumlah_setoran}}</td>
                    <td></td>
                    <td><center><p><font-awesome-icon class="link-t" id="show-btn" @click="($bvModal.show('bv-modal-example-sukarela-update')),(edit(user))" icon="pen" /><font-awesome-icon class="link-d" id="show-btn" @click="del(user)" icon="trash-alt" /></p></center></td>
                    
                    <!-- <button @click="del(user)">Delete</button> -->
                </tr>    
            </tbody>
        </table>
        </div>
        </div>
   
 
</template>

<script>
/* eslint-disable */ 
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import moment from 'moment'

export default {
  data(){
    return{
        form: {
          id: '',
          kta:'',
          penyetor: '',
          jenis_setoran:'sukarela',
          tanggal_setoran:moment().format('D/MM/YYYY'),
          jumlah_setoran:'',
          total_setoran:''
        },
        simpanan: [],
        updateSubmit: false,
        currentSort:'name',
        currentSortDir:'asc'
    }
  },
  
  mounted() {
    this.loadSimpanan()
  },
  methods: {
    sort:function(s) {
      //if s == current sort, reverse
      if(s === this.currentSort) {
        this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
      }
      this.currentSort = s;
    },
    isToday(date) {
            return moment().format('d/MM/YYYY');
        },
    loadSimpanan(){
        axios.get('http://localhost:3000/sukarela').then(res => {
        this.simpanan = res.data
      }).catch ((err) => {
        console.log(err);
        
      })
    },
      add(){
      axios.post('http://localhost:3000/sukarela', this.form).then(res => {
          this.load()
          this.form.penyetor = '',
          this.form.kta='',
          this.jenis_setoran='',
          this.form.jumlah_setoran='',
          this.total_setoran=''
      })
    },
    edit(user){ 
        this.updateSubmit = true
        this.form.id = sukarela.id 
        this.form.penyetor = '',
        this.form.kta='',
        this.jenis_setoran='',
        this.form.jumlah_setoran='',
        this.total_setoran=''
    },
    update(form){ 
       return axios.put('http://localhost:3000/sukarela' + form.id , {
         kta:this.form.kta,penyetor:this.form.penyetor,jenis_setoran:this.jenis_setoran,jumlah_setoran:this.jumlah_setoran,total_setoran:this.total_setoran }).then(res => {
        this.load()
        this.form.penyetor = '',
        this.form.kta='',
        this.jenis_setoran='',
        this.form.jumlah_setoran='',
        this.total_setoran=''
        this.updateSubmit = false
      }).catch((err) => {
        console.log(err);
        
      })
    },
    del(user){
      axios.delete('http://localhost:3000/sukarela' + user.id).then(res =>{
          this.load()
          let index = this.users.indexOf(form.name)
          this.users.splice(index,1)
      })
    }
  },
  computed:{
    sortedSukarela:function() {
      return this.simpanan.sort((a,b) => {
        let modifier = 1;
        if(this.currentSortDir === 'desc') modifier = -1;
        if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
        if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
        return 0;
      });
    }
  }
}
</script>

<style lang="scss">
.bottom{
  margin-bottom: 4%;
}
.left{
  padding-left :30px
}
.button-group{
  padding-left: 1%
  }
.t-width{

  min-width: 1100px;
}
.right{
  margin-right: 5px;
}
.table td.fit, 
.table th.fit {
    white-space: nowrap;
    width: 1%;
}
.link-t{
  cursor: pointer;
  

  font-size: 20px; 
  &:hover{
    color: blue;    
    text-decoration: underline;
  }
}

.link-d{
  cursor: pointer;
  margin-right:5px;
  font-size: 20px; 
  &:hover{
    color: red;    
    text-decoration: underline;
  }
}
</style>
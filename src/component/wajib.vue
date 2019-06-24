<template>
  <div>
      <div id="content">

            <nav class="navbar ">
                <div class="container-fluid">
                   <h4>Daftar Anggota</h4>
                 </div>
            </nav>
            
            
        <b-modal id="bv-modal-example-suka" hide-footer title="Data setoran">
          <p class="">tolong isi semua data dibawah ini dengan sebenar-benarnya</p>
          <div class="d-block">
            <form @submit.prevent="add">
              <input type="hidden" v-model="form.id">
              <input type="hidden" v-model="form.tanggal_setoran" >
              <input type="hidden" v-model="form.jenis_setoran" >
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
                <b-button class="btn-success" block type="submit" v-show="!updateSubmit">simpan</b-button>
                <b-button class="mt-3" block type="submit" v-show="updateSubmit" @click="update(form)">perbaharui</b-button>
            </form>
          </div>
         
        </b-modal>
         <div class="row"  style="padding-bottom:10px" >
           <div class="col" style="padding-left:30px">
             <div class="row">
              <div class="col-xs-2">
                <button class="btn btn-danger right" id="show-btn" @click="$bvModal.show('bv-modal-example-suka')"><font-awesome-icon icon="minus" /> Hapus</button>
              </div>
              <div class="col-xs-2">
                <button class="btn btn-primary right button" id="show-btn" @click="$bvModal.show('bv-modal-example-suka')"><font-awesome-icon icon="plus" /> Tambah</button>
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

        <table class="table table-bordered" style="table-layout: fixed">
            <thead>
            <tr >
                <th style="text-align:center">Hapus</th>
                <th>Id KTA</th>
                <th>Penyetor</th>
                <th>Tanggal setoran</th>
                <th>Jumlah yang disetor</th>
                <th>Total setoran</th>
                <th style="text-align:center">Edit</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="pokok in simpanan" :key="pokok.jenis_simpanan==='sukarela'" >
                    <td><center><input type="checkbox" value="delete"></center></td>
                    <td>{{pokok.kta}}</td>
                    <td>{{pokok.penyetor}}</td>
                    <td>{{pokok.tanggal_setoran}}</td>
                    <td>{{pokok.jumlah_setoran}}</td>
                    <td></td>
                    <td style="text-align:center"><p class="link-t" id="show-btn" @click="($bvModal.show('bv-modal-example')),(edit(user))"><font-awesome-icon icon="pen" /></p></td>
                    
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
          jenis_setoran:'wajib',
          tanggal_setoran:moment().format('D/MM/YYYY'),
          jumlah_setoran:'',
          total_setoran:''
        },
        simpanan: '',
        updateSubmit: false
    }
  },
  
  mounted() {
    this.load()
  },
  methods: {
    isToday(date) {
            return moment().format('d/MM/YYYY');
        },
    load(){
        axios.get('http://localhost:3000/simpanan').then(res => {
        this.simpanan = res.data
      }).catch ((err) => {
        console.log(err);
        
      })
    },
      add(){
      axios.post('http://localhost:3000/simpanan', this.form).then(res => {
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
        this.form.id = pokok.id 
        this.form.penyetor = '',
        this.form.kta='',
        this.jenis_setoran='',
        this.form.jumlah_setoran='',
        this.total_setoran=''
    },
    update(form){ 
       return axios.put('http://localhost:3000/simpanan' + form.id , {
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
      axios.delete('http://localhost:3000/simpanan' + user.id).then(res =>{
          this.load()
          let index = this.users.indexOf(form.name)
          this.users.splice(index,1)
      })
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
.right{
  margin-right: 5px;
}
table{
  font-size: 12px;
  margin: 0;
}
.link-t{
  cursor: pointer;
  
  &:hover{
    color: blue;    
    text-decoration: underline;
  }
}
</style>
<template>
  <div>
      <div id="content">

            <nav class="navbar ">
                <div class="container-fluid">
                   <h4>Daftar Anggota</h4>
                 </div>
            </nav>

            <div class="form-group row">
              <div class="col-xs-2">
                <button class="btn btn-primary right button" id="show-btn" @click="$bvModal.show('bv-modal-example')"><font-awesome-icon icon="plus" /> Tambah</button>
              </div>
              <div class="col-xs-2">
                <button class="btn btn-danger right" id="show-btn" @click="$bvModal.show('bv-modal-example')"><font-awesome-icon icon="minus" /> Hapus</button>
              </div>
              <div class="col-xs-2">
                <input class="form-control" id="ex1" type="text">
              </div>
              <div class="col-xs-2">
                <button class="btn btn-primary right button" id="show-btn"><font-awesome-icon :icon="['fas', 'search']" class="icon alt"/></button>
              </div>
            </div>
            
        <b-modal id="bv-modal-example" hide-footer title="Masukan Data Anggota">
          <p class="">tolong isi semua data dibawah ini dengan sebenar-benarnya</p>
          <div class="d-block">
            <form @submit.prevent="add">
              <input type="hidden" v-model="form.id">
              <div class="form-group">
                <input class="form-control" placeholder="Nomor KTA" type="text" v-model="form.kta">
              </div>
              <div class="form-group">
                <input class="form-control" placeholder="Nama lengkap" type="text" v-model="form.nama_lengkap">
              </div>
              <div class="form-group">
                <input placeholder="Tanggal Lahir" class="textbox-n form-control" type="text" onfocus="(this.type='date')"  id="date" v-model="form.tanggal_lahir">
              </div>
              <div class="form-group">
                <label for="" style="padding-left:2%">jenis kelamin:</label>
                <label class="radio-inline" style="padding-right:20%; padding-left:5%"><input type="radio" name="optradio">Laki-laki</label>
                <label class="radio-inline"><input type="radio" name="optradio">Perempuan</label>
              </div>
              <div class="form-group">
                <textarea class="form-control" placeholder="Alamat lengkap" type="text" v-model="form.alamat_lengkap"></textarea>
              </div>
              <div class="form-group">
                <input placeholder="Tanggal bergabung" class="textbox-n form-control" type="text" onfocus="(this.type='date')"  id="date" v-model="form.tgl_bergabung">
              </div>
              <div class="form-group">
                <input class="form-control" placeholder="Nomor telephone" type="text" v-model="form.nomor_telephone">
              </div>
              <div class="form-group">
                <input class="form-control" placeholder="Email" type="email" v-model="form.email">
              </div>
                <input type="hidden" v-model="form.status">
                <b-button class="btn-success" block type="submit" v-show="!updateSubmit">tambahkan</b-button>
                <b-button class="mt-3" block type="submit" v-show="updateSubmit" @click="update(form)">update</b-button>
            </form>
          </div>
         
        </b-modal>
        <table class="table table-bordered" style="table-layout: fixed">
            <thead>
            <tr>
                <th>Hapus</th>
                <th>Id KTA</th>
                <th>Nama Lengkap</th>
                <th>Tanggal Lahir</th>
                <th>Jenis Kelamin</th>
                <th>alamat</th>
                <th>No Tlp</th>
                <th>Tanggal Bergabung</th>
                <th>Status</th>
                <th>edit</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td><center><input type="checkbox" value="delete"></center></td>
                    <td>{{user.kta}}</td>
                    <td>{{user.nama_lengkap}}</td>
                    <td>{{user.tanggal_lahir}}</td>
                    <td>{{user.jenis_kelamin}}</td>
                    <td>{{user.alamat_lengkap}}</td>
                    <td>{{user.nomor_telephone}}</td>
                    <td>{{user.tanggal_bergabung}}</td>
                    <td>{{user.status}}</td>
                    <td><p class="link-t" id="show-btn" @click="($bvModal.show('bv-modal-example')),(edit(user))"><font-awesome-icon icon="pen" /></p></td>
                    
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
export default {
  data(){
    return{
        form: {
          id: '',
          kta:'',
          nama_lengkap: '',
          tanggal_lahir:'',
          jenis_kelamin:'',
          alamat_lengkap:'',
          tgl_bergabung:'',
          nomor_telephone:'',
          email:'',
          status:''
        },
        users: '',
        updateSubmit: false
    }
  },
  
  mounted() {
    this.load()
  },
  methods: {
    load(){
        axios.get('http://localhost:3000/users').then(res => {
        this.users = res.data
      }).catch ((err) => {
        console.log(err);
        
      })
    },
      add(){
      axios.post('http://localhost:3000/users/', this.form).then(res => {
          this.load()
          this.form.nama_lengkap = '',
          this.form.kta='',
          this.form.nama_lengkap= '',
          this.form.tanggal_lahir='',
          this.form.jenis_kelamin='',
          this.form.alamat_lengkap='',
          this.form.tgl_bergabung='',
          this.form.nomor_telephone='',
          this.form.email='',
          this.form.status='active'
      })
    },
    edit(user){ 
        this.updateSubmit = true
        this.form.id = user.id 
        this.form.kta=user.kta,
        this.form.nama_lengkap= user.nama_lengkap,
        this.form.tanggal_lahir=user.tanggal_lahir,
        this.form.jenis_kelamin=user.jenis_kelamin,
        this.form.alamat_lengkap=user.alamat_lengkap,
        this.form.tgl_bergabung=user.tgl_bergabung,
        this.form.nomor_telephone=user.nomor_telephone,
        this.form.email=user.email,
        this.form.status=user.status
    },
    update(form){ 
       return axios.put('http://localhost:3000/users/' + form.id , { kta: this.form.kta,nama_lengkap: this.form.nama_lengkap,tanggal_lahir:this.form.tanggal_lahir,jenis_kelamin:this.form.jenis_kelamin,alamat_lengkap:this.form.alamat_lengkap,tgl_bergabung:this.form.tgl_bergabung,nomor_telephone:this.form.nomor_telephone,email:this.form.email,status:this.form.status}).then(res => {
        this.load()
        this.form.id = ''
        this.form.nama_lengkap = ''
        this.form.kta=''
        this.form.nama_lengkap= ''
        this.form.tanggal_lahir=''
        this.form.jenis_kelamin=''
        this.form.alamat_lengkap=''
        this.form.tgl_bergabung=''
        this.form.nomor_telephone=''
        this.form.email=''
        this.form.status=''
        this.updateSubmit = false
      }).catch((err) => {
        console.log(err);
        
      })
    },
    del(user){
      axios.delete('http://localhost:3000/users/' + user.id).then(res =>{
          this.load()
          let index = this.users.indexOf(form.name)
          this.users.splice(index,1)
      })
    }
  }
}
</script>

<style lang="scss">

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
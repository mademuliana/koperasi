<template>
  <div>
      <div id="content">

            <nav class="navbar" style="margin-bottom: 0px">
                <div class="container-fluid">
                   <h4>Daftar Anggota</h4>
                 </div>
                  
            </nav>

            <nav class="navbar" style=" background-color: #33ab56;   border-bottom-left-radius: 15px; border-bottom-right-radius: 15px;">
                 <div class="container-fluid">
                   <p style="color: white;">klik pada masing-masing judul tabel untuk mengurutkan berdasarkan judul tersebut</p>
                 </div> 
            </nav>

        <div class="row"  style="padding-bottom:10px" >
           <div class="col" style="padding-left:30px">
             <div class="row">
              <!-- <div class="col-xs-2">
                <button class="btn btn-danger right" id="show-btn" @click="$bvModal.show('bv-modal-example')"><font-awesome-icon icon="minus" /> Hapus</button>
              </div> -->
              <div class="col-xs-2">
                <button class="btn btn-primary right button" id="show-btn" @click="($bvModal.show('bv-modal-example')),(reset(form))"><font-awesome-icon icon="plus" /> Tambah</button>
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
                                <label class="radio-inline" style="padding-right:20%; padding-left:5%"><input type="radio" name="optradio" value="Pria" v-model="form.jenis_kelamin">Pria</label>
                <label class="radio-inline"><input type="radio" name="optradio" value="Wanita" v-model="form.jenis_kelamin">Wanita</label>
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
                <input type="hidden" v-model="form.status" value="active">
                <b-button class="btn-success" block type="submit">tambahkan</b-button>
                <!-- <b-button class="mt-3" block type="submit" v-show="updateSubmit" @click="update(form)">update</b-button> -->
            </form>
          </div>
         
        </b-modal>

        <b-modal id="bv-modal-example-update" hide-footer title="Masukan Data Anggota">
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
                <label class="radio-inline" style="padding-right:20%; padding-left:5%"><input type="radio" name="optradio" value="Pria" v-model="form.jenis_kelamin">Pria</label>
                <label class="radio-inline"><input type="radio" name="optradio" value="Wanita" v-model="form.jenis_kelamin">Wanita</label>
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
                <input type="hidden" v-model="form.status" value="active">
                <!-- <b-button class="btn-success" block type="submit" v-show="!updateSubmit">tambahkan</b-button> -->
                <b-button class="mt-3" block type="submit" v-show="updateSubmit" @click="update(form)">update</b-button>
            </form>
          </div>
         
        </b-modal>
        <div style="overflow-x: scroll;">
          <table class="table table-bordered t-width" style="table-layout: fixed">
            <thead >
            <tr>
                <!-- <th>Id KTA</th> -->
                <th class="thead-link" @click="sort('nama_lengkap')">Nama Lengkap</th>
                <th class="thead-link" @click="sort('tanggal_lahir')">Tanggal Lahir</th>
                <th class="thead-link" @click="sort('jenis_kelamin')">Jenis Kelamin</th>
                <th class="thead-link" @click="sort('alamat_lengkap')">alamat</th>
                <th class="thead-link" @click="sort('nomor_telephone')">No Tlp</th>
                <th class="thead-link" @click="sort('email')">Email</th>
                <th class="thead-link" @click="sort('tgl_bergabung')">Tanggal Bergabung</th>
                <th class="thead-link">Status</th>
                <th class="thead-link">Action</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="user in sortedUsers" :key="user.id">
                    
                    <!-- <td>{{user.kta}}</td> -->
                    <td>{{user.nama_lengkap}}</td>
                    <td>{{user.tanggal_lahir}}</td>
                    <td>{{user.jenis_kelamin}}</td>
                    <td>{{user.alamat_lengkap}}</td>
                    <td>{{user.nomor_telephone}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.tgl_bergabung}}</td>
                    <td>{{user.status}}</td>
                    <td><center><p><font-awesome-icon class="link-t" id="show-btn" @click="($bvModal.show('bv-modal-example-update')),(edit(user))" icon="pen" /><font-awesome-icon class="link-d" id="show-btn" @click="del(user)" icon="trash-alt" /></p></center></td>
                    
                    <!-- <button @click="del(user)">Delete</button> -->
                </tr>    
            </tbody>
        </table>
        </div>
        
        </div>
        <div style="display:none">debug: sort={{currentSort}}, dir={{currentSortDir}}</div> 
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
          status:'active'
        },
        users: [],
        updateSubmit: false,
        currentSort:'name',
        currentSortDir:'asc'
    }
  },

  mounted() {
    this.loadUser()
  },
  methods: {
    sort:function(s) {
      //if s == current sort, reverse
      if(s === this.currentSort) {
        this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
      }
      this.currentSort = s;
    },
    loadUser(){
        axios.get('http://localhost:3000/users').then(res => {
        this.users = res.data
      }).catch ((err) => {
        console.log(err);
        
      })
    },
    
    reset(form){ 
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
  },
  computed:{
    sortedUsers:function() {
      return this.users.sort((a,b) => {
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
.collumn{ min-width: 200px; }
.thead-link{
  background-color: #2b994b;
  color: white;
  border: #2b994b;
  cursor: pointer;
  &:hover{
    background-color: #33ab56;  
    text-decoration: none;
  }
}
.t-width{

  min-width: 1000px;
  max-width: 1000px;
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
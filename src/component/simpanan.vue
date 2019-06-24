<template>
  <div>
     
    <div id="content">

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <h3>Selamat datang</h3>
                </div>
            </nav>
            
            <div class="container">  
               <div class="card-deck">
                   <div class="card text-white bg-success mb-3" style="max-width: 22rem;">
                    <div class="row card-header">
                        <div class="col-4"><img class="card-img-top " src="../images/shield.png" alt="Card image cap"></div>
                        <div class="col-8"><h4>Simpanan pokok</h4><h7>Setor simpanan anda sebagai simpanan pokok</h7></div>
                    </div>
                    <div class="card-body text-white text-right">
                        <font-awesome-icon :icon="['fas', 'arrow-right']" class="icon alt " style="font-size:2em;" />
                    </div>
                    </div>
                    <div class="card text-white bg-success mb-3" style="max-width: 22rem;">
                    <div class="row card-header">
                        <div class="col-4"><img class="card-img-top " src="../images/arrows.png" alt="Card image cap"></div>
                        <div class="col-8"><h4>Simpanan wajib</h4><h7>Setor simpanan anda sebagai simpanan wajib</h7></div>
                    </div>
                    <div class="card-body text-white text-right">
                        <font-awesome-icon :icon="['fas', 'arrow-right']" class="icon alt " style="font-size:2em;" />
                    </div>
                    </div>
                    <div class="card text-white bg-success mb-3" style="max-width: 22rem;">
                    <div class="row card-header">
                        <div class="col-4"><img class="card-img-top " src="../images/bag.png" alt="Card image cap"></div>
                        <div class="col-8"><h4>Simpanan sukarela</h4><h7>Setor simpanan anda sebagai simpanan sukarela</h7></div>
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

export default {

    data(){
        return{
            isActive: true
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

    }
  }
}
</script>
<style lang="scss">

</style>
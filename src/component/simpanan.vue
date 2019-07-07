<template>
  <div>
     
    
     
  </div>
</template>

<script>

export default {
   
    methods: {
    toggleClass: function(event){
       // Check value
       if(this.isActive){
         this.isActive = false;
       }else{
         this.isActive = true;
       }

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
    simpananPokokTab: function(event){
        this.homeActive=true;
        this.listActive=true,
        this.formActive=true,
        this.simpananActive=true,
        this.pokokActive=true,
        this.wajibActive=true,
        this.sukarelaActive=true,
        this.sPokokActive=false,
        this.sWajibActive=true,
        this.sSukarelaActive=true
    },
    simpananWajibTab: function(event){
        this.homeActive=true;
        this.listActive=true,
        this.formActive=true,
        this.simpananActive=true,
        this.pokokActive=true,
        this.wajibActive=true,
        this.sukarelaActive=true,
        this.sPokokActive=true,
        this.sWajibActive=false,
        this.sSukarelaActive=true
    },
    simpananSukarelaTab: function(event){
        this.homeActive=true;
        this.listActive=true,
        this.formActive=true,
        this.simpananActive=true,
        this.pokokActive=true,
        this.wajibActive=true,
        this.sukarelaActive=true,
        this.sPokokActive=true,
        this.sWajibActive=true,
        this.sSukarelaActive=false
    },

  }
}
</script>
<style lang="scss">

</style>
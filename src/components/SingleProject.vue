<template>
 <div class="project" :class="{complete:project.complete}" >
    <h3 @click="showDetail=!showDetail">{{project.title}} </h3>
    <div class="flexing">
        <div class="">
                     <p v-if="showDetail" >{{project.detail}} </p>

        </div>
        <div class="">
  <span class="material-symbols-outlined" @click="deleteProject">
   delete
  </span>
     <router-link :to="{name:'EditProject',params:{id:this.project.id} } ">
         <span class="material-symbols-outlined">
   edit
  </span>
     </router-link>

  
   <span class="material-symbols-outlined" @click="completeProject">
   done
  </span>

        </div>

    </div>
 </div>
</template>
<script>

export default{
props:['project'],
data(){
    return {
        showDetail:false,
         api:"http://localhost:3000/projects/"
    }
   
},
methods:{
        deleteProject(){
            let deleteRoute=this.api+this.project.id;
            fetch(deleteRoute,{method:"DELETE"})
            .then(()=>{
                this.$emit("delete",this.project.id)
            })
            .catch((err)=>{
                console.log(err);
            })
        },
        completeProject(){
            let updateCompleteRoute = this.api+this.project.id;
            console.log(updateCompleteRoute);
            fetch(updateCompleteRoute,{
                method:"PATCH",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    complete:!this.project.complete
                })
               
            })
            .then(()=>{
                this.$emit("complete",this.project.id)

            })
            .catch((err)=>{
                console.log(err);
            })
        }
  
}

}


</script>
<style scoped>
.project{
    padding: 20px;
    background-color: #f2f2f2;
    cursor: pointer;
    margin: 10px;
    border-left: 6px solid crimson;
    border-radius: 8px;
}
h3{
    color: indigo;
}
.flexing{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
span{
    margin: 10px;
    
}
span:hover{
    cursor: pointer;
    color: #777;

}
.complete{
    border-left-color: green;
}


</style>
<template>
 
  <h1>Home </h1>
  <FilterNav @filterValue="current=$event" :current="current"></FilterNav>
  <div v-for="project in filterProjects" :key="project.id">
   <SingleProject :project="project" @delete="deleteProject" @complete="completeProject" ></SingleProject>

  </div>

</template>

<script>
// @ is an alias to /src
import SingleProject from '../components/SingleProject.vue';
import FilterNav from '../components/FilterNav.vue'

export default {
 components:{
   SingleProject,
   FilterNav
 },
 data(){
   return{
    projects:[],
    current:"all",
   
   }
 },
 computed:{
  filterProjects(){
    if(this.current === 'complete'){
      return this.projects.filter((data)=>{
        return data.complete;
      })
    }
    if(this.current === 'ongoing'){
      return this.projects.filter((data)=>{
        return !data.complete
      })
    }
    return this.projects
  }
 }
  ,
 methods:{
    deleteProject(id){
      this.projects=this.projects.filter(project=>{
        return project.id!=id;
      })
    },
    completeProject(id){
     let findProject = this.projects.find(project=>{
      return project.id === id;
     })
     findProject.complete =!findProject.complete;
    }

 },
  
   mounted(){
        fetch("http://localhost:3000/projects")
        .then((response)=>{
            // console.log(response);
            return response.json();
        })
        .then((datas)=>{
            console.log(datas);
            this.projects=datas;

        })
        .catch((err)=>{
            console.log(err.message());
        })
    }
}
</script>

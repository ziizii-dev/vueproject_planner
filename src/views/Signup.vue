<template>
   
     <!-- <p>Email:{{email}} </p>
      <p>Password:{{password}} </p>
      <p>Role:{{role}} </p>
      <p>Accept:{{accept}}</p>
      <p>Colors:{{colors}}</p>
      <p>Skills:{{skills}} </p> -->
     

      <form @submit.prevent="submit">
         <label for="">Name</label>
       <input type="text"  v-model="name">
       <label for="">Email</label>
       <input type="text"  v-model="email">
         <p v-if="errorMsg" class="error"> {{errorEmail}} </p>

         
         <label for="password">Pasword</label>
         <input type="password" required v-model="password">
         <p v-if="errorMsg" class="error"> {{errorMsg}} </p>
         <label for="role">Select Role</label>
         <select v-model="role" >
            <option value="developer">Web Developer</option>
            <option value="designer">Web Designer</option>
         </select>
          <label for="skills">Skills</label>
         <input type="text"  v-model="skill" @keyup.alt="addSkill">
         <div v-for="skill in skills" :key="skill">
           <p> {{skill}}<span class="cross" @click="deleteSkills(skill)">&#x2716;</span>  </p>

         </div>
         <div>
            <input type="checkbox"  v-model="accept">
        <label for="checkbox">Select terms and condition</label>

         </div>
         <div >
            <label for="name">Select Your Colors</label>
         </div>
       <div>
         <span>
            <input type="checkbox"  value="red" v-model="colors" >
          <label for="checkbox">Red</label> 
         </span>
          <span>
            <input type="checkbox"  value="white"  v-model="colors">
          <label for="checkbox">White</label> 
          </span>
           <span>
            <input type="checkbox"  value="green" v-model="colors">
          <label for="checkbox">Green</label> 
          </span>
           <span>
            <input type="checkbox"  value="blue" v-model="colors">
          <label for="checkbox">Blue</label> 
          </span>
         </div>
         <div class="align">        
           <button class="create" >Create Account</button>
          </div>
      </form> 
      
  
</template>
<script>
export default {
     data(){
        return{
            name:"",
            email:"",
            password:"",
            role:"",
            accept:false,
            colors:[],
            skills:[],
            skill:"",
            errorMsg:"",
            errorEmail:"",
            api:"http://localhost:3000/register"
        }
     },
     methods:{
     addSkill(e) {
      // console.log(e);
      if (e.key === "," && this.skill) {
          this.skills.push(this.skill);
          this.skill = "";
     
      }
    },
    deleteSkills(skill){
     this.skills = this.skills.filter(loopSkill=>{
          return loopSkill !== skill;
     })
    },
    submit(){
        console.log("hi");
      if(this.password.length<8){
        this.errorMsg="Password must be have at least 8 charactors!"
      };
       const errors = {};
      if (!this.email) {
        this.errorEmail = 'Email is required';
     }
//    console.log(this.api);
      fetch(this.api,{
        
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            name:this.name,
            email:this.email,
            password:this.password,
            role:this.role,
            accept:true,
            color:this.colors,
            skill:this.skills
        })
      })
      .then(()=>{
        this.$router.push({name:"Login"})
        alert("Register Successfully");
      })
      .catch((err)=>{
        console.log(err);
      })
    }
    
     }
}
</script>
<style  scoped>

form{
    max-width: 420px;
    margin: 32px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;

}
label{
    display: inline-block;
    color: #aaa;
    margin: 25px 0 15px ;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;

}
input,select{
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}
input[type="checkbox"]{
    display: inline-block;
    width:  16px;
   margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
span{
    margin: 1px 2px 1px 2px ;
}
.cross{
  cursor: pointer;
  color: red;
}
.create{
  background-color: royalblue;
  padding: 8px;
  color: white;
  border-radius: 10px;
}
.align{
  text-align: center;
}
.error{
  color: crimson;
}
</style>
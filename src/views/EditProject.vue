<template>
    <div>
        <h1>Edit Project</h1>
    <form action="" @submit.prevent="addProject">
    <label > Project Title</label>
    <input type="text" v-model="title">
    <label > Project Details</label>
    <input type="text" v-model="detail" >
    <button type="submit" @click="updateProject">Update object</button>
 </form>
    </div>
</template>
<script>
export default{
    props:['id'],
    data(){
        return{
            title:"",
            detail:"",
             api:"http://localhost:3000/projects/"
        }
    },
    mounted(){
        fetch(this.api+this.id)
        .then((res)=>{
            // console.log(res);
           return res.json()

        })
        .then((data)=>{
            console.log(data);
            this.title = data.title;
            this.detail = data.detail
        })
        .catch((err)=>{
            console.log(err);
        })
    },
    methods:{
        updateProject(){
            console.log("hello");
            fetch(this.api+this.id,{
                method:"PATCH",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({
                    title:this.title,
                    detail:this.detail

                })
            })
            .then(()=>{
                this.$router.push({name:'home'})

            })
            .catch((err)=>{
                console.log(err);
            })

        }
    }
}
</script>
<style scoped>
form {
    background: white;
    padding: 20px;
    border-radius: 10px;
  }
  label {
    display: block;
    color: #bbb;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    margin: 20px 0 10px 0
  }
  input {
    padding: 10px;
    border: 0;
    border-bottom: 1px solid #ddd;
    width: 100%;
    box-sizing: border-box;
  }
  textarea {
    border: 1px solid #ddd;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
    height: 100px;
  }
  form button {
    display: block;
    margin: 20px auto 0;
    background: #00ce89;
    color: white;
    padding: 10px;
    border: 0;
    border-radius: 6px;
    font-size: 16px;
  }
</style>
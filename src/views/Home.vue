<template>
 <div>
     <h1>Welcome to {{title}}!</h1>
     <input type="text" v-model="input1"/>
     <button type="button" @click="getData"> Get</button> 
        <button type="button" @click="setData"> Set</button>

 </div>   
</template>
<script>
export default {
    data(){
        return{
            title: "하이하ㅎㅇㅎㅇㅎㅇ",
            title2: "Seoul",
            input1: "abcd",
        };
    },
    watch: {
        //input1 데이터에 변화가 생기면 호출됨.
        //변수명과 동일한 이름으로 메소드 형식을 만듦.
        input1(){
            console.log(this.input1);
        }
    },
    methods: {
        getData(){
            alert(this.input1);
        },
        setData(){
            this.input1 = "12345"
        },
    },

    //페이지 로드할때 미리 DB에서 데이터를 가져와야 하는 경우 beforeCreate(), created() 메소드 사용.
    //데이터가 변할 땐 beforeUpdate(), updated() 메소드 호출됨.
    beforeCreate(){
        console.log("beforeCreate")
    },
    created(){
        console.log("created")
    },
    beforeMount(){
        console.log("beforeMount")
    },
    mounted(){
        console.log("mounted")
    },
    beforeUpdate(){
        console.log("beforeUpdate")
    },
    updated(){
        console.log("updated")
    },
    beforeDestroy(){
        console.log("beforeDestroy")
    },
    destroyed(){
    console.log("destroyed")
    }

};
</script>
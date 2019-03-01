<template>
    <nav>
        <ul>
            <li>
                <router-link to="/">博客</router-link>
            </li>
            <li>
                <router-link to="/addBlog">写博客</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name:"blog-header"
}
</script>
<style scoped>
nav{
    margin: 0 30px;
}
.router-link-active{
    
}
ul{
    list-style: none;
    text-align: center;
    margin: 0;
}
li{
    display: inline-block;
    margin: 0 20px;
}
a{
    color: #333;
}
</style>



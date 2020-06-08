<template>
    <div class="container mt-4">
        <div class="col-12 text-center">
            <img src="../assets/logo.png">
            <h1 >Hello</h1>
        </div>
        
        <!-- <button class="btn btn-success">Click me!</button> -->
        <table class="table text-center">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Body</th>

                </tr>
            </thead>
            <tbody>
                <tr v-for="post in posts" :key="post.id">
                    <th>{{ post.id }}</th>
                    <td>{{ post.name }}</td>
                    <td>{{ post.email }}</td>
                    <td>{{ post.body }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    import axios from 'axios' // Is a promise-based HTTP client

    export default {
        name: 'PostsExample', // so this can be exported
        data() {
            return {
                posts: [ ]
            }
        },

        created() {
            console.log('it works');
            axios.get('http://jsonplaceholder.typicode.com/comments')
                .then( (post) => {
                    this.posts = post.data;
                    console.log(post);
                });
        }
    }

</script>

<style>

</style>
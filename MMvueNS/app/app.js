const Vue = require('nativescript-vue/dist/index')
/*const VueResource = require('vue-resource')
Vue.use(VueResource)*/

new Vue({
    template: `
    <page>
        <action-bar title='Project MM'></action-bar>
        <stack-layout class='postslist'>
            <list-view :items="posts">
                <template scope="post">
                    <stack-layout>
                        <label :text="post.title" ></label>
                        <label :text="post.body" ></label>
                    </stack-layout>
                </template>
            </list-view>
        </stack-layout>
    </page>
    `,
    data: {
        posts: []
    },
    created: function() {
        this.fetchPosts();
    },
    methods: {
        fetchPosts() {
/*          this.$http.get('https://jsonplaceholder.typicode.com/posts').then((response) => { 
            this.posts = response.data;
          });*/
          // we need to get this data from an end point ^^
          return this.posts = [{ title: 'test', body: 'whatever'}]
        }
    }
}).$start();
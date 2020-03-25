 <template>
 <div>
   <br>
   <div class="form-group">
<div class="input-group col-md-6">
  <input v-model="contentCount" type="number" class="form-control" placeholder="Enter the number of products you want to search." aria-label="Recipient's username" aria-describedby="basic-addon2">
  <div class="input-group-append">
    <span class="btn btn-outline-secondary" @click="getContent()">Search</span>
  </div>
  <br>
</div>
</div>
  <div v-for="products in product" :key="products.id" class="card">
  <img :src="products.image" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{products.name}}</h5>
    <p class="card-text">Count: {{products.count}}</p>
    <span href="#" class="btn btn-primary">Add To Basket</span>
  </div>
</div>
 </div>
</template>
<script>
import axios from 'axios';

export default{
  data(){
      return{
            product:"",
            contentCount:""
        }
    },
    methods:{
      //get product according to entered count.
      getContent(){
        console.log(this.contentCount);
            axios
      .get('https://productlist1-69abe.firebaseio.com/product.json?orderBy="name"&limitToFirst='+this.contentCount+'&print=pretty')
      .then(response => (this.product=response.data))
      }
    },
    created(){
         axios
      .get('https://productlist1-69abe.firebaseio.com/product.json') //All products.
      .then(response => (this.product=response.data))
      }
}
 
</script>
<style lang="scss" scoped >

.card{
  width:12rem;
  margin:2rem;
  float:left;
  height:23rem;
    img {
      width: 190px;
      height:200px;
        }
}
</style>

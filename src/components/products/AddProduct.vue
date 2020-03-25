 <template>
  <div class="card">
      <div v-if="alert" class="alert alert-success" role="alert">
  Product saved successfuly.
</div>
  <h5 class="card-header">Add Product</h5>
  <div class="card-body">
      <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label>Product Name</label>
      <input type="text" class="form-control" v-model="product.name" placeholder="Product Name" required>
    </div>
  </div>
    <div class="form-row">
    <div class="form-group col-md-6">
      <label>Count</label>
      <input type="number" class="form-control" v-model="product.count" placeholder="Count" required>
    </div>
  </div>
<div class="form-row">
    <div class="form-group col-md-6">
      <label>Image Url</label>
      <input type="text" class="form-control" v-model="product.image"  placeholder="Image Url" required>
    </div>
  </div>
  <span  class="btn btn-primary" @click="addProduct">Save</span>
</form>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            product:{
                name:"",
                count:"",
                image:""
            },
            alert:false
        }
    },
    methods:{
        addProduct(){
            axios.post('https://productlist1-69abe.firebaseio.com/product.json',this.product).
            then(res=>{
                console.log(res);
                this.clearText();
                this.alert=true;
            })
            
        },
        clearText(){
            this.product.name="";
            this.product.count="";
            this.product.image="";
        }
        
    }

}
</script>

<style lang="scss" scoped>
.card{
   width:600px;
   margin:50px auto;
}

</style>
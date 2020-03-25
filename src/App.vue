 <template>
 <div id="app">
   <Header></Header>
   <router-view></router-view>
   <Footer></Footer>
 </div>
  
</template>

<script>
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import ProductList from './components/products/ProductList';

export default {
   components:{
      Header,
      Footer,
      ProductList
   }
}
</script>

<style>


</style>
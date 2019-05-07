export const fruitMixIn=
{
  data()
  {
    return {
      fruits: ['Apple', 'Mango', 'BlueBerry', 'Cherry', 'Banana'],
      filterText: ''
    }
  }
,
  computed:{
    filteredFruits()
    {
      return this.fruits.filter((element) => {
        return element.match(this.filterText);
      })
    }
  }
  ,
      created(){
        console.log('created fruitMixIn');
      }
};

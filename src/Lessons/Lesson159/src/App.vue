<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Built in Directives</h1>
                 <p v-text="'some text'"></p>
                 <p v-html="'<strong> Seom strong text</strong>'"></p>

            </div>
        </div>
        <hr>

        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                 <p v-highlight:background="'red'">Color This</p>
                 <p v-highlight:text="'red'">Color This text</p>
                 <p v-highlight:background.delayed="'red'">Color This</p>

                 <p v-local-highlight:background="'red'">what about this? it's a local-highlight</p>
                 <p v-local-highlight:background.blink="{mainColor: 'red', secondColor: 'gray', delay: 1000, interval: 500 }">what about this? it's a local-highlight with blink</p>

            </div>
        </div>

    </div>
</template>

<script>
    export default {
      directives:{
        'local-highlight':{
          bind(el, binding, vnode){
            var delay=0;
            if(binding.modifiers['delayed']){
              delay=3000;
              if(typeof binding.value.delay !='undefined'){
                delay=binding.value.delay;
              }
            }
            if(binding.modifiers['blink']){
              let mainColor= binding.value.mainColor;
              let secondColor=  binding.value.secondColor;
              let currentColor = mainColor;
              let interval = binding.value.interval;
              setTimeout(()=>{
                setInterval(()=>{
                  currentColor == secondColor ? currentColor = mainColor: currentColor = secondColor;
                  if(binding.arg == 'background')
                  {
                    el.style.backgroundColor = currentColor;
                  }
                  else
                  {
                    el.style.color = currentColor;
                  }
                }, interval);

              }, delay);
            } else{
              setTimeout(()=>{if(binding.arg == 'background')
                {
                  el.style.backgroundColor = binding.value;
                }
                else
                {
                  el.style.color = binding.value;
                }
              }, delay);
            }

          }
        }
      }
    }
</script>

<style>

</style>

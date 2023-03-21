<script lang="ts">
  export let title:any;
  export let percentage:any 

  $: completeClass = title === 'Completed' ? 'bg-green-four' : 'bg-leaf-one';
</script>

<div>
  <div class="flex justify-between text-base font-normal text-gray-three">
    <p>{title}</p>
    <p>{percentage}%</p>
  </div>
  <div class="mt-5 h-4 w-full overflow-hidden rounded-full bg-gray-one transition-all duration-500 ease-out ">
    <div class={`${completeClass} h-4 rounded-full`} style={`width: ${percentage}%`}/>
  </div>

</div> 
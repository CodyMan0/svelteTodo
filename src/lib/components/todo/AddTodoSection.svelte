<script>
  import {addTodo} from '../../store/TodoStore'
  import add from '$lib/assets/add.png'
</script>

<section class="flex justify-between">
  <h3 class="text-xl font-bold text-green-three">Checklist</h3>
  <button class='group flex items-center rounded-md border-cream-four bg-green-one px-6 py-3 text-lg font-semibold text-gray-five outline outline-2 outline-offset-2 outline-green-one
  hover:text-green-five focus-visible:text-green-five focus-visible:outline-green-five
  ' type="button" on:click={addTodo}>
add Task <img class="w-8 ml-3 group-hover:text-green-five group-focus-visible:text-green-five" src={add} alt="add" />
  </button>
</section>
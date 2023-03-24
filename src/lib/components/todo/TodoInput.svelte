<script lang="ts">
import {deleteTodo, toggleComplete, editTodo} from '../../store/TodoStore'
import bin from '$lib/assets/delete.png'
export let todo:any;
console.log('input',todo);
console.log(todo)

$: completeClass = todo.complete ? 'bg-green-three' : 'bg-leaf-one'
</script>

<div class='flex items-center justify-between rounded-md border-2 border-gray-one
px-5 py-4
'>
  <div class="flex w-full max-w-lg items-center justify-start">
    <label for={`${todo.id}-checkbox`} class="sr-only">complete todo</label>
    <input 
    type="checkbox"
    id={`${todo.id}-checkbox`}
    checked={todo.complete}
     on:change={() => toggleComplete(todo.id)}
    class=" h-4 w-4 rounded border border-gray-three bg-cream-four
    text-green-four focus:border-green-five focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-green-five"
    />
    <label for={`${todo.id}-text`} class="sr-only">Edit todo</label> 
    <input
    type="text"
    id={`${todo.id}-text`}
    placeholder="Enter a todo"
    value={todo.text}
    on:input={(e) => {
      editTodo(todo.id, e.target.value)}}
    class="ml-5 flex-1 text-ellipsis rounded-none border-x-0 border-t-0 border-b border-dashed
    border-b-gary-two bg-cream-four px-0 pb-1 text-base font-normal text-gray-three
    placeholder:text-gray-two focus:border-gray-three focus:outline-none focus:ring-0"
    />
    <span class={`${completeClass} ml-5 hidden rounded-full py-0.5 px-2 text-sm
    font-normal text-gray-five md:block
    `}> 
      {todo.complete ? 'complete' : 'In progress'}
    </span>
  </div>
  <button type='button' on:click={()=>deleteTodo(todo.id)} class="group
    ml-4 flex items-center justify-center rounded-md bg-cream-four p-2 hover:bg-steel-one
    focus:outline-none focus-visible:outline-2 focus-visible:outline-green-five
    ">
    <span class="sr-only">Delete todo </span>
    <img class="h-8 w-8 text-steel-three group-hover:text-gray-five" src={bin} alt="delete">
  </button>
</div>


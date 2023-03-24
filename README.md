# 투두리스트 using svelte

베포 링크 : https://svelte-todo-alpha.vercel.app/

## 프로젝트 시작

```
npm i // module 설치
npm run dev //로컬 프로젝트 시작
```


## 알게 된 것

1. react의 map 매소드를 svelte에선 
```
{#each $todos as todo (todo.id)} // as todo는 map매소드의 매개변수와 같고 todo.id는 key값을 넘기는 것과 같다.
{/each}
```
로 작성할 수 있다.



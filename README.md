# π¦μν°λ νλ¦¬μ¨λ³΄λ© μ λ°κ³Όμ 

## νμλ€μ μκ°ν©λλ€.

|λ©€λ²|λ΄λΉ|ν¬λΆ|
|:--|:--|:--|
|[κΉμΉλͺ¨](https://github.com/endmoseung)|νλ‘ νΈμλ| |
|[μμ°μ](https://github.com/dndud2906)|νλ‘ νΈμλ| |
|[μ΄μ’νΈ](https://github.com/devfrank9)|νλ‘ νΈμλ|μνΌμ€ μκ²° μ μ μ€νμμ€ μ»¨νΈλ¦¬λ·°ν° λ¬κΈ°|
|[λ―Όμ κ²½](https://github.com/MINYUKYUNG)|νλ‘ νΈμλ| |
|[κ°λ€ν](https://github.com/KKangdaa)|νλ‘ νΈμλ| |
|[μμ±ν](https://github.com/sasumpi123)|νλ‘ νΈμλ| |

## ν΄λκ΅¬μ‘°

```
root
βββ .prettierrc
βββ .eslint
βββ .env
βββ package-lock.json
βββ package.json
βββ tsconfig.json
βββ public
|   βββ favicon.ico
|   βββ index.html
βββ src
    βββ apis
    βββ components
    βββ hooks
    βββ pages
    βββ routes
    βββ styles
    βββ theme
    βββ types
    βββ App.tsx
    βββ index.tsx
```

## λ°°ν¬λ§ν¬

https://pre-onboarding-hotsix.netlify.app/

## Best Practice

### Api ν¨μ μΈλΆν

1. index.tsμ token, apiClient μ κ°μ κ³΅ν΅ λ³μλ₯Ό μ μΈν get,put λ± λ©μλ μ©λλ³λ‘ λΆλ₯
2. todoApi.ts μ Todoκ΄λ ¨ν get,post,put,delete λ©μλ μ λ¦¬
3. userApi.ts μ μ μ  κ΄λ ¨ν get,post,put,delete λ©μλ μ λ¦¬

### Todoμ μμ± μ·¨μ κΈ°λ₯ μΆκ°

1. μμ±λ ν¬λμ νΈμ§ μ§ν μ€ μ·¨μλ₯Ό λλ₯Όκ²½μ° μλμ ν¬λ μ»¨νμΈ λ‘ fallback

### themesλ‘ μμ£Ό μ°μ΄λ μμ νΈλ€λ§

1. λͺλ£νκ² RED,BLACK,GRAYλ±μ μ¬μ©ν΄μ styled-componentsμ propμΌλ‘ λͺνν μμ μλ ₯ κΈ°λ₯ μΆκ°

### Router κΈ°λ₯ ν΄λ μ λ¦¬

1. private, public λ± ν ν° μ λ¬΄μ λ°λ₯Έ κ²½λ‘ μ κ·Ό μ»΄ν¬λνΈ μ λ¦¬
2. Router.tsxλ₯Ό ν΄λΉ ν΄λμ λΆλ₯

### ν ν°μ λ³΄λ₯Ό apiμμ²­μ λ΄μ ν€λλ‘ λ³΄λΌμ nullλ‘ λ΄κΈ°λ μλ¬ ν΄κ²°

1. 

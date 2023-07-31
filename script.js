// myProducts.filter((item)=>item.title.includes(search.value))

// myCartProductArray = myProducts.filter((item)=> myCartIDs.includes(item.id))

const signupBtn = document.querySelector('#signup-bth')
const loginBtb = document.querySelector('#login-btn')

signupBtn.addEventListener('click',()=>{
    window.location.href = './signup'
})
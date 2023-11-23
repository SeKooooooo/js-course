(function(){
    const GenArray = num => {
        const res = []
        for (let i=1; i<=num; i++){
            res.push(i)
            res.push(i)
        }
        return res
    }
    
    const GetRandomInt = (min, max) => {
        return Math.floor(Math.random()*(max - min) + min)
    }
    
    const MixArray = arr => {
        for (let i = arr.length-1; i>=0; i--){
            let j = GetRandomInt(0,i)
            let cur = arr[i]
            arr[i] = arr[j]
            arr[j] = cur
        }
        return arr
    }
    const createCartsList = () =>{
        const cartsList = document.createElement('div')
        cartsList.classList.add('cartsList')
        return cartsList
    }
    const createCart = num =>{
        const cart = document.createElement('button')
        cart.classList.add('cart')
        cart.classList.add('play')
        const number = document.createElement('div')
        number.textContent = num
        number.classList.add('none')
        cart.append(number)
        return cart
    }
    const createRepeatBtn = () =>{
        const btn = document.createElement('button')
        btn.textContent = 'Сыграть ещё раз'
        btn.classList.add('btn')
        return btn
    }
    function createCarts (container){
        let nums = MixArray(GenArray(8))
        const cartsList = createCartsList()
        nums.forEach(el => cartsList.append(createCart(el)))
        container.append(cartsList)
        const parent = document.querySelector('.cartsList')
        let open = []
        parent.addEventListener('click', function(event){
            const cart = event.target.closest('.play')
            const number = cart?cart.querySelector('div'):null
            if (cart && number.classList.contains('none') && number){
                number.classList.remove('none')
                if (open.length < 1 ){
                    open.push(cart)
                }
                else if (open.length < 2)
                {
                    open.push(cart)
                    if (open[0].textContent ==  cart.textContent){
                        open.forEach(e=> e.classList.remove('play'))
                        open = []
                    }
                }
                else if (open.length == 2){
                    open.forEach(e=> e.querySelector('div').classList.add('none'))
                    open = [cart]
                }
                if (!document.querySelector('.play')){
                    container.append(createRepeatBtn())
                    const btn = document.querySelector('.btn')
                    btn.addEventListener('click', function(){
                        document.querySelector('.cartsList').remove()
                        document.querySelector('.btn').remove()
                        createCarts(document.getElementById('carts'))
                    })
                }
            }
            })
        
        }
    document.addEventListener('DOMContentLoaded', function(){
        createCarts(document.getElementById('carts'))
    })
})()


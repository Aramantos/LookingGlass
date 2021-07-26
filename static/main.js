console.log('hello world')
console.log(document)

const test = document.getElementById('test')
const posts2 = document.getElementById('posts2')
console.log(test)

setTimeout(()=>{
    test.textContent = "How are you doing?"
}, 2000)

$.ajax({
    type: 'GET',
    url: '/posts-json/',
    success: function(response){
        console.log(response.data)
        const data = JSON.parse(response.data)
        console.log(data)
        data.forEach(el=>{
            posts2.innerHTML += `${el.fields.body}<br>`
        })
    },
    error: function(error){
        console.log(error)
    }
})
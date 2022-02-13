//Express bir web frameworkudur.Bir restfulapi ya da web sayfası geliştirme altyapısıdır.

/*express ile server oluşturma:

//express paketi çağırma
const express = require("express")
//expressle uygulama oluştu
const app = express()
//get çağrıları için yazılan kodlar
app.get("/",(req,res) => {    "/" kök dizin
    res.send("Server Çalıştı")
})

//Port Oluşturma
const PORT = 5000
//App i dinleme(server ı )
app.listen(PORT)
*/

//express kütüphanesi çağırıldı.
const express = require("express")
//posts ve users verileri ssyfaya eklendi.
const posts = require("./data/posts.json")
const users = require("./data/users.json")
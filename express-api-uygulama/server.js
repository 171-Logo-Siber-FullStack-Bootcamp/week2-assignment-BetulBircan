//Main yani ana dosyamız server.js
//Biz burada modüler bir yapı kurmayı amaçladık. Amaç ana dosuyada kodların az olması. Diğer örneklerde de oluğu gibi getirmek istediğimiz posts,users ve todos verilerini src kaynal klasöründen server.js e require ile ekleyeceğiz.

//express kütüphanesini sayfaya ekleme
const express = require("express")
//src/controller klasöründeki posts-controller dosyasını buraya ekledik
const postController = require("./src/controllers/posts-controller.js")  

//uygulamayı oluşturma
const app = express()   


//get ile postları çağırma
app.get("/posts", (req, res ) => {
    //controller çağrılması
    var posts = postController.getAllPosts()
    //data return
    res.send(posts)
})

//post taki post/3 deki postu getirme
app.get("/posts/:postId", (req, res) => {
    var post = postController.getByPostId(req.params.postId)
    res.send(post)
})

app.listen(6600)   //server ı dinleme
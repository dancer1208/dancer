            // function change() {
            //     document.body.style.background = document.getElementById("colors").value
            // }
            // document.getElementById("colors").addEventListener("change", function(){
            //     document.body.style.background = document.getElementById("colors").value                
            // })
                    // function change() {
            //     document.body.style.background = document.getElementById("colors").value
            // }
            
            // 物件分配法
            document.getElementById("colors").addEventListener("change",function(){
                document.body.style.background = document.getElementById("colors").value;
            })
            // document.getElementById("colors").addEventListener("change", function(){
                //     document.body.style.background = document.getElementById("colors").value
                // })
            // document.getElementById("colors").addEventListener("change",()=>{
            //         document.body.style.background = document.getElementById("colors").value;
            //     })
            document.getElementById("btn1").addEventListener("click",function(){
                document.body.style.background = "springgreen";
                document.getElementById("demo").innerHTML = "";
            })
            // document.getElementById("btn1").addEventListener("click",function(){
            //     document.getElementById("demo").innerHTML = "test";
            // })
            // document.getElementById("btn1").addEventListener("mouseover",function(){
            //     document.getElementById("demo").innerHTML = "test";
            // });
            document.getElementById("btn1").addEventListener("mousemove",function(){
                document.getElementById("demo").innerHTML = "ttest";
                document.body.style.background = "transparent";
            });

window.onload = function () {
    getApithree()
}


function getApithree() {
    $.ajax({
        type: "POST", //为get请求
        url: "http://d.babbitt.vip/daily_paper", //请求的后台接口
        dataType: "json", //返回数据为json 格式
        error: function (msg) {
            console.log("错误" + msg)
        },
        success: function (res) { // 请求成功之后
            $(".classusern").remove();
            //领导******
            console.log(res)
            let num = res.position
            // console.log(num)
            // 谢江生
            if (num[4].status == 0) {
                let zhu =
                    `<span id='hui' class='classuser${num[4].name}  '>` + num[4].name +
                    "<span id='xuhao'>" + num[4].month_count + "</span>" +
                    "</span>"
                $("#leader2").html(zhu)
            } else if (num[4].status == 1) {
                let zhu =
                `<span class='classuser${num[4].name} '>` + num[4].name +
                    "<span id='xuhao'>" + num[4].month_count + "</span>" +
                    "</span>"

                $("#leader2").html(zhu)
            }
            // 王涛
            if (num[3].status == 0) {
                let zhu =
                `<span id='hui' class='classuser${num[3].name} '>` + num[3].name +
                    "<span id='xuhao'>" + num[3].month_count + "</span>" +
                    "</span>"
                $("#leader4").html(zhu)
            } else if (num[3].status == 1) {
                let zhu =
                `<span class='classuser${num[3].name} '>` + num[3].name +
                    "<span id='xuhao'>" + num[3].month_count + "</span>" +
                    "</span>"

                $("#leader4").html(zhu)
            }
            //雷向前
            if (num[2].status == 0) {
                let zhu =
                `<span id='hui' class='classuser${num[2].name} '>` + num[2].name +
                    "<span id='xuhao'>" + num[2].month_count + "</span>" +
                    "</span>"
                $("#leader5").html(zhu)
            } else if (num[2].status == 1) {
                let zhu =
                `<span class='classuser${num[2].name} '>` + num[2].name +
                    "<span id='xuhao'>" + num[2].month_count + "</span>" +
                    "</span>"

                $("#leader5").html(zhu)
            }
            //任磊
            if (num[0].status == 0) {
                let zhu =
                `<span id='hui' class='classuser${num[0].name} '>` + num[0].name +
                    "<span id='xuhao'>" + num[0].month_count + "</span>" +
                    "</span>"
                $("#leader6").html(zhu)
            } else if (num[0].status == 1) {
                let zhu =
                `<span class='classuser${num[0].name} '>` + num[0].name +
                    "<span id='xuhao'>" + num[0].month_count + "</span>" +
                    "</span>"

                $("#leader6").html(zhu)
            }
            //张成建
            if (num[1].status == 0) {
                let zhu =
                `<span id='hui' class='classuser${num[1].name} '>` + num[1].name +
                    "<span id='xuhao'>" + num[1].month_count + "</span>" +
                    "</span>"
                $("#leader7").html(zhu)
            } else if (num[1].status == 1) {
                let zhu =
                `<span class='classuser${num[1].name} '>` + num[1].name +
                    "<span id='xuhao'>" + num[1].month_count + "</span>" +
                    "</span>"

                $("#leader7").html(zhu)
            }

            //领导******

            //主管办公室*****   
            let data1 = res.content_list["6"]//主管办公室
            // console.log(res.content_list)
            data1.forEach(function (i) {
                // console.log(i.name)
                if (i.status == 0) {
                    let zhu =  
                    `<span id='hui' class='classuser${i.name} '>` + i.name + "<span id='xuhao'>" + i.month_count + "</span>" + "</span>"
                    $("#names").append(zhu)
                } else if (i.status == 1) {
                    let zhu =`<span id='hui' class='classuser${i.name} '>` + i.name + "<span id='xuhao'>" + i.month_count + "</span>" + "</span>"
                    $("#names").append(zhu)
                }
            })
            let data2 = res.content_list["0"]//财务管理组
            data2.forEach(function (i) {
                // console.log(i.name)
                if (i.status == 0) {
                    let zhu = `<span id='hui' class='classuser${i.name} '>` + i.name + "<span id='xuhao'>" + i.month_count + "</span>" + "</span>"
                    $("#names1").append(zhu)
                } else if (i.status == 1) {
                    let zhu = `<span id='hui' class='classuser${i.name} '>`+ i.name + "<span id='xuhao'>" + i.month_count + "</span>" + "</span>"
                    $("#names1").append(zhu)
                }
            })
            let data3 = res.content_list["5"]//综合服务组
            data3.forEach(function (i) {
                // console.log(i.name)
                if (i.status == 0) {
                    let zhu = `<span id='hui' class='classuser${i.name} '>` + i.name + "<span id='xuhao'>" + i.month_count + "</span>" + "</span>"
                    $("#names2").append(zhu)
                } else if (i.status == 1) {
                    let zhu = `<span id='hui' class='classuser${i.name} '>` + i.name + "<span id='xuhao'>" + i.month_count + "</span>" + "</span>"
                    $("#names2").append(zhu)
                }
            })
            // let data4 = res.content_list[""]//人力资源组
            // data4.forEach(function(i){
            //     // console.log(i.name)
            //     if(i.status == 0){
            //     let zhu = "<span id='hui'>"+ i.name + "<span id='xuhao'>" + i.month_count + "</span>"+"</span>"
            //     $("#names3").append(zhu)
            //     }else if(i.status == 1){
            //         let zhu1 = "<span>"+ i.name + "<span id='xuhao'>" + i.month_count + "</span>"+"</span>"
            //         $("#names3").append(zhu)
            //     }
            // })
            let data5 = res.content_list["4"]//品牌策划组
            data5.forEach(function (i) {
                // console.log(i.name)
                if (i.status == 0) {
                    let zhu = `<span id='hui' class='classuser${i.name} '>`+ i.name + "<span id='xuhao'>" + i.month_count + "</span>" + "</span>"
                    $("#names4").append(zhu)
                } else if (i.status == 1) {
                    let zhu = `<span id='hui' class='classuser${i.name} '>` + i.name + "<span id='xuhao'>" + i.month_count + "</span>" + "</span>"
                    $("#names4").append(zhu)
                }
            })
            let data6 = res.content_list["3"]//信息技术组
            data6.forEach(function (i) {
                // console.log(i.name)
                if (i.status == 0) {
                    let zhu = `<span id='hui' class='classuser${i.name} '>` + i.name + "<span id='xuhao'>" + i.month_count + "</span>" + "</span>"
                    $("#names5").append(zhu)
                } else if (i.status == 1) {
                    let zhu =`<span id='hui' class='classuser${i.name} '>` + i.name + "<span id='xuhao'>" + i.month_count + "</span>" + "</span>"
                    $("#names5").append(zhu)
                }
            })
            let data7 = res.content_list["1"]//生产研发组
            data7.forEach(function (i) {
                // console.log(i.name)
                if (i.status == 0) {
                    let zhu = `<span id='hui' class='classuser${i.name} '>` + i.name + "<span id='xuhao'>" + i.month_count + "</span>" + "</span>"
                    $("#names6").append(zhu)
                } else if (i.status == 1) {
                    let zhu = `<span id='hui' class='classuser${i.name} '>` + i.name + "<span id='xuhao'>" + i.month_count + "</span>" + "</span>"
                    $("#names6").append(zhu)
                }
            })
            let data8 = res.content_list["2"]//市场营销组
            data8.forEach(function (i) {
                // console.log(i.name)
                var name7 =  $("#names7")
                console.log(name7)
                // if(i != name7){
                    if (i.status == 0) {
                        let zhu = `<span id='hui' class='classuser${i.name} '>` + i.name + "<span id='xuhao'>" + i.month_count + "</span>" + "</span>"
                        $("#names7").append(zhu)
                    } else if (i.status == 1) {
                        let zhu = `<span id='hui' class='classuser${i.name} '>` + i.name + "<span id='xuhao'>" + i.month_count + "</span>" + "</span>"
                        $("#names7").append(zhu)
                    }
                // }else{
                    // break
                // }
            })
        }
    })
    var spans = document.querySelectorAll(".rights ul li div")
    spans = "" 
    // console.log(spans.span)
    setTimeout(getApithree, 1000000);

}
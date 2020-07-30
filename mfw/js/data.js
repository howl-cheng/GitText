define(["jquery"],function($){
    function download(){
        $.ajax({
            url:"../data/indexData.json",
            success:function(arr){
                var arr1 = arr[0];
                for(let i = 0;i < arr1.length;i++) {
                    $(`<div class="tn-list-item-box"> 
                    <div class="tn-list-item clear_fix">
                    <a class="imgBox" href="#"><img src="${arr1[i].img}" alt="#"></a>
                    <div class="wrapperBox">
                        <dl>
                            <dt>
                                <a href="#">${arr1[i].title}</a>
                            </dt>
                            <dd> 
                                <a href="#">${arr1[i].text}</a>
                            </dd>
                        </dl>
                        <div class="extraBox">
                            <span class="tn-place">
                                <i></i>
                                <a href="#">${arr1[i].place}</a>，by
                            </span>
                            <span class="tn-user">
                                <a href="#"><img src="${arr1[i].userImag}" alt="">
                                    ${arr1[i].userName}
                                </a>
                            </span>
                            <span class="tn-num">
                                <i></i>
                                ${arr1[i].number}
                            </span>
                            <span class="tn-ding">
                                <a href="#"></a>
                                <em>${arr1[i].ding}</em>
                            </span>
                        </div>
                    </div>
                </div>
                </div>`).appendTo(".tn-list");
                }
            },
            error:function(msg){
                console.log(msg);
            },

        });
    }
    function download1(){
        $.ajax({
            url:"../data/indexData.json",
            success:function(arr){
                var arr4 = arr[3];
                for(let i = 0;i < arr4.length;i++) {
                    $(`<div class="tn-list-item-box"> 
                    <div class="tn-list-item clear_fix">
                    <a class="imgBox" href="#"><img src="${arr4[i].img}" alt="#"></a>
                    <div class="wrapperBox">
                        <dl>
                            <dt>
                                <a href="#">${arr4[i].title}</a>
                            </dt>
                            <dd> 
                                <a href="#">${arr4[i].text}</a>
                            </dd>
                        </dl>
                        <div class="extraBox">
                            <span class="tn-place">
                                <i></i>
                                <a href="#">${arr4[i].place}</a>，by
                            </span>
                            <span class="tn-user">
                                <a href="#"><img src="${arr4[i].userImag}" alt="">
                                    ${arr4[i].userName}
                                </a>
                            </span>
                            <span class="tn-num">
                                <i></i>
                                ${arr4[i].number}
                            </span>
                            <span class="tn-ding">
                                <a href="#"></a>
                                <em>${arr4[i].ding}</em>
                            </span>
                        </div>
                    </div>
                </div>
                </div>`).appendTo(".tn-list-new");
                }
            },
            error:function(msg){
                console.log(msg);
            },

        });
    }
    function bannerData(){
        $.ajax({
            url:"../data/indexData.json",
            success:function(arr){
                var arr2 = arr[1];
                for(let j = 0;j < arr2.length;j++){
                    $(`
                    <li>
                    <img src="${arr2[j].imag}" alt="">
                    <h2> <a href="#">${arr2[j].h2}</a></h2>
                    <p>${arr2[j].artical}</p>
                    </li> 
                    `).appendTo(".img-Box");
                }
            },
            error:function(msg){
                console.log(msg);
            },
        });
    }
    
    function newsData(){
        $.ajax({
            url:"../data/indexData.json",
            success:function(arr){
                var arr3 = arr[2];
                for(let i = 0; i < arr3.length;i++){
                    $(`<li>${arr3[i].data}&nbsp;&nbsp;<a href="#">${arr3[i].text}</a></li>`).appendTo(".newsBox");
                }
            },
            error:function(msg){
                console.log(msg)
            }
        })
    }
    return{
        download:download,
        bannerData:bannerData,
        newsData:newsData,
        download1:download1
    }
})
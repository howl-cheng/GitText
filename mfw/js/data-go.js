define(["jquery"],function($){
    function download(){
        $.ajax({
            url:"../data/goTravel.json",
            success:function(arr){
                for(var i = 0;i < arr.length; i++){
                    $(`<div class="mod-hd">
                    <a href="#"><h2>${arr[i].title}</h2></a>
                    <h2><span>大家都在买</span></h2>
                    <a href="#" class="mod-change"><i></i> 换一换</a>
                    </div>
                <div class="mod-bd">
                    <ul class="sales-cards${arr[i].id} clear_fix">
                        
                    </ul>
                </div>
                `).appendTo(".mod-promo");
                    var subtext = arr[i].subtext;
                    for(var j = 0;j < subtext.length;j++){
                        $(`
                        <li class="item" >
                                <a href="./goods.html" target="_blank" class="item-box" id="${subtext[j].id}">
                                    <div class="image">
                                        <img src="${subtext[j].img}" alt="">
                                    </div>
                                    <div class="caption">
                                        <h3>${subtext[j].text}</h3>
                                    </div>
                                    <div class="price-box">
                                        <span class="price">
                                            <b>${subtext[j].price}</b>
                                            起
                                        </span>
                                        <span style="float: right;padding-top: 8px;font-size: 12px; color: #666;">店铺:${subtext[j].shop}</span>
                                    </div>
                                </a>
                            </li>
                        `).appendTo(`.sales-cards${arr[i].id}`);
                    }
                }
            },
            error:function(msg){
                console.log(msg);
            }

        })
    }
    return {
        download:download
    }
})
$(function(){function o(o,e,n){return"M -"+o/2+" "+e/2+"l "+o/2+" -"+e+" l "+o/2+" "+e+" q -"+o/2+" -"+n+" -"+o+" 0"}function e(o){var e=$("<div />").addClass("info_bubble").append($("<div />").addClass("img").append($("<img />").attr("src",o.src).attr("alt",o.title).attr("alt",o.title)).append($("<div />").addClass("title").text(o.title))).append(o.items.length?$("<div />").addClass("items").append(o.items.map(function(o){return $("<div />").addClass("item").html(o.item)})):null).append($("<div />").addClass("delete").html("&#10006;").click(function(){o.infoWindow.close(),ga("send","event","i-ko_map-21ni","close_info_window")}));o.infoWindow.setContent(e.get(0)),o.infoWindow.open(t,o.marker)}function n(o){var e=Math.pow(10,2);L.find(".map .d").addClass("show").find("span").text(Math.round(google.maps.geometry.spherical.computeLength(o)/1e3*e)/e)}function g(o,n,g,a,l,s){if(p.push(o),window["markers_"+o]=a.map(function(n){return n.marker=new google.maps.Marker({draggable:!1,position:n.latLng,icon:n.icon}),n.infoWindow=new InfoBubble({margin:0,padding:0,content:"",arrowStyle:0,borderWidth:1,shadowStyle:1,borderRadius:2,minWidth:"auto",maxWidth:"auto",minHeight:"auto",maxHeight:"auto",borderColor:"rgba(39, 40, 34, .7)",backgroundClassName:""}),google.maps.event.addListener(n.marker,"click",function(){window["markers_"+o].forEach(function(o){o.infoWindow.close()}),e(n),ga("send","event","i-ko_map-21ni","click_marker",n.title)}),n}),window["line_"+o]=new google.maps.Polyline({path:g,strokeColor:s,icons:n.map(function(o){return{icon:o,offset:"0%"}})}),window["line_"+o].setMap(t),window["markers_"+o].forEach(function(o){o.marker.setMap(t),o.infoWindow.close()}),t){var L=0;window["interval_"+o]=setInterval(function(){var e=window["line_"+o].get("icons").map(function(o){return o.offset=L*l+"%",o});window["line_"+o].set("icons",e),L=(L+1)%(100/l)},100)}}function a(){var e=(s.is(":visible")?parseFloat(s.height())+parseFloat(s.css("padding-top"))+parseFloat(s.css("padding-bottom")):0)+parseFloat(L.css("margin-top"))+parseFloat(i.css("margin-top"))+parseFloat(i.css("padding-top"))+parseFloat(i.find(".oa-jelly").height());L.css({height:"calc(100% - "+e+"px)"});var a=17,p=new google.maps.LatLng(23.567596231491233,120.3035703338623);$(window).width()<560&&(a=16,p=new google.maps.LatLng(23.567096231491234,120.3030703338623));var m={zoom:a,scaleControl:!0,navigationControl:!1,mapTypeControl:!1,zoomControl:!0,scrollwheel:!0,streetViewControl:!1,center:p};t=new google.maps.Map(l.get(0),m);var w=[{path:o(9,14,6),strokeColor:"rgba(50, 60, 140, 1)",strokeWeight:1,fillColor:"rgba(68, 77, 145, .85)",fillOpacity:1},{path:o(4.2,6.9,2.5),strokeColor:"rgba(255, 255, 255, 1)",strokeWeight:1,fillColor:"rgba(255, 255, 255, 1)",fillOpacity:1},{path:o(4.2,6.9,2.5),strokeColor:"rgba(255, 255, 255, 1)",strokeWeight:1,fillColor:"rgba(223, 93, 84, 1)",fillOpacity:1}],r=[new google.maps.LatLng(23.56760852390708,120.30456975102425),new google.maps.LatLng(23.567158006115104,120.30448995530605),new google.maps.LatLng(23.56642414435683,120.30436791479588),new google.maps.LatLng(23.566212098110437,120.30433237552643),new google.maps.LatLng(23.566174175500063,120.30433295836451),new google.maps.LatLng(23.565277861296344,120.30415400862694),new google.maps.LatLng(23.56454337439903,120.3040198981762),new google.maps.LatLng(23.56436943254911,120.30492782592773),new google.maps.LatLng(23.56514510078885,120.3050485253334),new google.maps.LatLng(23.565515723536738,120.30514106154442),new google.maps.LatLng(23.566042460866832,120.3052356094122),new google.maps.LatLng(23.56645917805155,120.30533351004124),new google.maps.LatLng(23.56654338180591,120.30534222722054),new google.maps.LatLng(23.566707486777894,120.3053817898035),new google.maps.LatLng(23.566991443211396,120.30543208122253),new google.maps.LatLng(23.567306130143532,120.30550181865692),new google.maps.LatLng(23.567626962528667,120.30554607510567),new google.maps.LatLng(23.567767095968232,120.30563794076443),new google.maps.LatLng(23.56833623287466,120.30601613223553),new google.maps.LatLng(23.568403226149567,120.30608117580414),new google.maps.LatLng(23.56853291028192,120.3061817586422),new google.maps.LatLng(23.568593142678978,120.30621260404587),new google.maps.LatLng(23.568704388156025,120.30621528625488),new google.maps.LatLng(23.568738192011608,120.30620388686657),new google.maps.LatLng(23.569968646432393,120.30587263405323),new google.maps.LatLng(23.57030606673451,120.304931178689),new google.maps.LatLng(23.57046893779052,120.30452013015747),new google.maps.LatLng(23.5708192635284,120.3035619109869),new google.maps.LatLng(23.57003748270285,120.30322127044201),new google.maps.LatLng(23.569270447936063,120.30284911394119),new google.maps.LatLng(23.569113903486112,120.30319838395121),new google.maps.LatLng(23.56884021814113,120.30384823679924),new google.maps.LatLng(23.568457927055142,120.30453354120255),new google.maps.LatLng(23.56847390709066,120.30467569828033),new google.maps.LatLng(23.56845301012074,120.30481718480587),new google.maps.LatLng(23.568371880676576,120.30489966273308),new google.maps.LatLng(23.568303043533145,120.30493050813675),new google.maps.LatLng(23.56822129937846,120.30494257807732),new google.maps.LatLng(23.568092844175442,120.30494123697281),new google.maps.LatLng(23.5679693057995,120.3049224615097),new google.maps.LatLng(23.567845767307354,120.30489765107632),new google.maps.LatLng(23.567757262047525,120.30487284064293),new google.maps.LatLng(23.567713009395245,120.3048326075077),new google.maps.LatLng(23.56765707893837,120.30474878847599),new google.maps.LatLng(23.56761344087308,120.3046153485775),new google.maps.LatLng(23.567607294665553,120.30458316206932),new google.maps.LatLng(23.567156162246466,120.30450470745564),new google.maps.LatLng(23.566421685851584,120.30438132584095),new google.maps.LatLng(23.566191200780654,120.304344445467),new google.maps.LatLng(23.566210868855823,120.30421234667301),new google.maps.LatLng(23.566248361115964,120.30394412577152),new google.maps.LatLng(23.56635960857895,120.30335806310177),new google.maps.LatLng(23.566375588869764,120.30326887965202),new google.maps.LatLng(23.566430290619753,120.30283905565739),new google.maps.LatLng(23.566489909355017,120.30249707400799),new google.maps.LatLng(23.566552601191805,120.30207328498363),new google.maps.LatLng(23.56672162315166,120.30109025537968),new google.maps.LatLng(23.567161079229415,120.30113518238068),new google.maps.LatLng(23.567194268859495,120.30113853514194),new google.maps.LatLng(23.567247741023657,120.30113518238068),new google.maps.LatLng(23.567660766661543,120.30117273330688),new google.maps.LatLng(23.56772714566077,120.30118346214294),new google.maps.LatLng(23.568519388719587,120.30130818486214),new google.maps.LatLng(23.568517727397765,120.30137649347785),new google.maps.LatLng(23.568543541288573,120.30145293643477),new google.maps.LatLng(23.568589205402603,120.30149844627385),new google.maps.LatLng(23.568648458121327,120.30152544379234),new google.maps.LatLng(23.56872405585488,120.30151940882206),new google.maps.LatLng(23.568775068935036,120.30149325728416),new google.maps.LatLng(23.568821165074763,120.30144296586514),new google.maps.LatLng(23.569655809712984,120.3018157929182),new google.maps.LatLng(23.569751689022482,120.30154824256897),new google.maps.LatLng(23.56999446003805,120.30091859400272),new google.maps.LatLng(23.57019851026602,120.30036941170692),new google.maps.LatLng(23.57028762848903,120.30018165707588),new google.maps.LatLng(23.570462791716615,120.29968544840813),new google.maps.LatLng(23.571427107196488,120.29994159936905)],d=[{latLng:r[0],icon:"img/icon/spotlight-poi_hdpi.png",src:"img/site/i-ko/start.jpg",title:"歲次乙未年 廿一晚間遊行出發",items:[{item:"農曆三月廿一晚間遊行出發"}]},{latLng:r[r.length-1],icon:"img/icon/spotlight-poi_hdpi.png",src:"img/site/i-ko/end.jpg",title:"歲次乙未年 廿一晚間遊行休息",items:[{item:"農曆三月廿一晚間遊行休息"}]}];g("21ni",w,r,d,.5,"rgba(0, 130, 0, 1)"),$("#loading").fadeOut(function(){$(this).hide(function(){$(this).remove()})}),setTimeout(n.bind(this,r),1800)}var t=null,l=null,s=$("#sub_items"),L=$("#container"),i=$("#pagination"),p=[];l=$("#map"),google.maps.event.addDomListener(window,"load",a)});
(function(){"use strict";var t={7927:function(t,e,a){var s=a(5130),n=a(6768),l=a(4232);function r(t,e,a,s,r,i){const d=(0,n.g2)("router-view");return(0,n.uX)(),(0,n.CE)("div",{id:"app",style:(0,l.Tr)(r.image)},[(0,n.bF)(d)],4)}var i={data(){return{image:{backgroundImage:"url('"+a(732)+"')",backgroundPosition:"right bottom",backgroundRepeat:"no-repeat",backgroundAttachment:"fixed",backgroundSize:"cover !important",display:"block"}}}},d=a(1241);const o=(0,d.A)(i,[["render",r]]);var _=o,u=a(6517),g=(a(4188),a(973));const c=["src"];function h(t,e,a,s,l,r){const i=(0,n.g2)("SmartChickenCoop"),d=(0,n.g2)("el-col"),o=(0,n.g2)("BlackSoldierFlyGreenhouse"),_=(0,n.g2)("el-row"),u=(0,n.g2)("IntelligentGreenhouse"),g=(0,n.g2)("WeatherStation");return(0,n.uX)(),(0,n.CE)("div",null,[(0,n.bF)(_,{gutter:10},{default:(0,n.k6)((()=>[(0,n.bF)(d,{xs:24,sm:24,md:12,lg:12,xl:12},{default:(0,n.k6)((()=>[(0,n.Lk)("div",null,[(0,n.bF)(i)])])),_:1}),(0,n.bF)(d,{xs:24,sm:24,md:12,lg:12,xl:12},{default:(0,n.k6)((()=>[(0,n.Lk)("div",null,[(0,n.bF)(o)])])),_:1})])),_:1}),(0,n.bF)(_,{gutter:10},{default:(0,n.k6)((()=>[(0,n.bF)(d,{xs:24,sm:24,md:12,lg:12,xl:12},{default:(0,n.k6)((()=>[(0,n.Lk)("div",null,[(0,n.bF)(u)])])),_:1}),(0,n.bF)(d,{xs:24,sm:24,md:12,lg:12,xl:12},{default:(0,n.k6)((()=>[(0,n.Lk)("div",null,[(0,n.bF)(g)])])),_:1}),(0,n.bF)(d,{xs:24,sm:24,md:12,lg:12,xl:12},{default:(0,n.k6)((()=>e[0]||(e[0]=[(0,n.Lk)("span",{class:"grid-content"},null,-1)]))),_:1}),(0,n.bF)(d,{xs:24,sm:24,md:12,lg:12,xl:12},{default:(0,n.k6)((()=>[(0,n.bF)(_,{type:"flex",class:"row-bg",justify:"center"},{default:(0,n.k6)((()=>[(0,n.bF)(d,{xs:8,sm:6,md:7,lg:6,xl:4},{default:(0,n.k6)((()=>e[1]||(e[1]=[(0,n.Lk)("span",{class:"grid-content"},"北斗國中",-1)]))),_:1}),(0,n.bF)(d,{xs:6,sm:3,md:5,lg:3,xl:4},{default:(0,n.k6)((()=>[(0,n.Lk)("img",{class:"grid-content",src:l.image},null,8,c)])),_:1}),(0,n.bF)(d,{xs:8,sm:6,md:7,lg:6,xl:4},{default:(0,n.k6)((()=>e[2]||(e[2]=[(0,n.Lk)("span",{class:"grid-content"},"氣象數據",-1)]))),_:1})])),_:1})])),_:1})])),_:1})])}const k={class:"SmartChickenCoop"},p={class:"grid-content bg-2-dark",style:{height:"40px","line-height":"40px"}},b={class:"grid-content bg-2-light"},m={class:"grid-content bg-2-dark",style:{height:"40px","line-height":"40px"}},v={class:"grid-content bg-2-light"};function f(t,e,a,s,r,i){const d=(0,n.g2)("Header"),o=(0,n.g2)("el-col"),_=(0,n.g2)("el-row");return(0,n.uX)(),(0,n.CE)("div",k,[(0,n.bF)(d,{inputTitle:r.title,class:"bg-2-dark-header"},null,8,["inputTitle"]),(0,n.bF)(_,{gutter:10},{default:(0,n.k6)((()=>[(0,n.bF)(o,{span:24},{default:(0,n.k6)((()=>[(0,n.Lk)("div",p,(0,l.v_)(r.air_sensor_1.title),1)])),_:1})])),_:1}),(0,n.bF)(_,{gutter:10},{default:(0,n.k6)((()=>[(0,n.bF)(o,{span:4},{default:(0,n.k6)((()=>e[0]||(e[0]=[(0,n.Lk)("div",{class:"grid-content bg-2-dark"},"溫度",-1)]))),_:1}),(0,n.bF)(o,{span:8},{default:(0,n.k6)((()=>[(0,n.Lk)("div",{class:"grid-content bg-2-light",style:(0,l.Tr)([r.air_sensor_1.temp>40?r.alert_high:r.air_sensor_1.temp<10?r.alert_low:r.normal])},[(0,n.eW)((0,l.v_)(r.air_sensor_1.temp),1),e[1]||(e[1]=(0,n.Lk)("span",{class:"unit"},"°C",-1))],4)])),_:1}),(0,n.bF)(o,{span:4},{default:(0,n.k6)((()=>e[2]||(e[2]=[(0,n.Lk)("div",{class:"grid-content bg-2-dark"},"濕度",-1)]))),_:1}),(0,n.bF)(o,{span:8},{default:(0,n.k6)((()=>[(0,n.Lk)("div",{class:"grid-content bg-2-light",style:(0,l.Tr)([r.air_sensor_1.humd<40?r.alert_high:r.air_sensor_1.humd>90?r.alert_low:r.normal])},[(0,n.eW)((0,l.v_)(r.air_sensor_1.humd),1),e[3]||(e[3]=(0,n.Lk)("span",{class:"unit"},"%RH",-1))],4)])),_:1})])),_:1}),(0,n.bF)(_,{gutter:10},{default:(0,n.k6)((()=>[(0,n.bF)(o,{span:8},{default:(0,n.k6)((()=>e[4]||(e[4]=[(0,n.Lk)("div",{class:"grid-content bg-2-dark"},"光度",-1)]))),_:1}),(0,n.bF)(o,{span:16},{default:(0,n.k6)((()=>[(0,n.Lk)("div",b,[(0,n.eW)((0,l.v_)(r.air_sensor_1.lux),1),e[5]||(e[5]=(0,n.Lk)("span",{class:"unit"},"lux",-1))])])),_:1})])),_:1}),(0,n.bF)(_,{gutter:10},{default:(0,n.k6)((()=>[(0,n.bF)(o,{span:24},{default:(0,n.k6)((()=>[(0,n.Lk)("div",m,(0,l.v_)(r.air_sensor_2.title),1)])),_:1})])),_:1}),(0,n.bF)(_,{gutter:10},{default:(0,n.k6)((()=>[(0,n.bF)(o,{span:4},{default:(0,n.k6)((()=>e[6]||(e[6]=[(0,n.Lk)("div",{class:"grid-content bg-2-dark"},"溫度",-1)]))),_:1}),(0,n.bF)(o,{span:8},{default:(0,n.k6)((()=>[(0,n.Lk)("div",{class:"grid-content bg-2-light",style:(0,l.Tr)([r.air_sensor_2.temp>40?r.alert_high:r.air_sensor_2.temp<10?r.alert_low:r.normal])},[(0,n.eW)((0,l.v_)(r.air_sensor_2.temp),1),e[7]||(e[7]=(0,n.Lk)("span",{class:"unit"},"°C",-1))],4)])),_:1}),(0,n.bF)(o,{span:4},{default:(0,n.k6)((()=>e[8]||(e[8]=[(0,n.Lk)("div",{class:"grid-content bg-2-dark"},"濕度",-1)]))),_:1}),(0,n.bF)(o,{span:8},{default:(0,n.k6)((()=>[(0,n.Lk)("div",{class:"grid-content bg-2-light",style:(0,l.Tr)([r.air_sensor_2.humd<40?r.alert_high:r.air_sensor_2.humd>90?r.alert_low:r.normal])},[(0,n.eW)((0,l.v_)(r.air_sensor_2.humd),1),e[9]||(e[9]=(0,n.Lk)("span",{class:"unit"},"%RH",-1))],4)])),_:1})])),_:1}),(0,n.bF)(_,{gutter:10},{default:(0,n.k6)((()=>[(0,n.bF)(o,{span:8},{default:(0,n.k6)((()=>e[10]||(e[10]=[(0,n.Lk)("div",{class:"grid-content bg-2-dark"},"光度",-1)]))),_:1}),(0,n.bF)(o,{span:16},{default:(0,n.k6)((()=>[(0,n.Lk)("div",v,[(0,n.eW)((0,l.v_)(r.air_sensor_2.lux),1),e[11]||(e[11]=(0,n.Lk)("span",{class:"unit"},"lux",-1))])])),_:1})])),_:1}),(0,n.bF)(_,null,{default:(0,n.k6)((()=>[(0,n.bF)(o,{style:{"font-size":"0.8rem !important",height:"10px","line-height":"10px","text-align":"right"}},{default:(0,n.k6)((()=>[(0,n.eW)(" 更新時間:"+(0,l.v_)(r.updateTime),1)])),_:1})])),_:1})])}var F=a(4373);const L=F.A.create({baseURL:"/api",headers:{"Content-Type":"application/json"}}),x=t=>L.get("/Smart_Air_Sensor",{params:{FIELD_ID:t}}),T=()=>L.get("/Smart_PM_Sensor",{}),w=t=>L.get("/Smart_Soil_Sensor",{params:{FIELD_ID:t}}),y=()=>L.get("/Smart_Wather_Station_Sensor",{}),W={class:"header"},D={class:"grid-content"};function I(t,e,a,s,r,i){const d=(0,n.g2)("el-col"),o=(0,n.g2)("el-row");return(0,n.uX)(),(0,n.CE)("div",W,[(0,n.bF)(o,{gutter:10,type:"flex",justify:"end"},{default:(0,n.k6)((()=>[(0,n.bF)(d,{span:24},{default:(0,n.k6)((()=>[(0,n.Lk)("div",D,(0,l.v_)(a.inputTitle),1)])),_:1})])),_:1})])}var S={props:{inputTitle:String},data(){return{}},computed:{},methods:{},watch:{},mounted(){}};const C=(0,d.A)(S,[["render",I],["__scopeId","data-v-cd624c00"]]);var H=C,E={components:{Header:H},data(){return{alert_high:{color:"red"},alert_low:{color:"blue"},normal:{color:"black"},title:"智慧雞舍",air_sensor_1:{title:"溫濕光1",temp:0,humd:0,lux:0},air_sensor_2:{title:"溫濕光2",temp:0,humd:0,lux:0},getDataInterval:null,updateTime:"-"}},computed:{},methods:{getTempRhData(){x("雞舍").then((t=>{this.air_sensor_1.temp=t.data[0].TEMP,this.air_sensor_1.humd=t.data[0].HUMD,this.air_sensor_1.lux=t.data[0].LUX,this.air_sensor_2.temp=t.data[1].TEMP,this.air_sensor_2.humd=t.data[1].HUMD,this.air_sensor_2.lux=t.data[1].LUX,this.updateTime=(new Date).toLocaleString("sv")})).catch((t=>{console.log(t)}))}},mounted(){clearInterval(this.getDataInterval),this.getTempRhData(),this.getDataInterval=setInterval(this.getTempRhData,3e5)},beforeUnmount(){clearInterval(this.getDataInterval)}};const M=(0,d.A)(E,[["render",f],["__scopeId","data-v-60ade640"]]);var P=M;const R={class:"BlackSoldierFlyGreenhouse"},U={class:"grid-content bg-4-dark",style:{height:"40px","line-height":"40px"}},O={class:"grid-content bg-4-light"},j={class:"grid-content bg-4-dark",style:{height:"40px","line-height":"40px"}},X={class:"grid-content bg-4-light"},A={class:"grid-content bg-4-dark",style:{height:"40px","line-height":"40px"}},G={class:"grid-content bg-4-light"};function z(t,e,a,s,r,i){const d=(0,n.g2)("Header"),o=(0,n.g2)("el-col"),_=(0,n.g2)("el-row");return(0,n.uX)(),(0,n.CE)("div",R,[(0,n.bF)(d,{inputTitle:r.title,class:"bg-4-dark-header"},null,8,["inputTitle"]),(0,n.bF)(_,{gutter:10},{default:(0,n.k6)((()=>[(0,n.bF)(o,{span:24},{default:(0,n.k6)((()=>[(0,n.Lk)("div",U,(0,l.v_)(r.air_sensor_1.title),1)])),_:1})])),_:1}),(0,n.bF)(_,{gutter:10},{default:(0,n.k6)((()=>[(0,n.bF)(o,{span:4},{default:(0,n.k6)((()=>e[0]||(e[0]=[(0,n.Lk)("div",{class:"grid-content bg-4-dark"},"溫度",-1)]))),_:1}),(0,n.bF)(o,{span:8},{default:(0,n.k6)((()=>[(0,n.Lk)("div",{class:"grid-content bg-4-light",style:(0,l.Tr)([r.air_sensor_1.temp>40?r.alert_high:r.air_sensor_1.temp<10?r.alert_low:r.normal])},[(0,n.eW)((0,l.v_)(r.air_sensor_1.temp),1),e[1]||(e[1]=(0,n.Lk)("span",{class:"unit"},"°C",-1))],4)])),_:1}),(0,n.bF)(o,{span:4},{default:(0,n.k6)((()=>e[2]||(e[2]=[(0,n.Lk)("div",{class:"grid-content bg-4-dark"},"濕度",-1)]))),_:1}),(0,n.bF)(o,{span:8},{default:(0,n.k6)((()=>[(0,n.Lk)("div",{class:"grid-content bg-4-light",style:(0,l.Tr)([r.air_sensor_1.humd<40?r.alert_high:r.air_sensor_1.humd>90?r.alert_low:r.normal])},[(0,n.eW)((0,l.v_)(r.air_sensor_1.humd),1),e[3]||(e[3]=(0,n.Lk)("span",{class:"unit"},"%RH",-1))],4)])),_:1})])),_:1}),(0,n.bF)(_,{gutter:10},{default:(0,n.k6)((()=>[(0,n.bF)(o,{span:8},{default:(0,n.k6)((()=>e[4]||(e[4]=[(0,n.Lk)("div",{class:"grid-content bg-4-dark"},"光度",-1)]))),_:1}),(0,n.bF)(o,{span:16},{default:(0,n.k6)((()=>[(0,n.Lk)("div",O,[(0,n.eW)((0,l.v_)(r.air_sensor_1.lux),1),e[5]||(e[5]=(0,n.Lk)("span",{class:"unit"},"lux",-1))])])),_:1})])),_:1}),(0,n.bF)(_,{gutter:10},{default:(0,n.k6)((()=>[(0,n.bF)(o,{span:24},{default:(0,n.k6)((()=>[(0,n.Lk)("div",j,(0,l.v_)(r.air_sensor_2.title),1)])),_:1})])),_:1}),(0,n.bF)(_,{gutter:10},{default:(0,n.k6)((()=>[(0,n.bF)(o,{span:4},{default:(0,n.k6)((()=>e[6]||(e[6]=[(0,n.Lk)("div",{class:"grid-content bg-4-dark"},"溫度",-1)]))),_:1}),(0,n.bF)(o,{span:8},{default:(0,n.k6)((()=>[(0,n.Lk)("div",{class:"grid-content bg-4-light",style:(0,l.Tr)([r.air_sensor_2.temp>40?r.alert_high:r.air_sensor_2.temp<10?r.alert_low:r.normal])},[(0,n.eW)((0,l.v_)(r.air_sensor_2.temp),1),e[7]||(e[7]=(0,n.Lk)("span",{class:"unit"},"°C",-1))],4)])),_:1}),(0,n.bF)(o,{span:4},{default:(0,n.k6)((()=>e[8]||(e[8]=[(0,n.Lk)("div",{class:"grid-content bg-4-dark"},"濕度",-1)]))),_:1}),(0,n.bF)(o,{span:8},{default:(0,n.k6)((()=>[(0,n.Lk)("div",{class:"grid-content bg-4-light",style:(0,l.Tr)([r.air_sensor_2.humd<40?r.alert_high:r.air_sensor_2.humd>90?r.alert_low:r.normal])},[(0,n.eW)((0,l.v_)(r.air_sensor_2.humd),1),e[9]||(e[9]=(0,n.Lk)("span",{class:"unit"},"%RH",-1))],4)])),_:1})])),_:1}),(0,n.bF)(_,{gutter:10},{default:(0,n.k6)((()=>[(0,n.bF)(o,{span:8},{default:(0,n.k6)((()=>e[10]||(e[10]=[(0,n.Lk)("div",{class:"grid-content bg-4-dark"},"光度",-1)]))),_:1}),(0,n.bF)(o,{span:16},{default:(0,n.k6)((()=>[(0,n.Lk)("div",X,[(0,n.eW)((0,l.v_)(r.air_sensor_2.lux),1),e[11]||(e[11]=(0,n.Lk)("span",{class:"unit"},"lux",-1))])])),_:1})])),_:1}),(0,n.bF)(_,{gutter:10},{default:(0,n.k6)((()=>[(0,n.bF)(o,{span:24},{default:(0,n.k6)((()=>[(0,n.Lk)("div",A,(0,l.v_)(r.air_sensor_3.title),1)])),_:1})])),_:1}),(0,n.bF)(_,{gutter:10},{default:(0,n.k6)((()=>[(0,n.bF)(o,{span:4},{default:(0,n.k6)((()=>e[12]||(e[12]=[(0,n.Lk)("div",{class:"grid-content bg-4-dark"},"溫度",-1)]))),_:1}),(0,n.bF)(o,{span:8},{default:(0,n.k6)((()=>[(0,n.Lk)("div",{class:"grid-content bg-4-light",style:(0,l.Tr)([r.air_sensor_3.temp>40?r.alert_high:r.air_sensor_3.temp<10?r.alert_low:r.normal])},[(0,n.eW)((0,l.v_)(r.air_sensor_3.temp),1),e[13]||(e[13]=(0,n.Lk)("span",{class:"unit"},"°C",-1))],4)])),_:1}),(0,n.bF)(o,{span:4},{default:(0,n.k6)((()=>e[14]||(e[14]=[(0,n.Lk)("div",{class:"grid-content bg-4-dark"},"濕度",-1)]))),_:1}),(0,n.bF)(o,{span:8},{default:(0,n.k6)((()=>[(0,n.Lk)("div",{class:"grid-content bg-4-light",style:(0,l.Tr)([r.air_sensor_3.humd<40?r.alert_high:r.air_sensor_3.humd>90?r.alert_low:r.normal])},[(0,n.eW)((0,l.v_)(r.air_sensor_3.humd),1),e[15]||(e[15]=(0,n.Lk)("span",{class:"unit"},"%RH",-1))],4)])),_:1})])),_:1}),(0,n.bF)(_,{gutter:10},{default:(0,n.k6)((()=>[(0,n.bF)(o,{span:8},{default:(0,n.k6)((()=>e[16]||(e[16]=[(0,n.Lk)("div",{class:"grid-content bg-4-dark"},"光度",-1)]))),_:1}),(0,n.bF)(o,{span:16},{default:(0,n.k6)((()=>[(0,n.Lk)("div",G,[(0,n.eW)((0,l.v_)(r.air_sensor_3.lux),1),e[17]||(e[17]=(0,n.Lk)("span",{class:"unit"},"lux",-1))])])),_:1})])),_:1}),(0,n.bF)(_,null,{default:(0,n.k6)((()=>[(0,n.bF)(o,{style:{"font-size":"0.8rem !important",height:"10px","line-height":"10px","text-align":"right"}},{default:(0,n.k6)((()=>[(0,n.eW)(" 更新時間:"+(0,l.v_)(r.updateTime),1)])),_:1})])),_:1})])}var B={components:{Header:H},data(){return{alert_high:{color:"red"},alert_low:{color:"blue"},normal:{color:"black"},title:"黑水虻溫室",air_sensor_1:{title:"溫濕光1",temp:0,humd:0,lux:0},air_sensor_2:{title:"溫濕光2",temp:0,humd:0,lux:0},air_sensor_3:{title:"溫濕光3",temp:0,humd:0,lux:0},getDataInterval:null,updateTime:"-"}},computed:{},methods:{getTempRhData(){x("蟲屋").then((t=>{this.air_sensor_1.temp=t.data[0].TEMP,this.air_sensor_1.humd=t.data[0].HUMD,this.air_sensor_1.lux=t.data[0].LUX,this.air_sensor_2.temp=t.data[1].TEMP,this.air_sensor_2.humd=t.data[1].HUMD,this.air_sensor_2.lux=t.data[1].LUX,this.air_sensor_3.temp=t.data[2].TEMP,this.air_sensor_3.humd=t.data[2].HUMD,this.air_sensor_3.lux=t.data[2].LUX,this.updateTime=(new Date).toLocaleString("sv")})).catch((t=>{console.log(t)}))}},watch:{},mounted(){clearInterval(this.getDataInterval),this.getTempRhData(),this.getDataInterval=setInterval(this.getTempRhData,3e5)},beforeUnmount(){clearInterval(this.getDataInterval)}};const N=(0,d.A)(B,[["render",z],["__scopeId","data-v-2bd53883"]]);var q=N;const J={class:"IntelligentGreenhouse"},K={class:"grid-content bg-3-dark",style:{height:"40px","line-height":"40px"}},Q={class:"grid-content bg-3-light"},V={class:"grid-content bg-3-dark",style:{height:"40px","line-height":"40px"}},Y={class:"grid-content bg-3-light"},Z={class:"grid-content bg-3-dark",style:{height:"40px","line-height":"40px"}},$={class:"grid-content bg-3-light"},tt={class:"grid-content bg-3-dark",style:{height:"40px","line-height":"40px"}},et={class:"grid-content bg-3-light"},at={class:"grid-content bg-3-light"},st={class:"grid-content bg-3-dark",style:{height:"40px","line-height":"40px"}},nt={class:"grid-content bg-3-light"},lt={class:"grid-content bg-3-light"};function rt(t,e,a,s,r,i){const d=(0,n.g2)("Header"),o=(0,n.g2)("el-col"),_=(0,n.g2)("el-row");return(0,n.uX)(),(0,n.CE)("div",J,[(0,n.bF)(d,{inputTitle:r.title,class:"bg-3-dark-header"},null,8,["inputTitle"]),(0,n.bF)(_,{gutter:10},{default:(0,n.k6)((()=>[(0,n.bF)(o,{span:24},{default:(0,n.k6)((()=>[(0,n.Lk)("div",K,(0,l.v_)(r.pm_sensor.title),1)])),_:1})])),_:1}),(0,n.bF)(_,{gutter:10},{default:(0,n.k6)((()=>[(0,n.bF)(o,{span:4},{default:(0,n.k6)((()=>e[0]||(e[0]=[(0,n.Lk)("div",{class:"grid-content bg-3-dark"},"PM2.5",-1)]))),_:1}),(0,n.bF)(o,{span:8},{default:(0,n.k6)((()=>[(0,n.Lk)("div",{class:"grid-content bg-3-light",style:(0,l.Tr)([r.pm_sensor.pm25>55?r.alert_low:r.normal])},[(0,n.eW)((0,l.v_)(r.pm_sensor.pm25),1),e[1]||(e[1]=(0,n.Lk)("span",{class:"unit"},[(0,n.eW)("μg/m"),(0,n.Lk)("sup",null,"3")],-1))],4)])),_:1}),(0,n.bF)(o,{span:4},{default:(0,n.k6)((()=>e[2]||(e[2]=[(0,n.Lk)("div",{class:"grid-content bg-3-dark"},"PM10",-1)]))),_:1}),(0,n.bF)(o,{span:8},{default:(0,n.k6)((()=>[(0,n.Lk)("div",Q,[(0,n.eW)((0,l.v_)(r.pm_sensor.pm10),1),e[3]||(e[3]=(0,n.Lk)("span",{class:"unit"},[(0,n.eW)("μg/m"),(0,n.Lk)("sup",null,"3")],-1))])])),_:1})])),_:1}),(0,n.bF)(_,{gutter:10},{default:(0,n.k6)((()=>[(0,n.bF)(o,{span:24},{default:(0,n.k6)((()=>[(0,n.Lk)("div",V,(0,l.v_)(r.air_sensor_1.title),1)])),_:1})])),_:1}),(0,n.bF)(_,{gutter:10},{default:(0,n.k6)((()=>[(0,n.bF)(o,{span:4},{default:(0,n.k6)((()=>e[4]||(e[4]=[(0,n.Lk)("div",{class:"grid-content bg-3-dark"},"溫度",-1)]))),_:1}),(0,n.bF)(o,{span:8},{default:(0,n.k6)((()=>[(0,n.Lk)("div",{class:"grid-content bg-3-light",style:(0,l.Tr)([r.air_sensor_1.temp>40?r.alert_high:r.air_sensor_1.temp<10?r.alert_low:r.normal])},[(0,n.eW)((0,l.v_)(r.air_sensor_1.temp),1),e[5]||(e[5]=(0,n.Lk)("span",{class:"unit"},"°C",-1))],4)])),_:1}),(0,n.bF)(o,{span:4},{default:(0,n.k6)((()=>e[6]||(e[6]=[(0,n.Lk)("div",{class:"grid-content bg-3-dark"},"濕度",-1)]))),_:1}),(0,n.bF)(o,{span:8},{default:(0,n.k6)((()=>[(0,n.Lk)("div",{class:"grid-content bg-3-light",style:(0,l.Tr)([r.air_sensor_1.humd<40?r.alert_high:r.air_sensor_1.humd>90?r.alert_low:r.normal])},[(0,n.eW)((0,l.v_)(r.air_sensor_1.humd),1),e[7]||(e[7]=(0,n.Lk)("span",{class:"unit"},"%RH",-1))],4)])),_:1})])),_:1}),(0,n.bF)(_,{gutter:10},{default:(0,n.k6)((()=>[(0,n.bF)(o,{span:8},{default:(0,n.k6)((()=>e[8]||(e[8]=[(0,n.Lk)("div",{class:"grid-content bg-3-dark"},"光度",-1)]))),_:1}),(0,n.bF)(o,{span:16},{default:(0,n.k6)((()=>[(0,n.Lk)("div",Y,[(0,n.eW)((0,l.v_)(r.air_sensor_1.lux),1),e[9]||(e[9]=(0,n.Lk)("span",{class:"unit"},"lux",-1))])])),_:1})])),_:1}),(0,n.bF)(_,{gutter:10},{default:(0,n.k6)((()=>[(0,n.bF)(o,{span:24},{default:(0,n.k6)((()=>[(0,n.Lk)("div",Z,(0,l.v_)(r.air_sensor_2.title),1)])),_:1})])),_:1}),(0,n.bF)(_,{gutter:10},{default:(0,n.k6)((()=>[(0,n.bF)(o,{span:4},{default:(0,n.k6)((()=>e[10]||(e[10]=[(0,n.Lk)("div",{class:"grid-content bg-3-dark"},"溫度",-1)]))),_:1}),(0,n.bF)(o,{span:8},{default:(0,n.k6)((()=>[(0,n.Lk)("div",{class:"grid-content bg-3-light",style:(0,l.Tr)([r.air_sensor_2.temp>40?r.alert_high:r.air_sensor_2.temp<10?r.alert_low:r.normal])},[(0,n.eW)((0,l.v_)(r.air_sensor_2.temp),1),e[11]||(e[11]=(0,n.Lk)("span",{class:"unit"},"°C",-1))],4)])),_:1}),(0,n.bF)(o,{span:4},{default:(0,n.k6)((()=>e[12]||(e[12]=[(0,n.Lk)("div",{class:"grid-content bg-3-dark"},"濕度",-1)]))),_:1}),(0,n.bF)(o,{span:8},{default:(0,n.k6)((()=>[(0,n.Lk)("div",{class:"grid-content bg-3-light",style:(0,l.Tr)([r.air_sensor_2.humd<40?r.alert_high:r.air_sensor_2.humd>90?r.alert_low:r.normal])},[(0,n.eW)((0,l.v_)(r.air_sensor_2.humd),1),e[13]||(e[13]=(0,n.Lk)("span",{class:"unit"},"%RH",-1))],4)])),_:1})])),_:1}),(0,n.bF)(_,{gutter:10},{default:(0,n.k6)((()=>[(0,n.bF)(o,{span:8},{default:(0,n.k6)((()=>e[14]||(e[14]=[(0,n.Lk)("div",{class:"grid-content bg-3-dark"},"光度",-1)]))),_:1}),(0,n.bF)(o,{span:16},{default:(0,n.k6)((()=>[(0,n.Lk)("div",$,[(0,n.eW)((0,l.v_)(r.air_sensor_2.lux),1),e[15]||(e[15]=(0,n.Lk)("span",{class:"unit"},"lux",-1))])])),_:1})])),_:1}),(0,n.bF)(_,{gutter:10},{default:(0,n.k6)((()=>[(0,n.bF)(o,{span:24},{default:(0,n.k6)((()=>[(0,n.Lk)("div",tt,(0,l.v_)(r.soil_sensor_1.title),1)])),_:1})])),_:1}),(0,n.bF)(_,{gutter:10},{default:(0,n.k6)((()=>[(0,n.bF)(o,{span:4},{default:(0,n.k6)((()=>e[16]||(e[16]=[(0,n.Lk)("div",{class:"grid-content bg-3-dark"},"溫度",-1)]))),_:1}),(0,n.bF)(o,{span:8},{default:(0,n.k6)((()=>[(0,n.Lk)("div",{class:"grid-content bg-3-light",style:(0,l.Tr)([r.soil_sensor_1.temp>40?r.alert_high:r.soil_sensor_1.temp<10?r.alert_low:r.normal])},[(0,n.eW)((0,l.v_)(r.soil_sensor_1.temp),1),e[17]||(e[17]=(0,n.Lk)("span",{class:"unit"},"°C",-1))],4)])),_:1}),(0,n.bF)(o,{span:4},{default:(0,n.k6)((()=>e[18]||(e[18]=[(0,n.Lk)("div",{class:"grid-content bg-3-dark"},"濕度",-1)]))),_:1}),(0,n.bF)(o,{span:8},{default:(0,n.k6)((()=>[(0,n.Lk)("div",{class:"grid-content bg-3-light",style:(0,l.Tr)([r.soil_sensor_1.humd<40?r.alert_high:r.soil_sensor_1.humd>90?r.alert_low:r.normal])},[(0,n.eW)((0,l.v_)(r.soil_sensor_1.humd),1),e[19]||(e[19]=(0,n.Lk)("span",{class:"unit"},"%RH",-1))],4)])),_:1})])),_:1}),(0,n.bF)(_,{gutter:10},{default:(0,n.k6)((()=>[(0,n.bF)(o,{span:4},{default:(0,n.k6)((()=>e[20]||(e[20]=[(0,n.Lk)("div",{class:"grid-content bg-3-dark"},"EC",-1)]))),_:1}),(0,n.bF)(o,{span:8},{default:(0,n.k6)((()=>[(0,n.Lk)("div",et,[(0,n.eW)((0,l.v_)(r.soil_sensor_1.ec),1),e[21]||(e[21]=(0,n.Lk)("span",{class:"unit"},null,-1))])])),_:1}),(0,n.bF)(o,{span:4},{default:(0,n.k6)((()=>e[22]||(e[22]=[(0,n.Lk)("div",{class:"grid-content bg-3-dark"},"PH",-1)]))),_:1}),(0,n.bF)(o,{span:8},{default:(0,n.k6)((()=>[(0,n.Lk)("div",at,[(0,n.eW)((0,l.v_)(r.soil_sensor_1.ph),1),e[23]||(e[23]=(0,n.Lk)("span",{class:"unit"},null,-1))])])),_:1})])),_:1}),(0,n.bF)(_,{gutter:10},{default:(0,n.k6)((()=>[(0,n.bF)(o,{span:24},{default:(0,n.k6)((()=>[(0,n.Lk)("div",st,(0,l.v_)(r.soil_sensor_2.title),1)])),_:1})])),_:1}),(0,n.bF)(_,{gutter:10},{default:(0,n.k6)((()=>[(0,n.bF)(o,{span:4},{default:(0,n.k6)((()=>e[24]||(e[24]=[(0,n.Lk)("div",{class:"grid-content bg-3-dark"},"溫度",-1)]))),_:1}),(0,n.bF)(o,{span:8},{default:(0,n.k6)((()=>[(0,n.Lk)("div",{class:"grid-content bg-3-light",style:(0,l.Tr)([r.soil_sensor_2.temp>40?r.alert_high:r.soil_sensor_2.temp<10?r.alert_low:r.normal])},[(0,n.eW)((0,l.v_)(r.soil_sensor_2.temp),1),e[25]||(e[25]=(0,n.Lk)("span",{class:"unit"},"°C",-1))],4)])),_:1}),(0,n.bF)(o,{span:4},{default:(0,n.k6)((()=>e[26]||(e[26]=[(0,n.Lk)("div",{class:"grid-content bg-3-dark"},"濕度",-1)]))),_:1}),(0,n.bF)(o,{span:8},{default:(0,n.k6)((()=>[(0,n.Lk)("div",{class:"grid-content bg-3-light",style:(0,l.Tr)([r.soil_sensor_2.humd<40?r.alert_high:r.soil_sensor_2.humd>90?r.alert_low:r.normal])},[(0,n.eW)((0,l.v_)(r.soil_sensor_2.humd),1),e[27]||(e[27]=(0,n.Lk)("span",{class:"unit"},"%RH",-1))],4)])),_:1})])),_:1}),(0,n.bF)(_,{gutter:10},{default:(0,n.k6)((()=>[(0,n.bF)(o,{span:4},{default:(0,n.k6)((()=>e[28]||(e[28]=[(0,n.Lk)("div",{class:"grid-content bg-3-dark"},"EC",-1)]))),_:1}),(0,n.bF)(o,{span:8},{default:(0,n.k6)((()=>[(0,n.Lk)("div",nt,[(0,n.eW)((0,l.v_)(r.soil_sensor_2.ec),1),e[29]||(e[29]=(0,n.Lk)("span",{class:"unit"},null,-1))])])),_:1}),(0,n.bF)(o,{span:4},{default:(0,n.k6)((()=>e[30]||(e[30]=[(0,n.Lk)("div",{class:"grid-content bg-3-dark"},"PH",-1)]))),_:1}),(0,n.bF)(o,{span:8},{default:(0,n.k6)((()=>[(0,n.Lk)("div",lt,[(0,n.eW)((0,l.v_)(r.soil_sensor_2.ph),1),e[31]||(e[31]=(0,n.Lk)("span",{class:"unit"},null,-1))])])),_:1})])),_:1}),(0,n.bF)(_,null,{default:(0,n.k6)((()=>[(0,n.bF)(o,{style:{"font-size":"0.8rem !important",height:"10px","line-height":"10px","text-align":"right"}},{default:(0,n.k6)((()=>[(0,n.eW)(" 更新時間:"+(0,l.v_)(r.updateTime),1)])),_:1})])),_:1})])}var it={components:{Header:H},data(){return{alert_high:{color:"red"},alert_low:{color:"blue"},normal:{color:"black"},title:"智慧溫室",pm_sensor:{title:"空氣",pm25:0,pm10:0},air_sensor_1:{title:"溫濕光1",temp:0,humd:0,lux:0},air_sensor_2:{title:"溫濕光2",temp:0,humd:0,lux:0},soil_sensor_1:{title:"土壤1",temp:0,humd:0,ec:0,ph:0},soil_sensor_2:{title:"土壤2",temp:0,humd:0,ec:0,ph:0},getDataInterval:null,updateTime:"-"}},computed:{},methods:{getTempRhData(){Promise.all([x("智慧溫室"),w("智慧溫室"),T()]).then((([t,e,a])=>{this.air_sensor_1.temp=t.data[0].TEMP,this.air_sensor_1.humd=t.data[0].HUMD,this.air_sensor_1.lux=t.data[0].LUX,this.air_sensor_2.temp=t.data[1].TEMP,this.air_sensor_2.humd=t.data[1].HUMD,this.air_sensor_2.lux=t.data[1].LUX,this.soil_sensor_1.temp=10*e.data[0].TEMP,this.soil_sensor_1.humd=10*e.data[0].MIOS,this.soil_sensor_1.ec=10*e.data[0].EC,this.soil_sensor_1.ph=10*e.data[0].PH,this.soil_sensor_2.temp=10*e.data[1].TEMP,this.soil_sensor_2.humd=10*e.data[1].MIOS,this.soil_sensor_2.ec=10*e.data[1].EC,this.soil_sensor_2.ph=10*e.data[1].PH,this.pm_sensor.pm25=a.data[0].PM25,this.pm_sensor.pm10=a.data[0].PM10,this.updateTime=(new Date).toLocaleString("sv")})).catch((t=>{console.log(t)}))}},watch:{},mounted(){clearInterval(this.getDataInterval),this.getTempRhData(),this.getDataInterval=setInterval(this.getTempRhData,3e5)},beforeUnmount(){clearInterval(this.getDataInterval)}};const dt=(0,d.A)(it,[["render",rt],["__scopeId","data-v-462befb2"]]);var ot=dt;const _t={class:"WeatherStation"},ut={class:"grid-content bg-1-light"},gt={class:"grid-content bg-1-light"};function ct(t,e,a,s,r,i){const d=(0,n.g2)("Header"),o=(0,n.g2)("el-col"),_=(0,n.g2)("el-row");return(0,n.uX)(),(0,n.CE)("div",_t,[(0,n.bF)(d,{inputTitle:r.title,class:"bg-1-dark-header"},null,8,["inputTitle"]),(0,n.bF)(_,{gutter:10},{default:(0,n.k6)((()=>[(0,n.bF)(o,{xs:3,sm:3,md:3,lg:3,xl:3},{default:(0,n.k6)((()=>e[0]||(e[0]=[(0,n.Lk)("div",{class:"grid-content bg-1-dark"},"風速",-1)]))),_:1}),(0,n.bF)(o,{xs:4,sm:4,md:4,lg:4,xl:4},{default:(0,n.k6)((()=>[(0,n.Lk)("div",{class:"grid-content bg-1-light",style:(0,l.Tr)([r.wind_speed>10?r.alert_high:r.normal])},[(0,n.eW)((0,l.v_)(r.wind_speed),1),e[1]||(e[1]=(0,n.Lk)("span",{class:"unit"},"m/s",-1))],4)])),_:1}),(0,n.bF)(o,{xs:3,sm:3,md:3,lg:3,xl:3},{default:(0,n.k6)((()=>e[2]||(e[2]=[(0,n.Lk)("div",{class:"grid-content bg-1-dark"},"雨量",-1)]))),_:1}),(0,n.bF)(o,{xs:5,sm:5,md:5,lg:5,xl:5},{default:(0,n.k6)((()=>[(0,n.Lk)("div",{class:"grid-content bg-1-light",style:(0,l.Tr)([r.rain>8?r.alert_high:r.normal])},[(0,n.eW)((0,l.v_)(r.rain),1),e[3]||(e[3]=(0,n.Lk)("span",{class:"unit"},"mm",-1))],4)])),_:1}),(0,n.bF)(o,{xs:3,sm:3,md:3,lg:3,xl:3},{default:(0,n.k6)((()=>e[4]||(e[4]=[(0,n.Lk)("div",{class:"grid-content bg-1-dark"},"風向",-1)]))),_:1}),(0,n.bF)(o,{xs:6,sm:6,md:6,lg:6,xl:6},{default:(0,n.k6)((()=>[(0,n.Lk)("div",ut,(0,l.v_)(i.wind_dir_txt),1)])),_:1})])),_:1}),(0,n.bF)(_,{gutter:10},{default:(0,n.k6)((()=>[(0,n.bF)(o,{xs:3,sm:3,md:3,lg:3,xl:3},{default:(0,n.k6)((()=>e[5]||(e[5]=[(0,n.Lk)("div",{class:"grid-content bg-1-dark"},"光度",-1)]))),_:1}),(0,n.bF)(o,{xs:5,sm:5,md:5,lg:5,xl:5},{default:(0,n.k6)((()=>[(0,n.Lk)("div",gt,[(0,n.eW)((0,l.v_)(r.lux),1),e[6]||(e[6]=(0,n.Lk)("span",{class:"unit"},"lux",-1))])])),_:1}),(0,n.bF)(o,{xs:3,sm:3,md:3,lg:3,xl:3},{default:(0,n.k6)((()=>e[7]||(e[7]=[(0,n.Lk)("div",{class:"grid-content bg-1-dark"},"溫度",-1)]))),_:1}),(0,n.bF)(o,{xs:5,sm:5,md:5,lg:5,xl:5},{default:(0,n.k6)((()=>[(0,n.Lk)("div",{class:"grid-content bg-1-light",style:(0,l.Tr)([r.temp>40?r.alert_high:r.temp<10?r.alert_low:r.normal])},[(0,n.eW)((0,l.v_)(r.temp),1),e[8]||(e[8]=(0,n.Lk)("span",{class:"unit"},"°C",-1))],4)])),_:1}),(0,n.bF)(o,{xs:3,sm:3,md:3,lg:3,xl:3},{default:(0,n.k6)((()=>e[9]||(e[9]=[(0,n.Lk)("div",{class:"grid-content bg-1-dark"},"濕度",-1)]))),_:1}),(0,n.bF)(o,{xs:5,sm:5,md:5,lg:5,xl:5},{default:(0,n.k6)((()=>[(0,n.Lk)("div",{class:"grid-content bg-1-light",style:(0,l.Tr)([r.humd>90?r.alert_high:r.humd<40?r.alert_low:r.normal])},[(0,n.eW)((0,l.v_)(r.humd),1),e[10]||(e[10]=(0,n.Lk)("span",{class:"unit"},"%RH",-1))],4)])),_:1})])),_:1}),(0,n.bF)(_,null,{default:(0,n.k6)((()=>[(0,n.bF)(o,{style:{"font-size":"0.8rem !important",height:"10px","line-height":"10px","text-align":"right"}},{default:(0,n.k6)((()=>[(0,n.eW)(" 更新時間:"+(0,l.v_)(r.updateTime),1)])),_:1})])),_:1})])}var ht={components:{Header:H},data(){return{alert_high:{color:"red"},alert_low:{color:"blue"},normal:{color:"black"},title:"氣象站",wind_speed:0,rain:0,wind_dir:0,lux:0,temp:0,humd:0,getDataInterval:null,updateTime:"-"}},computed:{wind_dir_txt:function(){let t="",e=this.wind_dir-75;return e<0&&(e=360+e),t=348.75<e&&e<=360||0<=e&&e<=11.25?"北":11.25<e&&e<=33.75?"北北東":33.75<e&&e<=56.25?"東北":56.25<e&&e<=78.75?"東北東":78.75<e&&e<=101.25?"東":101.25<e&&e<=123.75?"東南東":123.75<e&&e<=146.25?"東南":146.25<e&&e<=168.75?"南南東":168.75<e&&e<=191.25?"南":191.25<e&&e<=213.75?"南南西":213.75<e&&e<=236.25?"西南":236.25<e&&e<=258.75?"西南西":258.75<e&&e<=281.25?"西":281.25<e&&e<=303.75?"西北西":303.75<e&&e<=326.25?"西北":326.25<e&&e<=348.75?"北北西":"暫無提供",t}},methods:{getTempRhData(){Promise.all([x("智慧溫室"),y()]).then((([t,e])=>{this.temp=t.data[1].TEMP,this.humd=t.data[1].HUMD,this.lux=e.data[0].LUX,this.wind_speed=e.data[0].WIND_SPEED,this.wind_dir=e.data[0].WIND_ROSE,this.rain=e.data[0].RAIN,this.updateTime=(new Date).toLocaleString("sv")})).catch((t=>{console.log(t)}))}},watch:{},mounted(){clearInterval(this.getDataInterval),this.getTempRhData(),this.getDataInterval=setInterval(this.getTempRhData,3e5)},beforeUnmount(){clearInterval(this.getDataInterval)}};const kt=(0,d.A)(ht,[["render",ct],["__scopeId","data-v-cc3521f6"]]);var pt=kt,bt={components:{SmartChickenCoop:P,BlackSoldierFlyGreenhouse:q,IntelligentGreenhouse:ot,WeatherStation:pt},data(){return{image:a(8253)}},computed:{},methods:{},watch:{},mounted(){},beforeUnmount(){}};const mt=(0,d.A)(bt,[["render",h],["__scopeId","data-v-e4b7883a"]]);var vt=mt;const ft=[{path:"/",name:"MainPage",component:vt}],Ft=(0,g.aE)({history:(0,g.LA)("/pt_weather/"),routes:ft});var Lt=Ft;const xt=(0,s.Ef)(_);xt.use(u.A),xt.use(Lt),xt.mount("#app")},732:function(t,e,a){t.exports=a.p+"img/background.82dbe636.jpg"},8253:function(t,e,a){t.exports=a.p+"img/logo_red.445d0495.jpg"}},e={};function a(s){var n=e[s];if(void 0!==n)return n.exports;var l=e[s]={exports:{}};return t[s].call(l.exports,l,l.exports,a),l.exports}a.m=t,function(){var t=[];a.O=function(e,s,n,l){if(!s){var r=1/0;for(_=0;_<t.length;_++){s=t[_][0],n=t[_][1],l=t[_][2];for(var i=!0,d=0;d<s.length;d++)(!1&l||r>=l)&&Object.keys(a.O).every((function(t){return a.O[t](s[d])}))?s.splice(d--,1):(i=!1,l<r&&(r=l));if(i){t.splice(_--,1);var o=n();void 0!==o&&(e=o)}}return e}l=l||0;for(var _=t.length;_>0&&t[_-1][2]>l;_--)t[_]=t[_-1];t[_]=[s,n,l]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/pt_weather/"}(),function(){var t={524:0};a.O.j=function(e){return 0===t[e]};var e=function(e,s){var n,l,r=s[0],i=s[1],d=s[2],o=0;if(r.some((function(e){return 0!==t[e]}))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(d)var _=d(a)}for(e&&e(s);o<r.length;o++)l=r[o],a.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return a.O(_)},s=self["webpackChunkbtjhs_weather"]=self["webpackChunkbtjhs_weather"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[504],(function(){return a(7927)}));s=a.O(s)})();
//# sourceMappingURL=app.d1c0ad63.js.map
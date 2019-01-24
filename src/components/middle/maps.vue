<template>
    <div id="myMap" :class="{'active': warningActiveItemName}"></div>
</template>

<script>
  import echarts from 'echarts/lib/echarts';
  import 'echarts/lib/chart/map';
  import 'echarts/map/js/china.js';
  // import '@/assets/TweenMax.min'
  export default {
    // name: "map",
    data() {
      return {
        myChart:null,
        activeDots:[],
        option:{},
        datalist:{
          "宣城": ["118.75", "30.95"],
          "昭通": ["103.72", "27.33"],
          "秦皇岛": ["119.6", "39.93"],
          "乌兰浩特": ["122.05", "46.08"],
          "湛江二": ["110.35", "21.27"],
          "汕尾": ["115.37", "22.78"],
          "张家界": ["110.47", "29.13"],
          "普洱": ["101.03", "23.07"],
          "昆明四": ["102.72", "25.05"],
          "商丘": ["115.65", "34.45"],
          "湘潭": ["112.93", "27.83"],
          "海口三": ["110.32", "20.03"],
          "阳江": ["111.98", "21.87"],
          "玉林": ["110.17", "22.63"],
          "海口四": ["110.32", "20.03"],
          "韶关": ["113.6", "24.82"],
          "德宏": ["98.58", "24.43"],
          "大理": ["100.23", "25.6"],
          "儋州": ["109.57", "19.52"],
          "百色": ["106.62", "23.9"],
          "黄石": ["115.03", "30.2"],
          "潮州": ["116.62", "23.67"],
          "保山": ["99.17", "25.12"],
          "海口": ["110.32", "20.03"],
          "昆明": ["102.72", "25.05"],
          "包头": ["109.83", "40.65"],
          "湖州": ["120.08", "30.9"],
          "文山": ["104.25", "23.37"],
          "柳州": ["109.42", "24.33"],
          "六盘水": ["104.83", "26.6"],
          "昆明三": ["102.72", "25.05"],
          "玉溪": ["102.55", "24.35"],
          "昆明二": ["102.72", "25.05"],
          "三亚二": ["109.5", "18.25"],
          "茂名": ["110.92", "21.67"],
          "红河": ["103.4", "23.37"],
          "兴义": ["104.9", "25.08"],
          "衡阳": ["112.57", "26.9"],
          "湛江": ["110.35", "21.27"],
          "孝感": ["113.92", "30.93"],
          "钦州": ["108.62", "21.95"],
          "岳阳": ["113.12", "29.37"],
          "大理二": ["100.23", "25.6"],
          "塔城": ["82.98", "46.75"],
          "周口": ["114.65", "33.62"],
          "通辽": ["122.27", "43.62"],
          "呼和浩特": ["111.73", "40.83"],
          "宿州": ["116.98", "33.63"],
          "常德": ["111.68", "29.05"],
          "来宾": ["109.23", "23.73"],
          "恩施": ["109.47", "30.3"],
          "信阳": ["114.07", "32.13"],
          "临沧": ["100.08", "23.88"],
          "乌兰察布": ["113.12", "40.98"],
          "库尔勒": ["86.15", "41.77"]

          },
        data:[
          {name: '北京', value: '0'},
      {name: '天津', value: Math.round(Math.random() * 1000)},
      {name: '上海', value: Math.round(Math.random() * 1000)},
      {name: '重庆', value: Math.round(Math.random() * 1000)},
      {name: '河北', value: Math.round(Math.random() * 1000)},
      {name: '河南', value: Math.round(Math.random() * 1000)},
      {name: '云南', value: Math.round(Math.random() * 1000)},
      {name: '辽宁', value: Math.round(Math.random() * 1000)},
      {name: '黑龙江', value: Math.round(Math.random() * 1000)},
      {name: '湖南', value: Math.round(Math.random() * 1000)},
      {name: '安徽', value: Math.round(Math.random() * 1000)},
      {name: '山东', value: Math.round(Math.random() * 1000)},
      {name: '新疆', value: Math.round(Math.random() * 1000)},
      {name: '江苏', value: Math.round(Math.random() * 1000)},
      {name: '浙江', value: Math.round(Math.random() * 1000)},
      {name: '江西', value: Math.round(Math.random() * 1000)},
      {name: '湖北', value: Math.round(Math.random() * 1000)},
      {name: '广西', value: Math.round(Math.random() * 1000)},
      {name: '甘肃', value: Math.round(Math.random() * 1000)},
      {name: '山西', value: Math.round(Math.random() * 1000)},
      // {name: '内蒙古',value: 0},
      {name: '陕西', value: Math.round(Math.random() * 1000)},
      {name: '吉林', value: Math.round(Math.random() * 1000)},
      {name: '福建', value: Math.round(Math.random() * 1000)},
      {name: '贵州', value: Math.round(Math.random() * 1000)},
      {name: '广东', value: Math.round(Math.random() * 1000)},
      {name: '青海', value: Math.round(Math.random() * 1000)},
      {name: '西藏', value: Math.round(Math.random() * 1000)},
      {name: '四川', value: Math.round(Math.random() * 1000)},
      {name: '宁夏', value: Math.round(Math.random() * 1000)},
      {name: '海南', value: Math.round(Math.random() * 1000)},
      {name: '台湾', value: Math.round(Math.random() * 1000)},
      {name: '香港', value: Math.round(Math.random() * 1000)},
      {name: '澳门', value: Math.round(Math.random() * 1000)}
    ]
      }
    },
    computed: {
      warningActiveItemName() {
       return this.$store.state.overdueData.warningActiveItemName
      }
    },
    watch: {
      warningActiveItemName(val){
        this.activeDots[0] = this.datalist[val];
        this.myChart.clear()
        this.creatChart()
      }

    },
    mounted(){
      this.creatChart()
    },
    methods: {
      creatChart() {
        // console.log(this.vuexName)
        this.myChart = echarts.init(document.getElementById('myMap'))
        var geoCoordMap = [
          {name: '宣城', value: ["118.75", "30.95"]},
          {name: '宣城', value: ["103.72", "27.33"]}
        ]
        let left = false, top = false, priority = 'top'
// 自定义tooltip配置属性
        let config = {
          ecBoxId: 'chart-panel',
          lineColor: '#fff',
          L1: {
            time: 0.3,
            long: 40
          },
          L2: {
            time: 0.3,
            long: 40
          },
          text: {
            time: 0.5,
            text: '',
            font: '14px Arial',
            color: '#fff',
            padding: [10, 10],
            width: 120,
            height: 60,
            lineHeight: 24,
            backgroundColor: 'rgba(50, 50, 50, 0.8)'
          }
        }
        this.option = {
          tooltip: {
            trigger: 'item',
            triggerOn: 'click',
            backgroundColor: 'transparent',
            alwaysShowContent: true,
            position(pos) {
              let position = getPosOrSize('pos', pos)
              return position
            },
            formatter(params, p, a) {
              canvasAnimation(params)
              let size = getPosOrSize('size')
              let tooltipDom = `<canvas id="tCanvas" width="${size.width}" height="${size.height}">123</canvas>`
              return tooltipDom
            }
          },
          visualMap: {

            left: '15%',
            top: 'bottom',
            itemWidth: '10',
            text: ['高', '低'],           // 文本，默认为数值文本
            calculable: false,
            color: ['#cbe0e5', '#3367b7'],
            textStyle: {
              color: '#6ca5eb'
            },
            seriesIndex: 0
          },
          geo: {
            map: 'china',
            width: '97%',
            height: '90%',
            top: '3.5%',
            left: '1%',
            roam: false,
            itemStyle: {
              normal: {
                // areaColor: '#6c98ca',
                borderColor: '#111'
              },
              emphasis: {
                // areaColor: '#2a333d'
              }
            }
          },
          series: [
            {
              name: 'iphone3',
              type: 'map',
              mapType: 'china',
              //zoom: 1.2,
              width: '97%',
              height: '90%',
              top: '3.5%',
              left: '1%',
              roam: false,
              itemStyle: {
                normal: {
                  color: 'red',//地图背景颜色
                  // areaColor: 'rgb(216, 72, 26)',
                },
                emphasis: {label: {show: false}}
              },
              label: {
                normal: {
                  show: false
                },
                emphasis: {
                  show: false
                }
              },
              data:this.data,
              zlevel: 1
            },
            {
              name: '常亮点',
              type: 'effectScatter',
              coordinateSystem: 'geo',
              data: geoCoordMap,
              // showEffectOn: 'render',
              rippleEffect: {
                brushType: 'stroke'
              },
              hoverAnimation: false,

              label: {
                normal: {
                  formatter: '{b}',
                  position: 'right',
                  show: false
                }
              },
              itemStyle: {

                color:
                  '#db1f33'
                ,
                shadowBlur: 10,
                shadowColor: 'yellow',

                emphasis: {
                  color: function () {
                    console.log(2)
                  },
                }
              },
              zlevel: 2
            },
            {
              name: '轮播点',

              type: 'effectScatter',
              coordinateSystem: 'geo',
              data: this.activeDots,
              // symbolSize: function (val) {
              //   return val[2] / 10;
              // },
              showEffectOn: 'render',
              rippleEffect: {
                brushType: 'stroke'
              },
              hoverAnimation: false,

              label: {
                normal: {
                  formatter: '{b}',
                  position: 'right',
                  show: false
                }
              },
              itemStyle: {
                color: 'yellow',
                shadowBlur: 10,
                shadowColor: 'yellow',
              },
              zlevel: 3
            }
          ]
        };
        const canvasAnimation = params => {
          setTimeout(function () {
            config.text.text = `地点：${params.value}`
            console.log(params)
            new myTooltip('tCanvas', config)
          }, 0);
        }

// 计算tooltip位置
        const getPosOrSize = (type, point) => {
          let x1 = config.L1.long * Math.sin(Math.PI / 4)
          let width = x1 + config.L2.long + config.text.width,
            height = x1 + config.text.height / 2
          if (type === 'size') {
            config.width = width
            config.height = height
            return {
              width,
              height
            }
          } else {
            let box = document.getElementById('myMap'),
              bw = box.offsetWidth,
              bh = box.offsetHeight,
              x = point[0],
              y = point[1]
            left = false
            if (x + width >= bw / 1.2) {
              x = x - width - 5
              left = true
            }
            if (priority === 'top') {
              // L1向上
              top = true
              y = y - height - 5
              if (y <= 0) {
                y = point[1]
                top = false
              }
              return [x, y]
            } else {
              top = false
              if (y + height >= bh) {
                y = y - height - 5
                top = true
              }
              return [x, y]
            }
          }
        }

        class myTooltip {
          constructor(id, config) {
            this.config = config
            this.totalTime = 0
            this.stage = new createjs.Stage(id)
            this.timeline = new TimelineMax({repeat: 0})
            this.g = new createjs.Graphics()
            this.lineShape = new createjs.Shape(this.g)
            this.textShape = new createjs.Shape()
            this.stage.addChild(this.lineShape, this.textShape)
            this.init()
            this.begin()
            this.update()
          }

          init() {
            this.start = [0, 0]
            if (left) {
              this.start[0] = this.config.width
            }
            if (top) {
              this.start[1] = this.config.height
            }
          }

          begin() {
            this.L1()
            this.L2()
            this.addText()
          }

          L1() {
            let me = this
            let c = me.config
            let tl = new TimelineMax()
            let scale = {s: 0},
              x = c.L1.long * Math.sin(Math.PI / 4)
            if (left) {
              if (top) {
                this.L1End = [me.start[0] - x, me.start[1] - x]
              } else {
                this.L1End = [me.start[0] - x, me.start[1] + x]
              }
            } else {
              if (top) {
                this.L1End = [x, me.start[1] - x]
              } else {
                this.L1End = [x, x]
              }
            }

            tl.to(scale, c.L1.time, {
              s: 1,
              onUpdate() {
                let s = scale.s
                if (left) {
                  if (top) {
                    me.g.c().s(c.lineColor).mt(...me.start).lt(me.start[0] - x * s, me.start[1] - x * s)
                  } else {
                    me.g.c().s(c.lineColor).mt(...me.start).lt(me.start[0] - x * s, me.start[1] + x * s)
                  }
                } else {
                  if (top) {
                    me.g.c().s(c.lineColor).mt(...me.start).lt(x * s, me.start[1] - x * s)
                  } else {
                    me.g.c().s(c.lineColor).mt(...me.start).lt(x * s, x * s)
                  }
                }
                me.update()
              }
            })
            this.timeline.add(tl, this.totalTime)
            this.totalTime += c.L1.time
          }

          L2() {
            // 只跟左右有关，只判断left
            let me = this
            let c = me.config
            let tl = new TimelineMax()
            let scale = {s: 0}
            tl.to(scale, c.L2.time, {
              s: 1,
              onUpdate() {
                let s = scale.s
                if (left) {
                  me.g.c().s(c.lineColor).mt(...me.start).lt(...me.L1End).lt(me.L1End[0] - c.L2.long * s, me.L1End[1])
                } else {
                  me.g.c().s(c.lineColor).mt(...me.start).lt(...me.L1End).lt(me.L1End[0] + c.L2.long * s, me.L1End[1])
                }
                me.update()
              }
            })
            this.timeline.add(tl, this.totalTime)
            this.totalTime += c.L2.time
          }

          addText() {
            // text框只与L2end有关，只需判断left即可，top不影响
            let me = this
            let c = me.config
            let tl = new TimelineMax()
            let scale = {s: 0},
              L2End = [me.L1End[0] + c.L2.long, me.L1End[1]]
            if (left) {
              L2End = [me.L1End[0] - c.L2.long, me.L1End[1]]
            }
            tl.to(scale, c.text.time, {
              s: 1,
              onStart() {
                let x = 0, y = 0
                if (left) {
                  x = L2End[0] - c.text.width
                } else {
                  x = L2End[0]
                }
                me.g.c().s(c.lineColor).mt(...me.start).lt(...me.L1End).lt(...L2End)
                me.text = new createjs.Text(c.text.text, c.text.font, c.text.color)
                me.text.alpha = 0
                me.text.lineHeight = c.text.lineHeight
                me.text.x = x + c.text.padding[0]
                me.text.y = L2End[1] - c.text.height / 2 + c.text.padding[1]
                me.stage.addChild(me.text)
                me.textShape.graphics.c().f(c.text.backgroundColor).rr(x, L2End[1] - c.text.height / 2, c.text.width, c.text.height, 5)
                me.textShape.alpha = 0
                me.update()
              },
              onUpdate() {
                if (typeof me.text === 'string') return
                me.text.alpha = scale.s
                me.textShape.alpha = scale.s
                me.update()
              }
            })
            this.timeline.add(tl, this.totalTime)
          }

          update() {
            this.stage.update()
          }
        }

        this.myChart.setOption(this.option)
        var index = 0
        // setInterval(_ => {
          this.myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            // dataIndex: index
          })

        // }, 3000)

      }
    }
  }
</script>

<style scoped>
#myMap{
    height: 100%;
    background: url("../../assets/images/map.png") no-repeat center;
    /*background-size: ;*/
    /*background-position: 0px 0px;*/
}
</style>
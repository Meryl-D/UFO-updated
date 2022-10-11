// import * as d3 from 'd3'

// export function renderShapes() {

//     d3.select('body')
//         .append('main')
//         .attr('class', 'shapes');

//     //console.log(shapes)

//     // const vpWidth = parseInt(d3.select('.shapes').style('width'), 10)
//     // const vpHeight = d3.select('.shapes').clientHeight
//     // console.log(vpHeight, vpHeight)

//     const fireball = d3.select('.shapes')
//         .append('svg')
//         .attr("preserveAspectRatio", "xMinYMin meet")
//         .attr("viewBox", "0 0 300 300")
//         // .attr('width', vpWidth / 3)
//         // .attr('height', vpHeight / 2)
//         .attr('class', 'shape-btn')
//         .attr('data-shape', 'fireball')
    
//     fireball.append('title')
//         .text('Fireball shape')

//     const fbDefs = fireball.append('defs')

//     fbDefs.append('path')
//         .attr('d', 'M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250')
//         .attr('id', 'textcircle')

//     const fbGroup = fbDefs.append('symbol')
//         .attr('id', 'fireball')
//         .append('g')
//         .attr('transform', 'translate(160,160)')

//     fbGroup.append('path')
//         .attr('d', 'M122.233 79.3429L121.785 77.2523L120.829 79.1646C120.742 79.3397 120.645 79.5774 120.544 79.8248C120.488 79.9619 120.431 80.1019 120.373 80.2358C120.195 80.651 119.96 81.1504 119.607 81.7391C118.901 82.9155 117.703 84.4831 115.502 86.4394C111.734 89.7889 111.056 93.4936 111.256 95.093L111.563 97.551L112.671 95.3354C112.813 95.0517 112.926 94.8078 113.027 94.5905C113.319 93.964 113.508 93.5596 113.973 93.0624C114.607 92.3846 115.76 91.5581 118.356 90.1604L118.371 90.1521L118.386 90.1431C120.612 88.8074 121.701 86.6829 122.169 84.6426C122.634 82.6119 122.503 80.5998 122.233 79.3429ZM49.7469 62.5679L49.9166 60.7014L48.5061 61.9356C48.0357 62.3472 47.2602 62.9094 46.3353 63.5799C46.0132 63.8133 45.673 64.0599 45.3213 64.3179C43.994 65.2913 42.5346 66.4047 41.4697 67.4697C38.9246 70.0148 38.3239 72.1244 37.3983 75.3749C37.3591 75.5125 37.3194 75.6521 37.2789 75.794L36.6101 78.1345L38.4801 76.5762C39.641 75.6087 40.4214 74.8933 41.0752 74.294C41.2746 74.1112 41.4623 73.9392 41.6453 73.7741C42.4209 73.0747 43.1423 72.4732 44.416 71.624C48.2742 69.0519 49.5687 64.5283 49.7469 62.5679Z')
//         .attr('fill', '#FF6E01')
//         .attr('stroke', 'white')
//         .attr('stroke-width', '1.5')

//     fbGroup.append('path')
//         .attr('d', 'M116.5 71C99.5 92.5 116.5 50.9117 158.5 1.5C144.9 17.5 111.167 42.5 96 53C93.8333 55 89.3 58.4 88.5 56C87.7 53.6 89.5 51.3333 90.5 50.5C81.5 51 77.5 57.5 76.5 61C75.7 63.8 72.5 68.8333 71 71C69.1667 73 64.8 76.4 62 74C59.2 71.6 62.5 68.5 64 66.5C52.4 71.3 48.1667 79.1667 47.5 82.5C46.6667 87.1667 43.7 96.1 38.5 94.5C33.3 92.9 36.6667 86.1667 39 83C38.5 83 35.6 86.7 32 87.5C21.2 90.7 15.1667 99.8333 13.5 104L11.5 99L8.5 117C6.5 115.8 6.33333 113.833 6.5 113C3.3 116.2 1.83333 121.667 1.5 124C0.333331 132.833 2.7 153.1 21.5 163.5C40.3 173.9 55.6667 165.833 61 160.5C59 161 56.3333 160.833 56 160C78 149.6 84 135 83.5 131.5C78.5 141 66 128.5 82.5 120.5C94.9 114.5 103 101.5 104.5 97C100.9 100.2 97.6667 100 96.5 99.5C112.9 88.7 116.667 76 116.5 71Z')
//         .attr('fill', 'url(#paint0_linear_11_24)')
//         .attr('stroke', 'white')
//         .attr('stroke-width', '2')

//     fbGroup.append('path')
//         .attr('d', 'M81 110.5C65.4 113.3 95.5 72.3333 112.5 51.5C64.8999 99.5 65 89.1667 71 78C45 107.5 51.7799 89.1738 52 89C27.2 108.6 24.3333 104.833 26 100.5C8.39999 110.1 6.33332 129.833 7.49999 138.5C8.49999 145.5 15.2 160.4 34 164C52.8 167.6 66.1666 145.833 70.5 134.5C66.5 134.5 65 128 71 122.5C75.8 118.1 79.6666 112.667 81 110.5Z')
//         .attr('fill', '#FFAA01')
    
//     fbGroup.append('path')
//         .attr('d', 'M 10, 135 a 25,25 0 1,1 50,0 a 25,25 0 1,1 -50,0')
//         .attr('id', 'circle') 

//     fireball.append('use')
//         .attr('xlink:href', '#fireball')

//     const fbGrad = fireball.append('linearGradient')
//         .attr('id', 'paint0_linear_11_24')
//         .attr('x1', '158')
//         .attr('y1', '0.999994')
//         .attr('x2', '21')
//         .attr('y2', '153')
//         .attr('gradientUnits', 'userSpaceOnUse')

//     fbGrad.append('stop')
//         .attr('stop-color', '#FF3E01')

//     fbGrad.append('stop')
//         .attr('offset', '1')
//         .attr('stop-color', '#FFAA01')
    
//     // fireball.append('text')
// }
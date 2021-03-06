export const state = () => ({
  data: [
    {
      id: '1',
      type: '1',
      url: '/m52-01.jpg',
      desc: 'M52 小5系列PDA',
      path: '/products/details/prod=1&det=1'
    },
    {
      id: '2',
      type: '1',
      url: '/m92-01.jpg',
      desc: 'M92全面屏PDA',
      path: '/products/details/prod=1&det=2'
    },
    {
      id: '3',
      type: '1',
      url: '/pd3.jpg',
      desc: 'M71 数字键盘PDA',
      path: '/products/details/prod=1&det=3'
    },
    {
      id: '4',
      type: '1',
      url: '/pd4.png',
      desc: 'M82全触屏PDA',
      path: '/products/details/prod=1&det=4'
    },
    {
      id: '5',
      type: '1',
      url: '/pd5.png',
      desc: 'M82全触屏PDA(医疗)',
      path: '/products/details/prod=1&det=5'
    },
    {
      id: '6',
      type: '2',
      url: '/gd1.jpg',
      desc: 'KS1400 固定式扫描器',
      path: '/products/details/prod=2&det=6'
    },
    {
      id: '7',
      type: '3',
      url: '/yq1.jpg',
      desc: 'E3200 超薄二维影像扫描引擎',
      path: '/products/details/prod=3&det=7'
    },
    {
      id: '8',
      type: '3',
      url: '/yq2.png',
      desc: 'E3250 超薄二维影像扫描引擎',
      path: '/products/details/prod=3&det=8'
    },
    {
      id: '9',
      type: '4',
      url: '/sc1.jpg',
      desc: 'KS1600 二维影像扫描',
      path: '/products/details/prod=4&det=9'
    }
  ]
})

export const mutations = {
  CATEGORY_LIST(state, payload) {
    state.data = payload
  }
}

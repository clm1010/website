export const state = () => ({
  data: [
    {
      type: '1',
      title: '移动数据终端',
      path: '/products/prod/prod=1'
    },
    {
      type: '2',
      title: '固定式扫描器',
      path: '/products/prod/prod=2'
    },
    {
      type: '3',
      title: '扫码引擎',
      path: '/products/prod/prod=3'
    },
    {
      type: '4',
      title: '手持扫描枪',
      path: '/products/prod/prod=4'
    }
  ]
})

export const mutations = {
  CATEGORY(state, payload) {
    state.data = payload
  }
}

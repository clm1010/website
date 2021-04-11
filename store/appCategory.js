export const state = () => ({
  data: [
    {
      type: '1',
      title: '物流仓储',
      path: '/application/app/app=1'
    },
    {
      type: '2',
      title: '智能制造',
      path: '/application/app/app=2'
    },
    {
      type: '3',
      title: '医疗',
      path: '/application/app/app=3'
    },
    {
      type: '4',
      title: '公共事业',
      path: '/application/app/app=4'
    },
    {
      type: '5',
      title: '零售',
      path: '/application/app/app=5'
    }
  ]
})

export const mutations = {
  APP_CATEGORY(state, payload) {
    state.data = payload
  }
}

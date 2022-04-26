export const state = () => ({
    user: null,
    type: 0,
    users: [
      {
        img: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80',
        name: 'Вероника К. (#1254)',
        desc: 'Когда пытаюсь добавить новую...'
      },
      {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsQ-YHX2i3RvTDDmpfnde4qyb2P8up7Wi3Ww&usqp=CAU',
        name: 'Алина П. (#1212)',
        desc: 'Что делать, если запись нельзя...'
      },
      {
        img: 'https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture-986x1024.jpg',
        name: 'Екатерина В. (#21212)',
        desc: 'Выдает ошибку записи, когда за...'
      },
    ],
    userInfo: null,
})

export const mutations = {
    setUser(state, user = {}) {
        state.user = user;
    },
    setType(state, type) {
      state.type = type;
    },
    setUserInfo(state, info) {
      state.userInfo = info
    }
}
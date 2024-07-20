import { login as loginApi, logout, getInfo as getInfoApi } from '@/api/login';
import { getToken, setToken, removeToken } from '@/utils/auth';
import defAva from '@/assets/images/profile.jpg';
import { defineStore } from 'pinia';
import { ref } from 'vue';

// eslint-disable-next-line no-undef
export const useUserStore = defineStore(
  'user',
  () => {
    const token = ref(getToken());
    const id = ref('');
    const name = ref('');
    const avatar = ref('');
    const roles = ref([]);
    const permissions = ref([]);
    // 登录
    const login = userInfo => {
      const username = userInfo.username.trim();
      const password = userInfo.password;
      const code = userInfo.code;
      const uuid = userInfo.uuid;
      return new Promise((resolve, reject) => {
        loginApi(username, password, code, uuid)
          .then(res => {
            setToken(res.token);
            token.value = res.token;
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    };
    // 获取用户信息
    const getInfo = () => {
      return new Promise((resolve, reject) => {
        getInfoApi()
          .then(res => {
            const user = res.user;
            const avatar2 =
              user.avatar === '' || user.avatar == null ? defAva : import.meta.env.VITE_APP_BASE_API + user.avatar;

            if (res.roles && res.roles.length > 0) {
              // 验证返回的roles是否是一个非空数组
              roles.value = res.roles;
              permissions.value = res.permissions;
            } else {
              roles.value = ['ROLE_DEFAULT'];
            }
            id.value = user.userId;
            name.value = user.userName;
            avatar.value = avatar2;
            resolve(res);
          })
          .catch(error => {
            reject(error);
          });
      });
    };
    // 退出系统
    const logOut = () => {
      return new Promise((resolve, reject) => {
        logout(token.value)
          .then(() => {
            token.value = '';
            roles.value = [];
            permissions.value = [];
            removeToken();
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    };

    return {
      token,
      id,
      name,
      avatar,
      roles,
      permissions,
      login,
      getInfo,
      logOut,
    };
  },
  {
    persist: false,
  },
);

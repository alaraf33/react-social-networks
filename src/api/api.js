import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "9a499a72-df21-44ec-93cd-7df4e085fa9e"
    }
});


export const getUsers2 = (currentPage =1, pageSize = 10) => {
    return instance.get(`follow?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        });
}

export const userAPI = {
    getUsers (currentPage =1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId){
       return instance.post(`follow/${userId}`)
    },
    unfollow(userId){
      return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
       return  instance.get(`profile/` + userId);
    }
}


export const authAPI = {
    me() {
       return  instance.get(`auth/me`)
    }
}



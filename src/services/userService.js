import axios from "axios";
import Cookies from "js-cookie";

const baseUrl = "http://localhost:3000";
const defaultAvatar = "https://images.icon-icons.com/1378/PNG/512/avatardefault_92824.png";
const defaultBackground = "https://www.shutterstock.com/image-vector/transparent-pattern-background-simulation-alpha-600nw-2253147461.jpg"

export async function signup(userData) {
    delete userData.confirmPassword;
    const body = {
        ...userData,
        username: userData.name.replaceAll(' ', '').toLowerCase(),
        avatar: defaultAvatar,
        background: defaultBackground
    };
    const response = await axios.post(`${baseUrl}/users`, body);
    return response.data?.data;
}

export async function signin(login) {
    return await axios.post(`${baseUrl}/auth`, login);
}

export async function getLoggedUser() {
    return await axios.get(`${baseUrl}/users/logged`, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`
        }
    })
}

export async function updateProfile(userId, userData) {
    if(!userData.avatar) userData.avatar = defaultAvatar;
    if(!userData.background) userData.background = defaultBackground;

    return await axios.patch(`${baseUrl}/users/${userId}`, userData, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`
        }
    })
}
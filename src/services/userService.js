import axios from "axios";

const baseUrl = "http://localhost:3000";

export async function signup(userData) {
    delete userData.confirmPassword;
    const body = {
        ...userData,
        username: userData.name.replaceAll(' ', '').toLowerCase(),
        avatar: "https://images.icon-icons.com/1378/PNG/512/avatardefault_92824.png",
        background: "https://www.shutterstock.com/image-vector/transparent-pattern-background-simulation-alpha-600nw-2253147461.jpg"
    };
    const response = await axios.post(`${baseUrl}/users`, body);
    return response.data?.data;
}
<template>
    <section class="home">
        <div class="form_container" :class="register ? 'active' : ''">
            <div class="form login_form">
                <form :model="form">
                    <h2>登录</h2>
                    <div class="input_box">
                        <input type="text" placeholder="手机号" required v-model="form.phone" />
                        <i class="uil uil-envelope-alt email"></i>
                    </div>
                    <div class="input_box">
                        <input :type="isshow ? 'password' : 'text'" placeholder="密码" required v-model="form.password" />
                        <i class="uil uil-lock password"></i>
                        <i
                            class="uil"
                            :class="isshow ? 'uil-eye-slash pw_hide' : 'uil-eye pw_hide'"
                            @click="
                                () => {
                                    isshow = !isshow
                                }
                            "
                        ></i>
                    </div>

                    <div class="option_field">
                        <span class="checkbox">
                            <input type="checkbox" id="check" />
                            <label for="check">阅读协议</label>
                        </span>
                        <a href="#" class="forgot_pw">忘记密码?</a>
                    </div>

                    <button class="button" @click="LoginButton" type="button">
                        <!-- 按钮-->
                        开始进入
                    </button>

                    <div class="login_signup">
                        没有账户？
                        <a
                            href="#"
                            id="signup"
                            @click="
                                (e) => {
                                    e.preventDefault()
                                    register = true
                                    isshow = true
                                }
                            "
                            >注册</a
                        >
                    </div>
                </form>
            </div>

            <div class="form signup_form">
                <form action="#">
                    <h2>注册</h2>
                    <div class="input_box">
                        <input type="text" placeholder="手机号" required />
                        <i class="uil uil-envelope-alt email"></i>
                    </div>
                    <div class="input_box">
                        <input :type="isshow ? 'password' : 'text'" placeholder="密码" required />
                        <i class="uil uil-lock password"></i>
                        <i
                            class="uil"
                            :class="isshow ? 'uil-eye-slash pw_hide' : 'uil-eye pw_hide'"
                            @click="
                                () => {
                                    isshow = !isshow
                                }
                            "
                        ></i>
                    </div>

                    <div class="input_box">
                        <input :type="isshow ? 'password' : 'text'" placeholder="再次输入" required />
                        <i class="uil uil-lock password"></i>
                        <i
                            class="uil"
                            :class="isshow ? 'uil-eye-slash pw_hide' : 'uil-eye pw_hide'"
                            @click="
                                () => {
                                    isshow = !isshow
                                }
                            "
                        ></i>
                    </div>

                    <button class="button">现在注册</button>

                    <div class="login_signup">
                        已有账户？
                        <a
                            href="#"
                            id="login"
                            @click="
                                (e) => {
                                    e.preventDefault()
                                    register = false
                                    isshow = true
                                }
                            "
                            >登录</a
                        >
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useUserStore } from '@/stores/user'

const form = reactive({
    phone: '',
    password: ''
})
const store = useUserStore()

const LoginButton = async () => {
    store.Login(form)
}

// 小眼睛
const isshow = ref(true)
const register = ref(false)
// 规则
// const rules = reactive({
//     phone: [
//         {
//             required: true,
//             message: '请输入用户名',
//             trigger: 'blur'
//         }
//     ],
//     password: [
//         {
//             required: true,
//             message: '请输入密码',
//             trigger: 'change'
//         },
//         {
//             pattern: /^[a-zA-Z0-9]{8,16}$/, // 正则
//             message: '只能使用字母或汉字且必须是8-16位',
//             trigger: 'blur'
//         }
//     ]
// })
</script>

<style lang="scss" scoped>
@import url('https://unicons.iconscout.com/release/v4.0.0/css/line.css');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

a {
    text-decoration: none;
}
.button {
    color: #fff;
}
.button {
    padding: 6px 24px;
    border: 2px solid #fff;
    background: transparent;
    border-radius: 6px;
    cursor: pointer;
}
.button:active {
    transform: scale(0.98);
}
/* Home */
.home {
    position: relative;
    height: 100vh;
    width: 100%;
    background-image: url('static/0p7e6p.jpg');
    background-size: cover;
    background-position: center;
}
/* From */
.form_container {
    position: fixed;
    max-width: 320px;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.2);
    /* z-index: 101; */
    background: #fff;
    padding: 25px;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.1);
    transition: all 0.4s ease-out;
}
.home.show .form_container {
    opacity: 1;
    pointer-events: auto;
    transform: translate(-50%, -50%) scale(1);
}
.signup_form {
    display: none;
}
.form_container.active .signup_form {
    display: block;
}
.form_container.active .login_form {
    display: none;
}
.form_container h2 {
    font-size: 22px;
    color: #0b0217;
    text-align: center;
}
.input_box {
    position: relative;
    margin-top: 30px;
    width: 100%;
    height: 40px;
}
.input_box input {
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    padding: 0 30px;
    color: #333;
    transition: all 0.2s ease;
    border-bottom: 1.5px solid #aaaaaa;
}
.input_box input:focus {
    border-color: #7d2ae8;
}
.input_box i {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
    color: #707070;
}
.input_box i.email,
.input_box i.password {
    left: 0;
}
.input_box input:focus ~ i.email,
.input_box input:focus ~ i.password {
    color: #7d2ae8;
}
.input_box i.pw_hide {
    right: 0;
    font-size: 18px;
    cursor: pointer;
}
.option_field {
    margin-top: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.form_container a {
    color: #7d2ae8;
    font-size: 12px;
}
.form_container a:hover {
    text-decoration: underline;
}
.checkbox {
    display: flex;
    column-gap: 8px;
    white-space: nowrap;
}
.checkbox input {
    accent-color: #7d2ae8;
}
.checkbox label {
    font-size: 12px;
    cursor: pointer;
    user-select: none;
    color: #0b0217;
}
.form_container .button {
    background: #7d2ae8;
    margin-top: 30px;
    width: 100%;
    padding: 10px 0;
    border-radius: 10px;
}
.login_signup {
    font-size: 12px;
    text-align: center;
    margin-top: 15px;
}
</style>

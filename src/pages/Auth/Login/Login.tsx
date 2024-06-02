import React, { Component,useState } from 'react'
import { CContainer } from '@coreui/react'
// import styles from '../Signup/SignUp.module.css'
import styles from './Login.module.css';

// import '../Signup/signup.css'

const Login=()=>{

    const [sliderSelected,setSliderSelected]=useState('Password')
    const handleSlider=(sliderValues:string)=>
        {
            setSliderSelected(sliderValues)
        }


    return(<CContainer fluid className={styles.signup_main_container}> 
    <div className={`d-flex p-2 div_back ${styles.div_back}`} >
        <p className={styles.backtext}>Back</p>
    </div>

    <div className={`d-flex p-2 div_back ${styles.div_creteaccount}`} >
        <p className={styles.creteaccount}>Login to an account</p>
    </div>

    <div className={`d-flex p-2 div_back ${styles.div_startnow}`} >
        <p className={styles.startnow}>Start right now</p>
    </div>

  {/* Login WIth otp/password slider */}



    <div className={`input-group mb-3 ${sliderSelected=='Password'?styles.div_sliderMain:''}`}>

    <div className={`input-group mb-3 ${styles.div_sliderMain2}`}>
    <div  className={`${styles.div_sliderPasswrod}`} onClick={()=>handleSlider('Password')}>
            <p className={`${styles.loginWith}`}>Login with Password</p>
        </div>

        <div  className={`${styles.div_sliderOTP}`} onClick={()=>handleSlider('Otp')}>
            <p className={`${styles.loginWith}`}>Login with OTP</p>
        </div>
    </div>
  
         
    </div>
  {/* Forms */}
    <form>
        <div className='div_formMain'>



        
    <div className={`input-group mb-3 ${styles.div_inputgroupEmail}`}>
  {/* <span className="input-group-text" id="basic-addon1">@</span> */}
  <input type="text" className={`form-control ${styles.formInput}`} placeholder="Enter email or phone number" aria-label="Username" aria-describedby="basic-addon1" />
</div>

<div className={`input-group mb-3 ${styles.div_inputgroupEmail}`}>
  {/* <span className="input-group-text" id="basic-addon1">@</span> */}
  <input type="paswword" className={`form-control ${styles.formInput}`} placeholder="Enter password" aria-label="password" aria-describedby="basic-addon1" />
</div>




</div>



    </form>
    <div className={`d-flex p-2 div_back ${styles.div_forgetPassword}`} >
        <p className={styles.forgetPassword}>Forgot Password</p>
    </div>
    <div className={styles.div_buttonMain}>
    <button type="button" className={`btn  ${styles.buttonContinue}`}>Login</button>
    </div>
    <div className={styles.div_checkboxMain}>
<hr className={styles.hrLine}></hr>
<p>Or</p>
<hr className={styles.hrLine}></hr>
</div>
    
<div className={styles.div_alreadyAccount}>
<p className={styles.p_account}> Don't have an account ?</p>
<p className={styles.p_login}> Signup</p>
</div>
   

    </CContainer>)
}

export default Login
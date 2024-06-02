import React, { Component,useState } from 'react'
import { CContainer } from '@coreui/react'
// import styles from '../Signup/SignUp.module.css'
import styles from './resetPassword.module.css';

// import '../Signup/signup.css'

const ResetPassword=()=>{

    const [sliderSelected,setSliderSelected]=useState('Password')
    const handleSlider=(sliderValues:string)=>
        {
            setSliderSelected(sliderValues)
        }


    return(
    <CContainer fluid className={styles.signup_main_container}> 
    <div className={`d-flex p-2 div_back ${styles.div_back}`} >
        <p className={styles.backtext}>Back</p>
    </div>

    <div className={`d-flex p-2 div_back ${styles.div_creteaccount}`} >
        <p className={styles.creteaccount}>Reset password</p>
    </div>

    <div className={`d-flex p-2 div_back ${styles.div_startnow}`} >
        <p className={styles.startnow}>Enter Email or mobile we will send link to reset password</p>
    </div>

  {/* Login WIth otp/password slider */}




  {/* Forms */}
    <form>
        <div className='div_formMain'>



        
    <div className={`input-group mb-3 ${styles.div_inputgroupEmail}`}>
  {/* <span className="input-group-text" id="basic-addon1">@</span> */}
  <input type="text" className={`form-control ${styles.formInput}`} placeholder="Enter email or phone number" aria-label="Username" aria-describedby="basic-addon1" />
</div>





</div>



    </form>
    <div className={`d-flex p-2 div_back ${styles.div_forgetPassword}`} >
        {/* <p className={styles.forgetPassword}>Forgot Password</p> */}
    </div>
    <div className={styles.div_buttonMain}>
    <button type="button" className={`btn  ${styles.buttonContinue}`}>Send Link</button>
    </div>
    <div className={styles.div_checkboxMain}>
<hr className={styles.hrLine}></hr>
<p>Or</p>
<hr className={styles.hrLine}></hr>
</div>
    
<div className={styles.div_alreadyAccount}>
<p className={styles.p_account}>Unable to reset password ?</p>
<p className={styles.p_login}> Get Help</p>
</div>
   

    </CContainer>)
}

export default ResetPassword
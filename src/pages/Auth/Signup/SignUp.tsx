// import React, { Component } from 'react'
import { CContainer } from '@coreui/react'
// import styles from '../Signup/SignUp.module.css'
import styles from './SignUp.module.css';

// import '../Signup/signup.css'

const Signup=()=>{
    return(<CContainer fluid className={styles.signup_main_container}> 
    <div className={`d-flex p-2 div_back ${styles.div_back}`} >
        <p className={styles.backtext}>Back</p>
    </div>

    <div className={`d-flex p-2 div_back ${styles.div_creteaccount}`} >
        <p className={styles.creteaccount}>Create an account</p>
    </div>

    <div className={`d-flex p-2 div_back ${styles.div_startnow}`} >
        <p className={styles.startnow}>Start right now</p>
    </div>

    {/* Forms */}

    <form>
        <div className='div_formMain'>
    <div className={`input-group mb-3 ${styles.div_inputgroupEmail}`}>
  {/* <span className="input-group-text" id="basic-addon1">@</span> */}
  <input type="text" className={`form-control ${styles.formInput}`} placeholder="Enter your name" aria-label="Username" aria-describedby="basic-addon1" />
</div>

<div className={`input-group mb-3 ${styles.div_inputgroupEmail}`}>
  {/* <span className="input-group-text" id="basic-addon1">@</span> */}
  <input type="number" className={`form-control ${styles.formInput}`} placeholder="Enter phone number" aria-label="Phone" aria-describedby="basic-addon1" />
</div>

<div className={`input-group mb-3 ${styles.div_inputgroupEmail}`}>
  {/* <span className="input-group-text" id="basic-addon1">@</span> */}
  <input type="email" className={`form-control ${styles.formInput}`} placeholder="Enter Email ID" aria-label="Email" aria-describedby="basic-addon1" />
</div>

<div className={`input-group mb-3 ${styles.div_inputgroupEmail}`}>
  {/* <span className="input-group-text" id="basic-addon1">@</span> */}
  <input type="password" className={`form-control ${styles.formInput}`} placeholder="Enter password" aria-label="Password" aria-describedby="basic-addon1" />
</div>
</div>

<div className={styles.div_checkboxMain}>
<input className={`form-check-input mt-0 ${styles.checkBox}`} type="checkbox" value="" aria-label="Checkbox for following text input" />
<p className={styles.p_Iagree}> I agree with Terms of Service  and Privacy Policy</p>
</div>

    </form>

    <div className={styles.div_buttonMain}>
    <button type="button" className={`btn  ${styles.buttonContinue}`}>Continue</button>
    </div>
    <div className={styles.div_checkboxMain}>
<hr className={styles.hrLine}></hr>
<p>Or</p>
<hr className={styles.hrLine}></hr>
</div>
    
<div className={styles.div_alreadyAccount}>
<p className={styles.p_account}> Already have an account ?</p>
<p className={styles.p_login}> Login</p>
</div>
   

    </CContainer>)
}

export default Signup
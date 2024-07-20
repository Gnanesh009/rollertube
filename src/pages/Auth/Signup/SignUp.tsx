import React, { Component ,useState} from 'react'
import { CContainer } from '@coreui/react'
// import styles from '../Signup/SignUp.module.css'
import styles from './SignUp.module.css';
import { BASE_URL } from '../../../urls/urls';
import { useNavigate } from 'react-router-dom'; 
import { useFetch } from '../../../hooks/useFetch';
import { WindowAlerts } from '../../../components';
import DoneIcon from '@mui/icons-material/Done';
// import '../Signup/signup.css'

const Signup=()=>{
  const navigate = useNavigate();
  const api_call=useFetch();
  const [showAlertDialog, setShowAlertDialog] = useState(false);
  const [userName,setUserName] =useState('');
  const [phone,setPhone] =useState('');
  const [email,setEmail] =useState('');
  const [password,setPassword] =useState('');
  const [checked,setChecked]=useState(false);
 

  const showAlert=()=>{
    console.log("Alert")
    setShowAlertDialog(true);
    setTimeout(() => setShowAlertDialog(false), 3000);
    return <WindowAlerts message='Success' message_type='success' title='Success' icon={<DoneIcon />} />
   }


   const signUpUser= async ()=>
    {
      try {
        const response=await fetch('http://52.66.176.189:8000/user/',{
          headers:{
            'Content-Type': 'application/json',
          },
          method:'POST',body:JSON.stringify(
            {
              "password": password,
              "username": userName,
            
              "email": email,
              "is_staff": true,
              "is_active": true,
              "date_joined": "2024-06-16T12:41:29.585Z",
              "mobile":phone,
             
            "user_profile":null,
              "groups": [
                
              ],
              "user_permissions": [
                
              ]
            
          })
        })
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Response:', data);
      } catch (error) {
        console.error('Error:', error);
      }
   

    
      // .then((resp)=>resp.json).then((data)=>console.log(data)).catch((err)=>console.log(err))
    }

    return(
    <CContainer fluid className={styles.signup_main_container}> 
   {showAlertDialog && (
        <div className={styles.alertContainer}>
          <div className={styles.alert}>
            <WindowAlerts
              message=""
              message_type="success"
              title="Success"
              icon={<DoneIcon />}
            />
          </div> 
        </div>
      )}
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
  <input type="text" className={`form-control ${styles.formInput} ${styles.formPadding}`}  style={{paddingLeft:'20px'}}
                  placeholder="Enter your name" 
                                     aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => setUserName(e.target.value)} />
</div>

<div className={`input-group mb-3 ${styles.div_inputgroupEmail}`}>
  {/* <span className="input-group-text" id="basic-addon1">@</span> */}
  <input type="number" className={`form-control ${styles.formInput} ${styles.formPadding}`} 
          placeholder="Enter phone number" aria-label="Phone" aria-describedby="basic-addon1" onChange={(e) => setPhone(e.target.value)}  />
</div>

<div className={`input-group mb-3 ${styles.div_inputgroupEmail}`}>
  {/* <span className="input-group-text" id="basic-addon1">@</span> */}
  <input type="email" className={`form-control ${styles.formInput} ${styles.formPadding}`}
         placeholder="Enter Email ID" aria-label="Email" aria-describedby="basic-addon1" onChange={(e) => setEmail(e.target.value)}  />
</div>

<div className={`input-group mb-3 ${styles.div_inputgroupEmail}`}>
  {/* <span className="input-group-text" id="basic-addon1">@</span> */}
  <input type="password" className={`form-control ${styles.formInput} ${styles.formPadding}`} 
                placeholder="Enter password" aria-label="Password" aria-describedby="basic-addon1" onChange={(e) => setPassword(e.target.value)}  />
</div>
</div>

<div className={styles.div_checkboxMain}>
<input className={`form-check-input mt-0 ${styles.checkBox}`} type="checkbox" value="" aria-label="Checkbox for following text input" />
<p className={styles.p_Iagree}> I agree with Terms of Service  and Privacy Policy</p>
</div>
<div className={styles.div_buttonMain} onClick={()=>{
  // navigate('/Login')
  signUpUser()
}}>
    <button type="button" className={`btn  ${styles.buttonContinue}`}>Continue</button>
    </div>
</form>

 
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
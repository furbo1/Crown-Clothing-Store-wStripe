import React from 'react';
import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'
import './sign-in.styles.scss'
import {SignInWithGoogle, auth} from '../../firebase/firebase.utils'


class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = async (e) =>{
        e.preventDefault();
        const {email, password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
            email: '',
            password: ''
            })
        } catch(error){
            console.error(error)
        }


        
    }

    handleChange = (e) =>{
        const {value, name} = e.target;
        this.setState({
            [name]: value
        })
    }
    render(){
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with an email and password.</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    handleChange={this.handleChange} 
                    type="email" 
                    value={this.state.email} 
                    name="email" 
                    required 
                   
                    label="email"
                    />
                    
                    <FormInput 
                    handleChange={this.handleChange} 
                    type="password" 
                    name="password" 
                     
                    value={this.state.password}
                    label="password"
                    
                    />
                    <div className="buttons">
                          <CustomButton type="submit">SIGN IN</CustomButton>
                    <CustomButton type="button" onClick={SignInWithGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                    
                  
                   
                </form>



            </div>
        )
    }
}

export default SignIn;